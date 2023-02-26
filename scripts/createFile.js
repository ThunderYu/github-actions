#!bash
const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  `${path.resolve(__dirname, "../tmp")}/${Date.now()}.txt`,
  "txt文档的内容"
);
