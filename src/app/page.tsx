"use client";
//import NavigationBar from "../components/NavigationBar";
import ThreeDTitle from "@/components/ThreeDTitle";

export default function Home() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <main className="container mx-auto px-4 py-8">
        <ThreeDTitle />
        <h1
          className="text-4xl font-extrabold text-orange-light mb-6 text-center 
          [text-shadow:_0_1px_0_rgb(0_0_0),_0_2px_0_rgb(0_0_0),_0_3px_0_rgb(0_0_0),_0_4px_0_rgb(0_0_0),
          _0_5px_0_rgb(0_0_0),_0_6px_0_rgb(0_0_0),_0_7px_0_rgb(0_0_0),_0_8px_0_rgb(0_0_0),
          _0_9px_0_rgb(0_0_0),_0_10px_30px_rgba(0,0,0,0.6)] 
          tracking-wide transform hover:translate-y-[-5px] transition-transform duration-300"
        >
          Welcome to Appfigures Reviews
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
