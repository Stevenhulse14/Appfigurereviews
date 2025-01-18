"use client";

import { useReviewContext } from "../context/ReviewContext";

export default function StarFilter() {
  const { starFilter, setStarFilter } = useReviewContext();

  return (
    <select
      value={starFilter}
      onChange={(e) => setStarFilter(Number(e.target.value))}
      className="border rounded px-4 py-2 text-gray-700"
    >
      <option value={0}>All Ratings</option>
      {[1, 2, 3, 4, 5].map((rating) => (
        <option key={rating} value={rating}>
          {rating} Star{rating !== 1 ? "s" : ""}
        </option>
      ))}
    </select>
  );
}
