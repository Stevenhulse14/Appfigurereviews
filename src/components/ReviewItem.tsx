"use client";

import { Star, Share2, MessageCircle, Languages } from "lucide-react";
import { Review } from "@/types/reviews";

export default function ReviewItem({ review }: { review: Review }) {
  return (
    <div
      className="bg-orange-lighter rounded-lg p-5 shadow-lg flex flex-col min-h-[250px] relative group hover:animate-pulse-slow"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 212, 173, 0.7), rgba(255, 212, 173, 0.7)), url("/images/logos/appfiguresLogo.png")',
        backgroundPosition: "95% 5%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50px auto",
      }}
    >
      <div className="flex flex-col items-start mb-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-8 h-8 ${
                i < Number(review.stars)
                  ? "text-blue-400 fill-current"
                  : "text-gray-700"
              }`}
            />
          ))}
        </div>
        <h3 className="text-lg font-semibold text-primary line-clamp-1">
          {review.title}
        </h3>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-gray-700 mb-auto text-xxs line-clamp-3">
          {review.review}
        </p>
      </div>
      <div className="space-y-2">
        <div className="text-xxs text-gray-500 flex gap-1 items-center">
          <span>By {review.author} ·</span>
          <span>{formatDate(review.date)}</span>
        </div>
        <div className="flex justify-end gap-4 pt-2 border-t border-orange-light">
          <button className="flex flex-col items-center gap-1 text-xs text-gray-600 hover:text-blue-500">
            <Languages className="w-3 h-3" />
            <span className="text-xxs">Translate</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-xs text-gray-600 hover:text-blue-500">
            <Share2 className="w-3 h-3" />
            <span className="text-xxs">Share</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-xs text-gray-600 hover:text-blue-500">
            <MessageCircle className="w-3 h-3" />
            <span className="text-xxs">Reply</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
