"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";

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

export type TimePeriod =
  | "Today"
  | "Yesterday"
  | "This Week"
  | "Last Week"
  | "This Month"
  | "Last Month"
  | "Two Months Ago"
  | "Three Months Ago";

interface GroupedReviews {
  [key: string]: Review[];
}

interface ReviewContextType {
  reviews: Review[];
  totalReviews: number;
  loading: boolean;
  error: string | null;
  keywordFilter: string;
  starFilter: number;
  timeFilter: TimeRange;
  timePeriods: TimePeriod[];
  selectedPeriod: TimePeriod;
  page: number;
  count: number;
  totalPages: number;
  setKeywordFilter: (keyword: string) => void;
  setStarFilter: (rating: number) => void;
  setTimeFilter: (range: TimeRange) => void;
  setSelectedPeriod: (period: TimePeriod) => void;
  setPage: (page: number) => void;
  setCount: (count: 25 | 50 | 100 | 500) => void;
  loadMoreReviews: () => void;
  fetchReviews: () => void;
  groupedReviews: GroupedReviews;
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
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("Today");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState<25 | 50 | 100 | 500>(25);
  const [totalPages, setTotalPages] = useState(1);

  const timePeriods: TimePeriod[] = [
    "Today",
    "Yesterday",
    "This Week",
    "Last Week",
    "This Month",
    "Last Month",
    "Two Months Ago",
    "Three Months Ago",
  ];

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url =
        `https://appfigures.com/_u/jobs/twitter-reviews?` +
        `page=${page}` +
        `&count=${count}` +
        `&sort=-date` +
        `&products=56556`;

      const response = await fetch(url);
      const data = await response.json();

      // Always set new reviews instead of appending
      setReviews(data.reviews || []);
      setTotalReviews(Number(data.total) || 0);
      setTotalPages(data.pages || 1);
    } catch (err: unknown) {
      console.error("Fetch error:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch reviews");
      setTotalReviews(0);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, [page, count]);

  const loadMoreReviews = useCallback(() => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }, [page, totalPages]);

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

  const groupReviewsByDate = useCallback((reviews: Review[]) => {
    const groups = {
      Today: [] as Review[],
      Yesterday: [] as Review[],
      "This Week": [] as Review[],
      "Last Week": [] as Review[],
      "This Month": [] as Review[],
      "Last Month": [] as Review[],
      "Two Months Ago": [] as Review[],
      "Three Months Ago": [] as Review[],
    };

    if (!reviews) return groups;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    reviews.forEach((review) => {
      const reviewDate = new Date(review.date);
      // Set to start of day for accurate comparison
      reviewDate.setHours(0, 0, 0, 0);

      // Calculate differences
      const isToday = reviewDate.getTime() === today.getTime();
      const isYesterday = reviewDate.getTime() === yesterday.getTime();
      const diffDays = Math.floor(
        (today.getTime() - reviewDate.getTime()) / (24 * 60 * 60 * 1000)
      );
      const diffMonths =
        (now.getFullYear() - reviewDate.getFullYear()) * 12 +
        (now.getMonth() - reviewDate.getMonth());

      // Group based on date
      if (isToday) groups["Today"].push(review);
      else if (isYesterday) groups["Yesterday"].push(review);
      else if (diffDays <= 7) groups["This Week"].push(review);
      else if (diffDays <= 14) groups["Last Week"].push(review);
      else if (diffMonths === 0) groups["This Month"].push(review);
      else if (diffMonths === 1) groups["Last Month"].push(review);
      else if (diffMonths === 2) groups["Two Months Ago"].push(review);
      else if (diffMonths === 3) groups["Three Months Ago"].push(review);
    });

    return groups;
  }, []);

  // Add a ref to track initial load
  const initialLoadRef = useRef(false);

  useEffect(() => {
    if (!initialLoadRef.current && reviews.length > 0) {
      const groups = groupReviewsByDate(reviews);
      // Find first period with reviews
      const firstPeriodWithReviews = timePeriods.find(
        (period) => groups[period]?.length > 0
      );

      if (firstPeriodWithReviews) {
        setSelectedPeriod(firstPeriodWithReviews);
        initialLoadRef.current = true; // Mark as initialized
      }
    }
  }, [reviews, groupReviewsByDate, timePeriods]);

  // Add this to debug state changes
  useEffect(() => {
    console.log("Selected period changed to:", selectedPeriod);
  }, [selectedPeriod]);

  const value = {
    reviews,
    totalReviews,
    loading,
    error,
    keywordFilter,
    starFilter,
    timeFilter,
    timePeriods,
    selectedPeriod,
    page,
    count,
    totalPages,
    setKeywordFilter,
    setStarFilter,
    setTimeFilter,
    setSelectedPeriod,
    setPage,
    setCount,
    loadMoreReviews,
    fetchReviews,
    groupedReviews: groupReviewsByDate(filteredReviews()),
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
