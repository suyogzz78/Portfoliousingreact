import React from "react";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-blue-500 rounded-full opacity-50 blur-3xl animate-blob"></div>
    </div>
  );
};

export default BlurBlob;
