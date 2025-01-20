"use client";

import { useReviewContext } from "@/context/ReviewContext";
import { ChevronLeft, ChevronRight, Search, Star } from "lucide-react";

export default function ReviewFilters() {
  const {
    count,
    setCount,
    loading,
    page,
    totalPages,
    totalReviews,
    setPage,
    keywordFilter,
    setKeywordFilter,
    starFilter,
    setStarFilter,
  } = useReviewContext();

  return (
    <div className="bg-orange-lighter rounded-lg p-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
          <input
            type="text"
            value={keywordFilter}
            onChange={(e) => setKeywordFilter(e.target.value)}
            placeholder="Search reviews..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-white/10 text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Star Filter */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => setStarFilter(rating === starFilter ? 0 : rating)}
              className={`px-3 py-2 rounded-lg text-sm flex items-center gap-1 ${
                rating === starFilter
                  ? "bg-primary text-blue-500"
                  : "bg-white/10 text-gray-700 hover:bg-orange-lighter"
              }`}
            >
              {rating}
              <Star
                className="w-4 h-4"
                fill={rating === starFilter ? "currentColor" : "none"}
              />
            </button>
          ))}
        </div>

        {/* Page Size Selector */}
        <select
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value) as 25 | 50 | 100 | 500);
            setPage(1);
          }}
          className="px-3 py-2.5 rounded-lg text-sm bg-white/10 text-gray-700"
        >
          <option value={25}>25 per page</option>
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
          <option value={500}>500 per page</option>
        </select>

        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1 || loading}
            className="p-2.5 rounded-lg bg-white/10 text-gray-700 hover:bg-orange-lighter disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-700">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages || loading}
            className="p-2.5 rounded-lg bg-white/10 text-gray-700 hover:bg-orange-lighter disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Review Count */}
        <span className="text-sm text-gray-700">
          Showing {Math.min(page * count, totalReviews)} of {totalReviews}{" "}
          reviews
        </span>
      </div>
    </div>
  );
}
