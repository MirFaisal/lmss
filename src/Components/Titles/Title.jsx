import React from "react";

export default function Title({ title, slogan, color, className }) {
  return (
    <>
      <div className="mx-auto">
        <h2
          className={`max-w-[600px] mx-auto text-5xl font-semibold text-center pt-10 pb-5 leading-snug ${className}`}
          style={{ color: color }}
        >
          {title}
        </h2>
        {slogan && <p className="text-center">{slogan}</p>}
      </div>
    </>
  );
}
