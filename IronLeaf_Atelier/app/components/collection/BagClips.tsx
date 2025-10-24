import {
  bread1,
  bread2,
  bread3,
} from "@/public/images/home/collection/bread/clips";
import {
  hobo1,
  hobo2,
  hobo3,
} from "@/public/images/home/collection/hobo/clips";
import {
  sling1,
  sling2,
  sling3,
} from "@/public/images/home/collection/sling/clips";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type BagClipsProps = {
  clips: { src: StaticImageData; alt: string }[];
  direction?: "row" | "col";
};

export default function BagClips({ clips, direction = "row" }: BagClipsProps) {
  return (
    <ul
      className={`flex gap-3 justify-self-end ${
        direction === "row" ? "flex-row" : "flex-col"
      }`}
    >
      {clips.map((clip, idx) => {
        const isLast = idx === clips.length - 1;

        return (
          <li key={idx} className="relative size-14 overflow-hidden rounded-lg">
            {isLast ? (
              <>
                <Image
                  src={clip.src}
                  alt={clip.alt}
                  sizes="56px"
                  fill
                  className="object-cover opacity-80 bg-foreground"
                />
                <Link href="/details" className="size-full">
                  <div className="relative size-full flex items-center pl-1 border-dashed rounded-lg border-1 bg-foreground/30 backdrop-blur-xs border-slate-800/50">
                    <p className="text-[10px] font-semibold leading-snug">
                      See
                      <br />
                      More
                      <br />
                      Details
                    </p>
                    <div className="absolute top-1 right-1 rounded-full bg-primary size-4 flex items-center justify-center">
                      <ArrowUpRight size={12} strokeWidth={2} color="#e9ebf8" />
                    </div>
                  </div>
                </Link>
              </>
            ) : (
              <Image
                src={clip.src}
                alt={clip.alt}
                sizes="56px"
                fill
                className="object-cover"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export const SlingClips = () => (
  <BagClips
    clips={[
      { src: sling1, alt: "Bag's handle detail" },
      { src: sling2, alt: "Bag's side detail" },
      { src: sling3, alt: "Bag's front detail" },
    ]}
    direction="row"
  />
);

export const BreadClips = () => (
  <BagClips
    clips={[
      { src: bread1, alt: "Bag's handle detail" },
      { src: bread2, alt: "Bag's side detail" },
      { src: bread3, alt: "Bag's front detail" },
    ]}
    direction="col"
  />
);

export const HoboClips = () => (
  <BagClips
    clips={[
      { src: hobo1, alt: "Bag's handle detail" },
      { src: hobo2, alt: "Bag's side detail" },
      { src: hobo3, alt: "Bag's front detail" },
    ]}
    direction="row"
  />
);
