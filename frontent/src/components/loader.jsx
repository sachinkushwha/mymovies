export const WaveLoader = () => {
  return (
    <div className="p-4 w-full max-w-sm mx-auto">
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="h-40 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

