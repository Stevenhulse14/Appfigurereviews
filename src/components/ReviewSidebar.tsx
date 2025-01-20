"use client";

import { useDispatch, useSelector } from "react-redux";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { RootState } from "@/redux/store";
import { setSelectedPeriod } from "@/redux/reviewSlice";
import { TimePeriod } from "@/types/reviews";
import { useState, useEffect } from "react";

const abbreviations: Record<TimePeriod, string> = {
  Today: "T",
  Yesterday: "Y",
  "This Week": "TW",
  "Last Week": "LW",
  "This Month": "TM",
  "Last Month": "LM",
  "Two Months Ago": "2M",
  "Three Months Ago": "3M",
};

export default function ReviewSidebar() {
  const dispatch = useDispatch();
  const { groupedReviews, selectedPeriod } = useSelector(
    (state: RootState) => state.reviews
  );
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`${
        isCollapsed ? "w-16" : "w-42"
      } transition-all duration-300 bg-orange-lighter/50 rounded-lg relative`}
    >
      <div className="flex items-center justify-between p-2 border-b border-orange-light">
        {!isCollapsed && (
          <h2 className="text-primary font-semibold flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Time Periods
          </h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-primary text-gray-700 rounded-full p-1 hover:bg-primary/80 ml-auto"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      <ul className="p-2 bg-orange-lighter">
        {timePeriods.map((period) => (
          <li key={period}>
            <button
              onClick={() => dispatch(setSelectedPeriod(period))}
              className={`w-full text-left px-2 py-2.5 rounded-lg text-xxs flex justify-between text-gray-700 items-center ${
                selectedPeriod === period
                  ? "bg-primary text-white"
                  : "hover:bg-orange-lighter"
              }`}
            >
              {isCollapsed ? (
                <div className="relative w-full flex justify-center">
                  <span>{abbreviations[period]}</span>
                  <span
                    className={`absolute -top-3 -right-1 text-xs ${
                      groupedReviews[period].length > 0
                        ? "text-green-500"
                        : "text-red-700"
                    }`}
                  >
                    {groupedReviews[period].length || 0}
                  </span>
                </div>
              ) : (
                <>
                  <span>{period}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      groupedReviews[period].length > 0
                        ? "bg-green-900/20 text-green-700"
                        : "bg-red-900/20 text-red-700"
                    }`}
                  >
                    {groupedReviews[period].length || 0}
                  </span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
