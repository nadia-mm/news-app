import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import { IArticlePage } from "@/models/interfaces";
import imageSrc from "../../../public/conde-nast-office.jpg";
import { format } from "date-fns";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: IArticlePage): Promise<Metadata> {
  const id = params.id;
  const article = await fetchData(`${process.env.API_ARTICLES_URL}/${id}`);

  return {
    title: article.title,
    description: article.summary,
    authors: article.author,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      images: [
        {
          url: article.imageUrl,
          secureUrl: article.imageUrl,
          alt: "Condé Nast Office",
          width: 100,
          height: 100,
        },
      ],
      publishedTime: format(new Date(article.publishedDate), "dd.MM.yyyy"),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: {
        url: article.imageUrl,
        alt: "Condé Nast Office",
        width: 100,
        height: 100,
      },
    },
  };
}

const ArticlePage = async ({ params }: IArticlePage) => {
  const article = await fetchData(
    `${process.env.API_ARTICLES_URL}/${params.id}`
  );

  if (!article) {
    return <p role="alert">Article Not Found</p>;
  }

  const { rubricName, title, author, summary, content, publishedDate } =
    article;

  return (
    <>
      <article className="max-w-3xl mx-auto p-4">
        <p className="text-gray-500">{rubricName}</p>
        <h1 className="text-3xl font-bold my-4">{title}</h1>
        <h2 className="text-xl text-gray-700 mb-4">{summary}</h2>
        <p className="text-gray-600 mb-2">By {author}</p>
        <p className="text-gray-600 mb-4">
          {format(new Date(publishedDate), "dd.MM.yyyy")}
        </p>
        <div className="relative w-full h-64 mb-4">
          <Image
            src={imageSrc}
            alt="Conde Nast office"
            fill
            className="rounded-lg"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="prose prose-lg max-w-none">
          <p>{content}</p>
        </div>
      </article>
    </>
  );
};

export default ArticlePage;
