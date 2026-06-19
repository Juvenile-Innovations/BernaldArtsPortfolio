import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:scale-95",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 active:scale-95",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
