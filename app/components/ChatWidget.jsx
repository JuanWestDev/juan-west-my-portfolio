"use client";
import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    if (document.getElementById("lekkerai-widget")) return;
    const script = document.createElement("script");
    script.id = "lekkerai-widget";
    script.src = "https://factory.lekkerai.co.za/widget/embed.js";
    script.setAttribute("data-lekkerai", "pk_baffefd8aacade20b29395e007af58af");
    document.body.appendChild(script);
  }, []);

  return null;
}
