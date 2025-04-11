"use client";

import useLenis from "@/components/useLenis";

export default function LenisWrapper({ children }) {
  useLenis();
  return <>{children}</>;
}
