import fs from "fs";
import path from "path";

const _require = require;

const getModel = (file) => {
  return _require(path.join(__dirname, file)).default;
};
