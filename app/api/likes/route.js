// app/api/likes/route.js
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

// Only initialize Redis if environment variables are present
const redis =
  process.env.REDIS_URL && process.env.REDIS_TOKEN
    ? new Redis({
        url: process.env.REDIS_URL,
        token: process.env.REDIS_TOKEN,
      })
    : null;

const LIKES_KEY = "likes_data";

const initializeLikesData = async () => {
  if (!redis) {
    console.log("Redis not initialized, returning default data");
    return { likes: 0, version: 1 };
  }

  const existingData = await redis.get(LIKES_KEY);
  if (!existingData) {
    const initialData = { likes: 0, version: 1 };
    await redis.set(LIKES_KEY, JSON.stringify(initialData));
    return initialData;
  }
  return existingData; // No need for JSON.parse, Upstash already parses the JSON string
};

const getLikesData = async () => {
  const data = await initializeLikesData();
  return data;
};

const updateLikesData = async (newData) => {
  if (!redis) {
    console.log("Redis not initialized, skipping update");
    return;
  }
  await redis.set(LIKES_KEY, JSON.stringify(newData));
};

export async function GET() {
  try {
    const data = await getLikesData();
    console.log("GET /api/likes - Returning data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in GET /api/likes:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const data = await getLikesData();
    const newLikes = data.likes + 1;
    data.likes = newLikes;
    await updateLikesData(data);
    console.log("POST /api/likes - Updated likes:", newLikes);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in POST /api/likes:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
