import { Review } from "../context/ReviewContext";
import ReviewItem from "./ReviewItem";

type ReviewGroupProps = {
  date: string;
  reviews: Review[];
};

export default function ReviewGroup({ date, reviews }: ReviewGroupProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{date}</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
