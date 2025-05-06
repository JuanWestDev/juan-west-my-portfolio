"use client";
import { useEffect, useState } from "react";
import Shine from "./Shine";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const hasLiked = localStorage.getItem("hasLiked");
    console.log("Initial hasLiked from localStorage:", hasLiked);
    if (hasLiked) {
      setIsLiked(true);
    }

    fetch("/api/likes")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched likes:", data);
        setLikes(data.likes || 0);
      })
      .catch((err) => console.error("Error fetching likes:", err));
  }, []);

  const handleLike = async () => {
    console.log("handleLike called, isLiked:", isLiked);
    if (isLiked) {
      console.log("Button is disabled, cannot like again.");
      return;
    }

    try {
      console.log("Sending POST request to /api/likes");
      const res = await fetch("/api/likes", { method: "POST" });
      console.log("Response status:", res.status);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log("POST response data:", data);
      setLikes(data.likes || 0);
      setIsLiked(true);
      localStorage.setItem("hasLiked", "true");
      console.log("Updated state - likes:", data.likes, "isLiked:", true);
    } catch (err) {
      console.error("Error updating likes:", err);
    }
  };

  return (
    <button
      onClick={() => {
        console.log("Button Clicked");
        handleLike();
      }}
      disabled={isLiked}
      className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none gap-1 disabled:opacity-50 border border-input h-10 p-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 cursor-pointer z-[500] ${
        isLiked
          ? " text-gray-50 cursor-not-allowed"
          : "bg-gray-200 text-gray-50 hover:bg-gray-300"
      } disabled:opacity-100`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill={isLiked ? "#FF0000" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>
        {likes} {likes === 1 ? "Like" : "Likes"}
      </span>
      <Shine />
    </button>
  );
}
