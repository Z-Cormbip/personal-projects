import clsx from "clsx";
import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  className?: string;
};

export default function StarRating({ rating, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <ul className={clsx("flex gap-1", className)}>
      {Array.from({ length: totalStars }).map((_, i) => {
        if (i < fullStars) {
          return (
            <li key={i}>
              <Star className="fill-stars stroke-none size-4.5" />
            </li>
          );
        }

        if (i === fullStars && hasHalfStar) {
          return (
            <li key={i} className="relative inline-block size-4.5">
              <Star className="fill-border stroke-none size-4.5" />
              <Star
                className="fill-stars absolute inset-0 stroke-none size-4.5"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            </li>
          );
        }

        return (
          <li key={i}>
            <Star className="fill-border stroke-none size-4.5" />
          </li>
        );
      })}
    </ul>
  );
}
