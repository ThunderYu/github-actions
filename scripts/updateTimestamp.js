import * as fs from "fs";
import * as path from "path";

fs.writeFileSync(
  `${path.resolve(__dirname, "../tmp")}/timestamp.txt`,
  "txt文档的内容"
);
