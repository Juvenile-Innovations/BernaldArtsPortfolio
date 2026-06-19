import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`${alignClass[align]} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
