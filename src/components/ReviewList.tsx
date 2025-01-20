"use client";

import { useEffect } from "react";
import { useReviewContext } from "../context/ReviewContext";
import ReviewItem from "./ReviewItem";
import LoadingReviews from "./LoadingReviews";

export default function ReviewList() {
  const { groupedReviews, selectedPeriod, fetchReviews, loading, error } =
    useReviewContext();

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (loading) return <LoadingReviews />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const reviews = groupedReviews[selectedPeriod] || [];

  return (
    <div className="grid grid-cols-1 min-[470px]:grid-cols-2 gap-4">
      {reviews.map((review, index) => (
        <ReviewItem key={`${review.id}-${index}`} review={review} />
      ))}
      {reviews.length === 0 && (
        <p className="text-gray-500 text-center col-span-full">
          No reviews for this period
        </p>
      )}
    </div>
  );
}
