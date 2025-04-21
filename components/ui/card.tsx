// components/ui/card.tsx
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-md">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-sm text-gray-700">{children}</div>;
}
