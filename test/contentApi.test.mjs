import test from "node:test";
import assert from "node:assert/strict";
import { Readable } from "node:stream";
import handler from "../api/content.js";

function createRequest({ body = "", headers = {}, method = "GET" } = {}) {
  const request = Readable.from(body ? [body] : []);
  request.method = method;
  request.headers = headers;
  return request;
}

async function callHandler(request) {
  let body = "";
  const response = {
    headers: {},
    statusCode: 0,
    setHeader(key, value) {
      this.headers[key] = value;
    },
    end(value) {
      body = value || "";
    },
  };

  await handler(request, response);

  return {
    body: body ? JSON.parse(body) : null,
    headers: response.headers,
    statusCode: response.statusCode,
  };
}

test("GET falls back to default content when Blob is not configured", async () => {
  const previousBlobToken = process.env.BLOB_READ_WRITE_TOKEN;
  delete process.env.BLOB_READ_WRITE_TOKEN;

  try {
    const response = await callHandler(createRequest());

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.source, "default");
    assert.equal(response.body.content, null);
  } finally {
    if (previousBlobToken) process.env.BLOB_READ_WRITE_TOKEN = previousBlobToken;
  }
});

test("PUT rejects saves when ADMIN_TOKEN is missing", async () => {
  const previousAdminToken = process.env.ADMIN_TOKEN;
  delete process.env.ADMIN_TOKEN;

  try {
    const response = await callHandler(
      createRequest({
        method: "PUT",
        body: JSON.stringify({ content: {} }),
      }),
    );

    assert.equal(response.statusCode, 500);
    assert.match(response.body.error, /ADMIN_TOKEN/);
  } finally {
    if (previousAdminToken) process.env.ADMIN_TOKEN = previousAdminToken;
  }
});

test("PUT rejects invalid admin tokens before reading Blob dependencies", async () => {
  const previousAdminToken = process.env.ADMIN_TOKEN;
  process.env.ADMIN_TOKEN = "expected-token";

  try {
    const response = await callHandler(
      createRequest({
        method: "PUT",
        headers: { "x-admin-token": "wrong-token" },
        body: JSON.stringify({ content: {} }),
      }),
    );

    assert.equal(response.statusCode, 401);
    assert.equal(response.body.error, "Invalid admin token.");
  } finally {
    if (previousAdminToken) {
      process.env.ADMIN_TOKEN = previousAdminToken;
    } else {
      delete process.env.ADMIN_TOKEN;
    }
  }
});
