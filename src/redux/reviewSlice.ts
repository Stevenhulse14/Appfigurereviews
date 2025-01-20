import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Review, TimePeriod } from "@/types/reviews";

export const fetchReviews = createAsyncThunk<
  { reviews: Review[]; total: number; pages: number },
  { page: number; count: number }
>("reviews/fetchReviews", async ({ page, count }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API base URL not configured");
  }

  const response = await fetch(
    `${baseUrl}?page=${page}&count=${count}&sort=-date&products=56556`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return response.json();
});

interface ReviewState {
  reviews: Review[];
  loading: boolean;
  error: string | null;
  keywordFilter: string;
  starFilter: number;
  selectedPeriod: TimePeriod;
  page: number;
  count: 25 | 50 | 100 | 500;
  totalPages: number;
  totalReviews: number;
  filteredReviews: Review[];
  groupedReviews: Record<TimePeriod, Review[]>;
}

const initialState: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
  keywordFilter: "",
  starFilter: 0,
  selectedPeriod: "Today",
  page: 1,
  count: 25,
  totalPages: 1,
  totalReviews: 0,
  filteredReviews: [],
  groupedReviews: {
    Today: [],
    Yesterday: [],
    "This Week": [],
    "Last Week": [],
    "This Month": [],
    "Last Month": [],
    "Two Months Ago": [],
    "Three Months Ago": [],
  },
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setKeywordFilter: (state, action) => {
      state.keywordFilter = action.payload;
      state.page = 1;
      state.filteredReviews = filterReviews(state.reviews, {
        keyword: action.payload,
        stars: state.starFilter,
      });
      state.groupedReviews = groupReviewsByDate(state.filteredReviews);
    },
    setStarFilter: (state, action) => {
      state.starFilter = action.payload;
      state.page = 1;
      state.filteredReviews = filterReviews(state.reviews, {
        keyword: state.keywordFilter,
        stars: action.payload,
      });
      state.groupedReviews = groupReviewsByDate(state.filteredReviews);
    },
    setSelectedPeriod: (state, action) => {
      state.selectedPeriod = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews = action.payload.reviews;
        state.filteredReviews = filterReviews(action.payload.reviews, {
          keyword: state.keywordFilter,
          stars: state.starFilter,
        });
        state.groupedReviews = groupReviewsByDate(state.filteredReviews);
        state.totalReviews = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / state.count);

        if (state.groupedReviews[state.selectedPeriod].length === 0) {
          const firstPeriodWithReviews = Object.entries(
            state.groupedReviews
          ).find(([_, reviews]) => reviews.length > 0);
          if (firstPeriodWithReviews) {
            state.selectedPeriod = firstPeriodWithReviews[0] as TimePeriod;
          }
        }
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch reviews";
        state.reviews = [];
        state.filteredReviews = [];
        state.groupedReviews = initialState.groupedReviews;
      });
  },
});

// Helper function to filter reviews
function filterReviews(
  reviews: Review[],
  filters: { keyword: string; stars: number }
) {
  let filtered = [...reviews];

  if (filters.keyword) {
    const searchTerm = filters.keyword.toLowerCase();
    filtered = filtered.filter(
      (review) =>
        review.review.toLowerCase().includes(searchTerm) ||
        review.title.toLowerCase().includes(searchTerm) ||
        review.author.toLowerCase().includes(searchTerm)
    );
  }

  if (filters.stars > 0) {
    filtered = filtered.filter(
      (review) => Number(review.stars) === filters.stars
    );
  }

  return filtered;
}

// Add this helper function
function groupReviewsByDate(reviews: Review[]) {
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

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const thisWeekStart = new Date(today);
  thisWeekStart.setDate(today.getDate() - today.getDay()); // Start of current week

  const lastWeekStart = new Date(thisWeekStart);
  lastWeekStart.setDate(thisWeekStart.getDate() - 7);

  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const twoMonthsAgoStart = new Date(
    today.getFullYear(),
    today.getMonth() - 2,
    1
  );
  const threeMonthsAgoStart = new Date(
    today.getFullYear(),
    today.getMonth() - 3,
    1
  );

  reviews.forEach((review) => {
    const reviewDate = new Date(review.date);

    if (reviewDate.toDateString() === today.toDateString()) {
      groups["Today"].push(review);
    } else if (reviewDate.toDateString() === yesterday.toDateString()) {
      groups["Yesterday"].push(review);
    } else if (reviewDate >= thisWeekStart && reviewDate < today) {
      groups["This Week"].push(review);
    } else if (reviewDate >= lastWeekStart && reviewDate < thisWeekStart) {
      groups["Last Week"].push(review);
    } else if (reviewDate >= thisMonthStart) {
      groups["This Month"].push(review);
    } else if (reviewDate >= lastMonthStart && reviewDate < thisMonthStart) {
      groups["Last Month"].push(review);
    } else if (reviewDate >= twoMonthsAgoStart && reviewDate < lastMonthStart) {
      groups["Two Months Ago"].push(review);
    } else if (
      reviewDate >= threeMonthsAgoStart &&
      reviewDate < twoMonthsAgoStart
    ) {
      groups["Three Months Ago"].push(review);
    }
  });

  return groups;
}

export const {
  setKeywordFilter,
  setStarFilter,
  setSelectedPeriod,
  setPage,
  setCount,
} = reviewSlice.actions;

export default reviewSlice.reducer;
