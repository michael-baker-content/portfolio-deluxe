const CONTENT_PATHNAME = "portfolio/content.json";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function readStoredContent() {
  try {
    const { get } = await import("@vercel/blob");
    const result = await get(CONTENT_PATHNAME, { access: "private" });

    if (!result || result.statusCode !== 200 || !result.stream) {
      return null;
    }

    const text = await new Response(result.stream).text();
    return JSON.parse(text);
  } catch (error) {
    if (error?.name === "BlobNotFoundError" || error?.message?.includes("not found")) {
      return null;
    }

    throw error;
  }
}

function assertAdmin(request) {
  const expectedToken = process.env.ADMIN_TOKEN;

  if (!expectedToken) {
    return { ok: false, status: 500, message: "ADMIN_TOKEN is not configured." };
  }

  const providedToken = request.headers["x-admin-token"];

  if (providedToken !== expectedToken) {
    return { ok: false, status: 401, message: "Invalid admin token." };
  }

  return { ok: true };
}

export default async function handler(request, response) {
  try {
    if (request.method === "GET") {
      const content = await readStoredContent();
      return sendJson(response, content ? 200 : 404, { content, source: content ? "blob" : "default" });
    }

    if (request.method === "PUT") {
      const auth = assertAdmin(request);
      if (!auth.ok) return sendJson(response, auth.status, { error: auth.message });

      const { put } = await import("@vercel/blob");
      const body = await readBody(request);
      const payload = JSON.parse(body || "{}");

      if (!payload.content || typeof payload.content !== "object") {
        return sendJson(response, 400, { error: "Expected a content object." });
      }

      const blob = await put(CONTENT_PATHNAME, JSON.stringify(payload.content, null, 2), {
        access: "private",
        allowOverwrite: true,
        cacheControlMaxAge: 60,
        contentType: "application/json",
      });

      return sendJson(response, 200, { ok: true, blob: { pathname: blob.pathname, etag: blob.etag } });
    }

    response.setHeader("Allow", "GET, PUT");
    return sendJson(response, 405, { error: "Method not allowed." });
  } catch (error) {
    return sendJson(response, 500, { error: error?.message || "Unexpected content API error." });
  }
}
