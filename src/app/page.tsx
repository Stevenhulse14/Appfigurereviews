"use client";
//import NavigationBar from "../components/NavigationBar";

export default function Home() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-orange-light mb-6 text-center [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
          Welcome to Appfigures Reviews Explorer
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Explore and analyze user reviews for the Twitter iOS app with our
          powerful and intuitive interface.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-orange-lighter p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Latest Reviews
            </h2>
            <p className="text-gray-700 mb-4">
              Check out the most recent user feedback and ratings for the
              Twitter app. Stay up-to-date with user sentiments and feature
              requests.
            </p>
            <a
              href="/reviews"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              View Reviews
            </a>
          </div>
          <div className="bg-orange-lighter p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Analytics
            </h2>
            <p className="text-gray-700 mb-4">
              Dive into detailed analytics and trends based on user reviews.
              Gain valuable insights to improve your app and user experience.
            </p>
            <a
              href="/analytics"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Explore Analytics
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

// import { Review } from "@/types/reviews";
// import { ReviewCard } from "@/components/ReviewCard";

// // Mock data for development/testing
// // In a real app, this would come from an API call
// const reviews: Review[] = [
//   {
//     id: 1,
//     rating: 5,
//     text: "Great app, love it! The new features are amazing and the interface is so intuitive.",
//     appName: "Instagram",
//     date: "2024-03-20",
//   },
//   {
//     id: 2,
//     rating: 4,
//     text: "Pretty good overall, but could use some performance improvements.",
//     appName: "Instagram",
//     date: "2024-03-19",
//   },
//   {
//     id: 3,
//     rating: 3,
//     text: "It's okay, but I miss some of the old features. The new update is a bit confusing.",
//     appName: "Instagram",
//     date: "2024-03-18",
//   },
// ];

// // Home page component that displays all reviews
// export default function Home() {
//   return (
//     <main className="p-4 bg-gradient-to-r from-gradient-start to-gradient-end">
//       <h1 className="text-2xl font-bold mb-6 text-white">App Reviews</h1>
//       {/* Map through reviews array and render ReviewCard for each */}
//       <div className="space-y-4">
//         <ReviewCard
//           review={reviews[0]}
//           onDelete={(id) => console.log("Delete review:", id)}
//           variant="dark"
//         />
//         <ReviewCard
//           review={reviews[1]}
//           onDelete={(id) => console.log("Delete review:", id)}
//           variant="light"
//         />
//         <ReviewCard
//           review={reviews[2]}
//           onDelete={(id) => console.log("Delete review:", id)}
//           variant="black"
//         />
//       </div>
//     </main>
//   );
//}
