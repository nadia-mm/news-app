"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface IPaginationButtonControls {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  count: number;
  limit: number;
}

const PaginationButtonControls = ({
  hasNextPage,
  hasPrevPage,
  count,
  limit,
}: IPaginationButtonControls) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page") ?? "1";
  const vLimit = searchParams.get("limit") ?? String(limit);

  return (
    <div className="flex gap-2">
      <button
        aria-label="Previous page"
        className="bg-black text-white p-1 disabled:bg-white disabled:hidden"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`?page=${Number(currentPage) - 1}&limit=${vLimit}`);
        }}
      >
        <span>{"<<"}</span>
      </button>

      <div>
        {currentPage} / {Math.ceil(count / Number(limit))}
      </div>

      <button
        aria-label="Next page"
        className="bg-black text-white p-1 disabled:hidden"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`?page=${Number(currentPage) + 1}&limit=${limit}`);
        }}
      >
        <span>{">>"}</span>
      </button>
    </div>
  );
};

export default PaginationButtonControls;
