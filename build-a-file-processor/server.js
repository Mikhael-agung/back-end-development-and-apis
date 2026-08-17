// Starter file — add your code here

const fs = require("fs");
const crypto = require("crypto");
const os = require("os");
const path = require("path");

// --- os module ---
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.cpus().length);

// --- fs basics ---
const entries = fs.readdirSync("assets");
console.log(entries);

// --- buffer ---
const buf = Buffer.alloc(8, 0xff);
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));
console.log(buf);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

// --- crypto ---
const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
console.log(hash);

const random = crypto.randomBytes(16).toString("hex");
console.log(random);

const id = crypto.randomUUID();
console.log(id);

// --- path ---
const fullPath = path.join(__dirname, "assets", "poem.txt");
console.log(fullPath);

console.log(path.basename(fullPath));
console.log(path.dirname(fullPath));
console.log(path.extname(fullPath));

console.log(path.join("assets", "..", "server.js"));
console.log(path.resolve("assets", "..", "server.js"));

const parts = path.parse(fullPath);
console.log(parts);

// --- process ---
console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);

process.stdout.write("Hello from stdout\n");
process.stderr.write("This is a stderr message\n");

console.log(process.argv);

// --- streams ---
const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
  console.log(chunk);
});

readable.on("end", () => {
  console.log("Done reading");
});

const writable =  fs.createWriteStream('assets/stream-output.txt');
readable.pipe(writable);
