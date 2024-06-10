"use client";
import { IPaginationPage } from "@/models/interfaces";
import ArticleCard from "../articles/ArticleCard";
import PaginationButtonControls from "./PaginationButtonControls";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

const PaginationPage = ({ limit, data }: IPaginationPage) => {
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page") ?? "1";
  const vLimit = searchParams.get("limit") ?? String(limit);

  const start = (Number(currentPage) - 1) * Number(vLimit);
  const end = start + Number(vLimit);

  const entries = data.slice(start, end);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {entries.map(({ id, rubricName, title, author, publishedDate, imageUrl }) => (
          <ArticleCard
            key={id}
            id={id}
            rubricName={rubricName}
            title={title}
            author={author}
            publishedDate={format(new Date(publishedDate), "dd.MM.yyyy")}
            imageUrl={imageUrl}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <PaginationButtonControls
          hasNextPage={end < data.length}
          hasPrevPage={start > 0}
          count={data.length}
          limit={limit}
        />
      </div>
    </div>
  );
};

export default PaginationPage;
