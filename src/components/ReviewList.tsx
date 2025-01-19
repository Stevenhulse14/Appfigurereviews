"use client";

import { useEffect } from "react";
import { useReviewContext } from "../context/ReviewContext";
import ReviewAccordion from "./ReviewAccordion";
import LoadingReviews from "./LoadingReviews";

export default function ReviewList() {
  const { groupedReviews, fetchReviews, loading, error } = useReviewContext();

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (loading) return <LoadingReviews />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div>
      {Object.entries(groupedReviews).map(([date, reviews]) => (
        <ReviewAccordion key={date} title={date} reviews={reviews} />
      ))}
      <button
        onClick={() => fetchReviews()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load More
      </button>
    </div>
  );
}
