"use client";

import ThreeDTitle from "@/components/ThreeDTitle";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <ThreeDTitle />
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Explore and analyze user reviews for the Twitter iOS app with our
          powerful and intuitive interface.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-orange-lighter p-6 rounded-lg shadow-lg relative overflow-hidden
            before:absolute before:inset-0 before:bg-[url('/images/HomeImages/Review.png')] 
            before:bg-cover before:bg-center before:opacity-50 before:transition-opacity
            hover:before:opacity-75"
          >
            <div className="relative z-10">
              <h2
                className="text-2xl font-semibold text-gray-800 mb-4 
                [text-shadow:_0_0_1px_rgba(255,255,255,0.5)]
                transition-colors duration-300"
              >
                Latest Reviews
              </h2>
              <p
                className="text-gray-800 font-black mb-4 text-md 
                [text-shadow:_0_0_1px_rgba(255,255,255,0.5)]
                transition-colors duration-300"
              >
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
          </div>

          <div
            className="bg-orange-lighter p-6 rounded-lg shadow-lg relative overflow-hidden
            before:absolute before:inset-0 before:bg-[url('/images/HomeImages/analytics.png')] 
            before:bg-cover before:bg-center before:opacity-50 before:transition-opacity
            hover:before:opacity-75"
          >
            <div className="relative z-10">
              <h2
                className="text-2xl font-semibold text-gray-800 mb-4 
                [text-shadow:_0_0_1px_rgba(255,255,255,0.5)]
                transition-colors duration-300"
              >
                Analytics
              </h2>
              <p
                className="text-gray-800 font-black mb-4 
                [text-shadow:_0_0_1px_rgba(255,255,255,0.5)]
                transition-colors duration-300"
              >
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
        </div>
      </main>
    </div>
  );
}
