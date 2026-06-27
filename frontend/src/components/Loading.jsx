import React from "react";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-indigo-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
      </div>

      {/* Text */}
      <p className="mt-5 text-lg font-medium text-gray-700 animate-pulse">
        {text}
      </p>
    </div>
  );
};

export default Loading;