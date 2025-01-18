"use client";

import ReviewList from "@/components/ReviewList";
import KeywordFilter from "@/components/KeywordFilter";
import StarFilter from "@/components/StarFilter";

export default function Reviews() {
  return (
    <main className="container mx-auto px-1 py-2">
      <h5 className="text-xl font-bold text-orange-light mb-2 text-center [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
        Twitter App Reviews
      </h5>
      <div className="flex justify-end gap-4 mb-4">
        <KeywordFilter />
        <StarFilter />
      </div>
      <ReviewList />
    </main>
  );
}
