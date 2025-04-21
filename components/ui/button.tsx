// components/ui/button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ children, onClick, className = "", type = "button" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-2xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
