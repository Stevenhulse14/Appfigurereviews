"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export interface Review {
  author: string;
  title: string;
  review: string;
  original_title: string;
  original_review: string;
  stars: string;
  iso: string;
  version: string;
  date: string;
  deleted: boolean;
  has_response: boolean;
  product: number;
  product_id: number;
  product_name: string;
  vendor_id: string;
  store: string;
  weight: number;
  id: string;
  predicted_langs: string[];
}

export type TimeRange =
  | "All"
  | "Today"
  | "Yesterday"
  | "This Week"
  | "Last Week"
  | "This Month"
  | "Earlier";

interface ReviewContextType {
  reviews: Review[];
  totalReviews: number;
  loading: boolean;
  error: string | null;
  keywordFilter: string;
  starFilter: number;
  timeFilter: TimeRange;
  setKeywordFilter: (keyword: string) => void;
  setStarFilter: (rating: number) => void;
  setTimeFilter: (range: TimeRange) => void;
  fetchReviews: () => void;
  filteredReviews: Review[];
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [keywordFilter, setKeywordFilter] = useState("");
  const [starFilter, setStarFilter] = useState(0);
  const [timeFilter, setTimeFilter] = useState<TimeRange>("All");

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://appfigures.com/_u/jobs/twitter-reviews?stars=5&count=100&products=56556"
      );
      const data = await response.json();
      console.log(data);
      setReviews(data.reviews);
      setTotalReviews(data.total);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredReviews = useCallback(() => {
    let filtered = reviews;

    // Apply keyword filter
    if (keywordFilter) {
      const searchTerm = keywordFilter.toLowerCase();
      filtered = filtered.filter(
        (review) =>
          review.review.toLowerCase().includes(searchTerm) ||
          review.title.toLowerCase().includes(searchTerm) ||
          review.author.toLowerCase().includes(searchTerm)
      );
    }

    // Apply star filter
    if (starFilter > 0) {
      filtered = filtered.filter(
        (review) => Number(review.stars) === starFilter
      );
    }

    return filtered;
  }, [reviews, keywordFilter, starFilter]);

  const value = {
    reviews,
    totalReviews,
    loading,
    error,
    keywordFilter,
    starFilter,
    timeFilter,
    setKeywordFilter,
    setStarFilter,
    setTimeFilter,
    fetchReviews,
    filteredReviews: filteredReviews(),
  };

  return (
    <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>
  );
}

export function useReviewContext() {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error("useReviewContext must be used within a ReviewProvider");
  }
  return context;
}
