import Link from "next/link";
import Image from "next/image";
import { IArticleCard } from "@/models/interfaces";
import imageSrc from "../../public/conde-nast-office.jpg";
import { format } from "date-fns";

const ArticleCard = ({
  id,
  rubricName,
  title,
  author,
  publishedDate,
  imageUrl
}: IArticleCard) => {
  return (
    <Link href={`/articles/${id}`}>
      <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
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
          <p className="text-sm text-gray-500 dark:text-gray-400">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(publishedDate), "dd.MM.yyyy")}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
