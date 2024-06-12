import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

interface IArticleCard {
  id: number;
  rubricName: string;
  title: string;
  author: string;
  imageUrl: string;
  publishedDate: string;
}

const ArticleCard = ({
  id,
  rubricName,
  title,
  author,
  publishedDate,
  imageUrl,
}: IArticleCard) => {
  return (
    <Link href={`/articles/${id}`}>
      <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt="Conde Nast Office"
            fill
            className="rounded-t-lg"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-400">{rubricName}</p>
          <h5 className="text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">
            By {author}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(publishedDate), "dd.MM.yyyy")}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
