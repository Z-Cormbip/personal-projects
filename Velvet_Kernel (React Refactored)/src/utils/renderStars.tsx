import { StarIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export function renderStars(rating: number, classStyle = "") {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      stars.push(
        <li key={i}>
          <StarIcon className={clsx("fill-accent", classStyle)} />
        </li>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <li key={i} className={clsx("relative inline-block", classStyle)}>
          <StarIcon className="fill-subtxt/20 absolute inset-0 w-full h-full" />
          <StarIcon
            className="fill-accent absolute inset-0 w-full h-full"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </li>
      );
    } else {
      stars.push(
        <li key={i}>
          <StarIcon className={clsx("fill-subtxt/20", classStyle)} />
        </li>
      );
    }
  }

  return stars;
}
