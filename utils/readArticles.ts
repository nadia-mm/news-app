import { promises as fs } from "fs";
export const readArticles = async () => {
  const file = await fs.readFile(
    process.cwd() + "/public/articles.json",
    "utf8"
  );
  return JSON.parse(file);
};
