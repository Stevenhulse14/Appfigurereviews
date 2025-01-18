export default function LoadingReviews() {
  return (
    <div className="space-y-6 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white/10 rounded-lg p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="h-4 bg-gray-300/20 rounded w-1/4"></div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full bg-gray-300/20"
                ></div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300/20 rounded w-1/2"></div>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="h-3 bg-gray-300/20 rounded w-24"></div>
            <div className="h-3 bg-gray-300/20 rounded w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
