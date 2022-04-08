const fs = require('fs');
const dir = __dirname;

const files = fs.readdirSync(dir)
const updated = files.filter(x => x.endsWith(".ts")).map(x => x.replace(".ts", "")).map(x => `export * from './${x}'`);
const text = updated.join("\n");
fs.writeFileSync(`${dir}/index.ts`, text);
