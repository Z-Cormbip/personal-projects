import { bread } from "@/public/images/home/collection/bread";
import { hobo } from "@/public/images/home/collection/hobo";
import { sling } from "@/public/images/home/collection/sling";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type BagHighlightProps = {
  image: {
    src: string | StaticImageData;
    alt: string;
    className: string;
    width: number;
  };
  bagName: string;
  caption: React.ReactNode;
};

const BagHighlight = ({ image, bagName, caption }: BagHighlightProps) => {
  return (
    <figure className="flex flex-col relative col-span-3">
      <Image
        src={image.src}
        alt={image.alt}
        className={image.className}
        width={image.width}
      />
      <h2 className="font-bold text-xl mb-4 w-full tracking-[.020em]">
        {bagName}
      </h2>
      <figcaption className="text-sm leading-6">{caption}</figcaption>
    </figure>
  );
};

export const SlingHighlight = () => (
  <BagHighlight
    image={{
      src: sling,
      alt: "Sling Image",
      className: "object-contain self-end relative",
      width: 192,
    }}
    bagName="The Marlowe String"
    caption={
      <>
        A <strong>handcrafted leather</strong> sling <br /> with a modern
        silhouette <br /> and vintage brass accents.
      </>
    }
  />
);

export const BreadHighlight = () => (
  <BagHighlight
    image={{
      src: bread,
      alt: "Bread Image",
      className: "object-contain relative right-7 mb-2",
      width: 174,
    }}
    bagName="The Briar Bread"
    caption={
      <>
        A <strong>handcrafted leather</strong> bag <br /> with a domed
        silhouette <br /> and dual brass zippers.
      </>
    }
  />
);

export const HoboHighlight = () => (
  <BagHighlight
    image={{
      src: hobo,
      alt: "Sling Image",
      className: "object-contain self-end relative -right-4",
      width: 168,
    }}
    bagName="The Alder Hobo"
    caption={
      <>
        A <strong>soft-structured leather</strong> <br />
        bag with a single shoulder <br /> strap and open interior.
      </>
    }
  />
);
