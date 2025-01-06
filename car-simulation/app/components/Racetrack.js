"use client";
import React from "react";

export default function TrackField() {
  return (
    <svg
      width="800"
      height="400"
      viewBox="0 0 800 400"
      style={{
        border: "1px solid black",
        display: "block",
        margin: "0 auto",
      }}
    >
      {/* Outer boundary */}
      <path
        d="M100,100 
           L700,100 
           A100,100 0 0 1 700,300 
           L100,300 
           A100,100 0 0 1 100,100 
           Z"
        fill="none"
        stroke="gray"
        strokeWidth="10"
      />
      {/* Inner boundary */}
      <path
        d="M150,150 
           L650,150 
           A50,50 0 0 1 650,250 
           L150,250 
           A50,50 0 0 1 150,150 
           Z"
        fill="none"
        stroke="black"
        strokeWidth="5"
      />
    </svg>
  );
}
