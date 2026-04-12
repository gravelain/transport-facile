"use client";

import { useState } from "react";

type Props = {
  q: string;
  a: string;
};

export default function FAQItem({ q, a }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${
        isOpen
          ? "border-blue-200 bg-blue-50/60 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      <button
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-sm sm:text-base leading-snug ${
            isOpen ? "text-blue-700" : "text-gray-900"
          }`}
        >
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            isOpen
              ? "bg-blue-700 text-white rotate-180"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}
