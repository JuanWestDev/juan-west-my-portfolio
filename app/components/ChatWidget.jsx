"use client";
import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    if (document.getElementById("lekkerai-widget")) return;
    const script = document.createElement("script");
    script.id = "lekkaai-widget";
    script.src = "https://factory.lekkerai.co.za/widget/embed.js";
    script.setAttribute("data-lekkaai", process.env.NEXT_PUBLIC_LEKKERAI_KEY);
    document.body.appendChild(script);
  }, []);

  return null;
}
