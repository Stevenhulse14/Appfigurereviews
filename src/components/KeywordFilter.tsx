"use client";

import { useReviewContext } from "../context/ReviewContext";
import { Search } from "lucide-react";

export default function KeywordFilter() {
  const { keywordFilter, setKeywordFilter } = useReviewContext();

  return (
    <div className="relative">
      <input
        type="text"
        value={keywordFilter}
        onChange={(e) => setKeywordFilter(e.target.value)}
        placeholder="Search reviews..."
        className="pl-9 pr-4 py-1 text-sm border border-gray-600 rounded bg-white/10 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
    </div>
  );
}
