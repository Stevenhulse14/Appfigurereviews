"use client";

import { useState } from "react";
import { useReviewContext } from "../context/ReviewContext";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setKeywordFilter } = useReviewContext();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setKeywordFilter(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search reviews..."
        className="border rounded-l px-4 py-2 w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
      >
        Search
      </button>
    </form>
  );
}
