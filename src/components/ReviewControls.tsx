"use client";

import { useReviewContext } from "@/context/ReviewContext";

export default function ReviewControls() {
  const { count, setCount, loadMoreReviews, loading, page, totalPages } =
    useReviewContext();

  return (
    <div className="flex justify-between items-center mt-4">
      <select
        value={count}
        onChange={(e) => setCount(Number(e.target.value) as 25 | 50 | 100)}
        className="border rounded px-3 py-1 text-sm bg-white/10"
      >
        <option value={25}>25 per page</option>
        <option value={50}>50 per page</option>
        <option value={100}>100 per page</option>
      </select>

      {page < totalPages && (
        <button
          onClick={loadMoreReviews}
          disabled={loading}
          className="bg-primary text-white px-4 py-1 rounded hover:bg-primary/80 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load More Reviews"}
        </button>
      )}
    </div>
  );
}
