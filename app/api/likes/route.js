import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const filePath = path.join(process.cwd(), "data", "likes.json");

const initializeLikesFile = () => {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify({ likes: 0 }));
  }
};

const getLikes = () => {
  initializeLikesFile();
  const data = fs.readFileSync(filePath);
  return JSON.parse(data).likes;
};

const updateLikes = (newLikes) => {
  initializeLikesFile();
  fs.writeFileSync(filePath, JSON.stringify({ likes: newLikes }));
};

export async function GET() {
  try {
    const likes = getLikes();
    console.log("GET /api/likes - Returning likes:", likes);
    return NextResponse.json({ likes });
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
    const currentLikes = getLikes();
    const newLikes = currentLikes + 1;
    updateLikes(newLikes);
    console.log("POST /api/likes - Updated likes:", newLikes);
    return NextResponse.json({ likes: newLikes });
  } catch (error) {
    console.error("Error in POST /api/likes:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
