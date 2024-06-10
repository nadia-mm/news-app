import { Article } from "./types";

export interface IArticleCard {
  id: number;
  rubricName: string;
  title: string;
  author: string;
  imageUrl: string;
  publishedDate: string;
}

export interface IArticleCardListByMenu {
  params: {
    menu: string;
  };
}

export interface IArticleCardListByMenuAndSubmenu {
  params: {
    menu: string;
    submenu: string;
  };
}


export interface IArticlePage {
  params: {
    id: string;
  };
}

export interface IArticlePage {
  params: {
    id: string;
  };
}

export interface IPaginationPage {
  data: Article[];
  limit: number;
}

export interface IPaginationButtonControls {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  count: number;
  limit: number;
}

/*
export interface IMetadata {
  title: string;
  description: string;
}*/