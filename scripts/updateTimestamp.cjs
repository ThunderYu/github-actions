const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  `${path.resolve(__dirname, "../tmp")}/timestamp.txt`,
  "txt文档更新后的内容"
);
