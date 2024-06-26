import { fetchData } from "@/utils/fetchData";
import { Article, ArticleResponse } from "@/app/types";
import PaginationPage from "@/app/pagination/PaginationPage";

interface IArticleCardListByMenuAndSubmenu {
  params: {
    menu: string;
    submenu: string;
  };
}

const ArticleCardListByMenuAndSubmenu = async ({
  params,
}: IArticleCardListByMenuAndSubmenu) => {
  const { menu, submenu } = params;
  const data: ArticleResponse = await fetchData(
    `${process.env.API_ARTICLES_URL}`
  );
  const { limit, results } = data;

  const cards: Article[] = results.filter(
    (item) =>
      item.menu.toLocaleLowerCase() === menu.toLocaleLowerCase() &&
      item.subMenu.toLocaleLowerCase() === submenu?.toLocaleLowerCase()
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

export default ArticleCardListByMenuAndSubmenu;
