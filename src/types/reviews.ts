export type TimePeriod =
  | "Today"
  | "Yesterday"
  | "This Week"
  | "Last Week"
  | "This Month"
  | "Last Month"
  | "Two Months Ago"
  | "Three Months Ago";

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

export type ReviewFilters = {
  minRating?: number;
  appName?: string;
  dateRange?: {
    start: string;
    end: string;
  };
};
