import StarRating from "./StarRating";

type ReviewCardProps = {
  id: number;
  review: {
    rating: number;
    quote: string;
    author: string;
  };
};

export default function ReviewCard({ id, review }: ReviewCardProps) {
  return (
    <div
      id={`review${id}`}
      className="carousel-item flex flex-col gap-3 w-full"
    >
      <StarRating rating={review.rating} />
      <blockquote className="italic max-w-md">
        <p>&quot;{review.quote}&quot;</p>
      </blockquote>
      <h2 className="font-semibold">{review.author}</h2>
    </div>
  );
}

export const Review1 = () => (
  <ReviewCard
    id={1}
    review={{
      rating: 4,
      quote:
        "The craftsmanship is outstanding. My Alder Hobo has softened beautifully with use, and I get compliments everywhere I go.",
      author: "-Elena P.",
    }}
  />
);

export const Review2 = () => (
  <ReviewCard
    id={2}
    review={{
      rating: 5,
      quote:
        "I can fit everything I need without it ever feeling bulky. It's the only bag I reach for now..",
      author: "-Sarah L.",
    }}
  />
);

export const Review3 = () => (
  <ReviewCard
    id={3}
    review={{
      rating: 4.5,
      quote:
        "Sturdy and timeless. Took a couple weeks to break in, but now it feels like an old friend.",
      author: "-Julia M.",
    }}
  />
);
