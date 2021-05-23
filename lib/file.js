import fs from "fs";
import path from "path";

const root = process.cwd();

export async function getAllFiles(type) {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allProjects, currentProject) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, currentProject),
      "utf8"
    );
    const data = JSON.parse(source);
    return [data, ...allProjects];
  }, []);
}
