"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Review } from "@/context/ReviewContext";
import ReviewItem from "./ReviewItem";

type ReviewAccordionProps = {
  title: string;
  reviews: Review[];
};

export default function ReviewAccordion({
  title,
  reviews,
}: ReviewAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white/5 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <span className="text-lg font-semibold text-orange-light">
          {title} ({reviews.length})
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-light" />
        ) : (
          <ChevronDown className="w-5 h-5 text-orange-light" />
        )}
      </button>
      {isOpen && (
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))
            ) : (
              <p className="text-gray-400 text-center italic col-span-full">
                No reviews for this period
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
