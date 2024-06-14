import { fetchData } from "@/utils/fetchData";
import { Article, ArticleResponse } from "@/app/types";
import PaginationPage from "../pagination/PaginationPage";

interface IArticleCardListByMenu {
  params: {
    menu: string;
  };
}

const ArticleCardListByMenu = async ({ params }: IArticleCardListByMenu) => {
  const { menu } = params;

  const data: ArticleResponse = await fetchData(
    `${process.env.API_ARTICLES_URL}`
  );
  const { limit, results } = data;

  const cards: Article[] = results.filter(
    (item: Article) =>
      item.menu.toLocaleLowerCase() === menu.toLocaleLowerCase()
  );

  if (cards.length === 0) {
    <p role="alert">No Articles found</p>;
  }

  return (
    <div>
      <PaginationPage data={cards} limit={limit} />
    </div>
  );
};

export default ArticleCardListByMenu;
