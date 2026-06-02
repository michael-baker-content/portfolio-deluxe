import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const defaultUrl = "https://michaelbaker.vercel.app/api/content";
const contentUrl = process.argv[2] || process.env.CONTENT_API_URL || defaultUrl;
const outputPath = process.argv[3] || process.env.CONTENT_OUTPUT_PATH || "content-snapshots/latest-content.json";

async function main() {
  const response = await fetch(contentUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch content from ${contentUrl}: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();

  if (!payload.content) {
    throw new Error(`No content object found at ${contentUrl}.`);
  }

  const resolvedOutputPath = path.resolve(outputPath);
  await mkdir(path.dirname(resolvedOutputPath), { recursive: true });
  await writeFile(resolvedOutputPath, `${JSON.stringify(payload.content, null, 2)}\n`, "utf8");

  console.log(`Saved live content to ${resolvedOutputPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
