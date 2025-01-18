import { Star } from "lucide-react";
import { Review } from "../context/ReviewContext";

export default function ReviewItem({ review }: { review: Review }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{review.title}</h3>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Number(review.stars)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-2">{review.review}</p>
      <div className="text-sm text-gray-500">
        <span>{review.author}</span> • <span>{formatDate(review.date)}</span>
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
