"use client";

import { useEffect } from "react";
import { useReviewContext, Review } from "../context/ReviewContext";
import ReviewAccordion from "./ReviewAccordion";
import LoadingReviews from "./LoadingReviews";

export default function ReviewList() {
  const { filteredReviews, fetchReviews, loading, error } = useReviewContext();

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  if (loading) return <LoadingReviews />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  const groupedReviews = groupReviewsByDate(filteredReviews);

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

function groupReviewsByDate(reviews: Review[]) {
  const groups = {
    Today: [] as Review[],
    Yesterday: [] as Review[],
    "This Week": [] as Review[],
    "Last Week": [] as Review[],
    "This Month": [] as Review[],
    Earlier: [] as Review[],
  };

  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000;

  reviews.forEach((review) => {
    const reviewDate = new Date(review.date);
    const diffDays = Math.round(
      (now.getTime() - reviewDate.getTime()) / oneDay
    );

    if (diffDays === 0) {
      groups["Today"].push(review);
    } else if (diffDays === 1) {
      groups["Yesterday"].push(review);
    } else if (diffDays <= 7) {
      groups["This Week"].push(review);
    } else if (diffDays <= 14) {
      groups["Last Week"].push(review);
    } else if (
      reviewDate.getMonth() === now.getMonth() &&
      reviewDate.getFullYear() === now.getFullYear()
    ) {
      groups["This Month"].push(review);
    } else {
      groups["Earlier"].push(review);
    }
  });

  return groups;
}
