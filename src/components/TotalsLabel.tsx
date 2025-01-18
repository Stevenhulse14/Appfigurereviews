"use client";

import { useReviewContext } from "../context/ReviewContext";

export default function TotalsLabel() {
  const { totalReviews } = useReviewContext();

  return (
    <div className="text-lg font-semibold">Total Reviews: {totalReviews}</div>
  );
}
