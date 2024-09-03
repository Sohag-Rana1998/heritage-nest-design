import React, { useState } from "react";

const PropertyImage = ({ section }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full mx-auto">
      {isPlaying ? (
        <div className="w-full rounded-lg ">
          <iframe
            className="w-full"
            style={{ height: "500px", borderRadius: "20px" }} // Set height to 500px
            src="https://www.youtube.com/embed/zumJJUL_ruM?si=5UoSGu_VvEKRFOUQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div
          className="relative w-full h-[500px] rounded-lg  cursor-pointer"
          onClick={handleThumbnailClick}
        >
          <img
            src={section}
            alt="Video Thumbnail"
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197 1.909a1 1 0 01-1.555-.832V9.755a1 1 0 011.555-.832l3.197 1.909a1 1 0 010 1.664z"
              />
            </svg>
          </div>
        </div>
      )}
      <h3 className="text-center mt-4 text-lg font-semibold">Video Title</h3>
    </div>
  );
};

export default PropertyImage;
