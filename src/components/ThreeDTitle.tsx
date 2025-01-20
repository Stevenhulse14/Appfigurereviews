"use client";

export default function ThreeDTitle() {
  return (
    <div className="mb-6">
      <h1
        className="text-4xl md:text-5xl font-bold text-center py-2
        bg-gradient-to-r from-blue-500 via-orange-lighter to-blue-700
        bg-clip-text text-transparent
        [text-shadow:_1px_1px_0_rgb(31,41,55),_-1px_-1px_0_rgb(31,41,55),
        _1px_-1px_0_rgb(31,41,55),_-1px_1px_0_rgb(31,41,55)]
        transform hover:-translate-y-1
        transition-all duration-300 ease-out
        relative
        after:absolute after:bottom-0 after:left-1/2 
        after:w-48 after:h-1 after:bg-blue-600
        after:-translate-x-1/2 after:rounded-full
        after:opacity-75
        hover:after:w-64
        after:transition-all after:duration-300
      "
      >
        Welcome to Appfigures Reviews
      </h1>
    </div>
  );
}
