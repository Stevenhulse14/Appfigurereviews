"use client";

import { Review } from "../types/reviews";

// Props interface for the ReviewCard component
type ReviewCardProps = {
  review: Review; // The review data to display
  onDelete?: (id: number) => void; // Optional callback for deletion
  variant?: "dark" | "light" | "black"; // Replace highlighted with variant
};

// Component to display a single review
export function ReviewCard({
  review,
  onDelete,
  variant = "light", // Default to light variant
}: ReviewCardProps) {
  // Function to determine background color
  const getBackgroundColor = () => {
    switch (variant) {
      case "dark":
        return "bg-gray-700";
      case "black":
        return "bg-gray-900";
      default:
        return "bg-gray-100";
    }
  };
  const getBlackColorText = () => {
    return "text-gray-700";
  };

  return (
    // Main card container with conditional styling
    <div
      className={`
      p-4
      rounded-lg
      shadow-sm
      transition-all
      ${getBackgroundColor()}
      ${review.id === 2 ? "prose-content-" + getBlackColorText() : ""}
      hover:shadow-md
      border border-gray-600
    `}
    >
      {/* Header section with rating and app name */}
      <div
        className={`flex items-center gap-2 mb-2 ${
          review.id === 2 ? getBlackColorText() : ""
        }`}
      >
        <p className="text-primary font-semibold">Rating: {review.rating}/5</p>
        <p className="text-orange-light text-xs">{review.appName}</p>
      </div>

      {/* Review text content */}
      <p className={`mb-2 ${review.id === 2 ? getBlackColorText() : ""}`}>
        {review.text}
      </p>

      {/* Footer with date and delete button */}
      <div className="flex justify-between items-center">
        <small className="text-orange-light">{review.date}</small>
        {/* Conditional render of delete button with custom styling */}
        {onDelete && (
          <button
            onClick={() => onDelete(review.id)}
            className="px-3 py-1 rounded-full bg-gradient-end text-white hover:bg-primary transition-colors"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
