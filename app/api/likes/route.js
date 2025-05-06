import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

const LIKES_KEY = "likes_data";

const initializeLikesData = async () => {
  const existingData = await redis.get(LIKES_KEY);
  if (!existingData) {
    const initialData = { likes: 0, version: 1 };
    await redis.set(LIKES_KEY, JSON.stringify(initialData));
    return initialData;
  }
  return JSON.parse(existingData);
};

const getLikesData = async () => {
  const data = await initializeLikesData();
  return data;
};

const updateLikesData = async (newData) => {
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
