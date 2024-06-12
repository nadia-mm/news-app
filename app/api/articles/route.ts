import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/public/articles.json",
    "utf8"
  );
  const articles = JSON.parse(file);
  return NextResponse.json(articles);
}
