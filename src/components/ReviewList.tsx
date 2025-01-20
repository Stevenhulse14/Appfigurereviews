"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchReviews } from "@/redux/reviewSlice";
import ReviewItem from "./ReviewItem";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default function ReviewList() {
  const dispatch = useAppDispatch();
  const { groupedReviews, selectedPeriod, loading, error, page, count } =
    useSelector((state: RootState) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews({ page, count }));
  }, [dispatch, page, count]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

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
