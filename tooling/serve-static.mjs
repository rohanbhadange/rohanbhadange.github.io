import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { resolve, sep, extname } from "node:path";

const root = resolve("out");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".glb": "model/gltf-binary", ".woff2": "font/woff2", ".ico": "image/x-icon" };
createServer((req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    let file = resolve(root, `.${path}`);
    if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    if (statSync(file).isDirectory()) file = resolve(file, "index.html");
    const stat = statSync(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream", "Content-Length": stat.size });
    if (req.method === "HEAD") res.end();
    else createReadStream(file).on("error", () => res.destroy()).pipe(res);
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(3200, "127.0.0.1", () => console.log("Static export: http://127.0.0.1:3200"));
