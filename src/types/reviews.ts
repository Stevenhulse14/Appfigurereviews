// Defines the structure of a review object
export type Review = {
  id: number; // Unique identifier for the review
  rating: number; // Rating score (typically 1-5)
  text: string; // The review content
  appName: string; // Name of the reviewed app
  date: string; // Date the review was posted
};

// Defines possible filtering options for reviews
export type ReviewFilters = {
  minRating?: number; // Optional minimum rating filter
  appName?: string; // Optional filter by app name
  dateRange?: {
    // Optional date range filter
    start: string;
    end: string;
  };
};
