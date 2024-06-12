export type Article = {
  id: number;
  rubricName: string;
  title: string;
  author: string;
  image: string;
  summary: string;
  content: string;
  menu: string;
  subMenu: string;
  publishedDate: string;
  imageUrl: string;
};

export type ArticleResponse = {
  limit: number;
  count: number;
  results: Article[];
};
