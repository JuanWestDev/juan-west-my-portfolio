"use client";

import useLenis from "@/app/components/useLenis";

export default function LenisWrapper({ children }) {
  useLenis();
  return <>{children}</>;
}
