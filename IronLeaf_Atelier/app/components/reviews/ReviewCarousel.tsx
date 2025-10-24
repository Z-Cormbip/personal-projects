"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    rating: 4,
    quote:
      "The craftsmanship is outstanding. My Alder Hobo has softened beautifully with use, and I get compliments everywhere I go.",
    author: "- Elena P.",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "I can fit everything I need without it ever feeling bulky. It's the only bag I reach for now..",
    author: "- Sarah L.",
  },
  {
    id: 3,
    rating: 4.5,
    quote:
      "Sturdy and timeless. Took a couple weeks to break in, but now it feels like an old friend.",
    author: "- Julia M.",
  },
];

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);

  const gapPercent = 8;

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(reviews.length - 1, i + 1));

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${active * (100 + gapPercent)}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-full flex-shrink-0">
              <ReviewCard id={review.id} review={review} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 -bottom-6 flex gap-2">
        <button
          onClick={prev}
          disabled={active === 0}
          className="size-12 flex items-center justify-center 
               cursor-pointer disabled:opacity-30 disabled:cursor-default"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          disabled={active === reviews.length - 1}
          className="size-12 flex items-center justify-center 
               cursor-pointer disabled:opacity-30 disabled:cursor-default"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
