import { NextRequest, NextResponse } from "next/server";
import { Article } from "@/models/types";
import { readArticles } from "@/utils/readArticles";

function extractNumberFromUrl(url: string): Number | null {
  const match = url.match(/\/api\/articles\/(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return null;
}

export async function GET(req: NextRequest) {
  const articles = await readArticles();

  const articleId = extractNumberFromUrl(new URL(req.url).pathname);
  if (articleId) {
    const article =
      articles.results &&
      articles.results.find((article: Article) => article.id === articleId);
    return NextResponse.json(article);
  } else {
    return null;
  }
}