import {
  aboutImg,
  heroImg,
  kitImg,
  reviewImg,
  satchelImg,
  toteImg,
} from "@/public/images/home";
import Image from "next/image";
import {
  BreadDimensions,
  HoboDimensions,
  SlingDimensions,
} from "./components/collection/BagDimensions";
import {
  BreadHighlight,
  HoboHighlight,
  SlingHighlight,
} from "./components/collection/BagHighlight";
import {
  BreadAltColors,
  HoboAltColors,
  SlingAltColors,
} from "./components/collection/BagAltColors";
import {
  BreadClips,
  HoboClips,
  SlingClips,
} from "./components/collection/BagClips";
import ReviewCarousel from "./components/reviews/ReviewCarousel";
import LinkBtn from "./components/LinkBtn";

const HomePage = () => {
  return (
    <>
      <header className="relative w-full aspect-square mb-22">
        <Image
          src={heroImg}
          alt="Hero Image"
          className="object-cover mask-b-from-95%"
          priority
          fill
        />
        <div className="absolute left-38.5 -bottom-16 transform -translate-x-1/2">
          <h1 className="text-5xl text-shadow-lg text-shadow-inherit">
            Ironleaf
          </h1>
          <h2 className="text-3xl">Atelier</h2>
        </div>
      </header>
      <main>
        <div>
          <div className="italic mb-8 ml-14 flex flex-col *:last:pl-12">
            <h3>Crafted with patience.</h3>
            <h3>Built to last.</h3>
          </div>
          <div className="flex justify-end">
            <button className="btn btn-primary rounded-full btn-lg mr-10 mb-10 shadow-md shadow-slate-900/25">
              SHOP NOW
            </button>
          </div>
        </div>
        <section className="relative stitched before:rotate-2 pt-2">
          <Image
            src={satchelImg}
            alt="Satchel Image"
            width={175}
            className="object-contain absolute -top-1/16 -left-18"
          />
          <h1 className="headline top-54 left-3">About us</h1>
          <div className="flex flex-col ml-14 pr-10 pl-8 py-12 bg-foreground gap-6 odd:text-sm odd:leading-6 *:last:pr-2">
            <p>
              <strong>Ironleaf Atelier</strong> creates timeless leather goods
              that honor tradition and wear beautifully with age.
            </p>
            <h3 className="text-center">From workshop to your hands.</h3>
            <p>
              Every piece begins at the workbench - cut, stitched, and finished
              by hand
            </p>
          </div>
          <div className="relative aspect-6/5 w-full">
            <Image
              src={aboutImg}
              alt="About Image"
              className="object-cover mask-b-from-95%"
              fill
            />
          </div>
          <div className="mb-6">
            <div className="relative ml-14 pr-10 pl-4 pb-12 pt-10">
              <p className="text-sm leading-6 mb-5">
                We honor time-tested techniques of{" "}
                <strong>traditional leathercraft</strong>, ensuring each product
                carries the character of the artisan who made it.
              </p>
              <LinkBtn href="aboutus" text="Learn more about our craft" />
              <Image
                src={toteImg}
                alt="Tote Image"
                width={166}
                className="object-contain absolute -bottom-22 -left-34"
              />
            </div>
          </div>
        </section>
        <section className="relative stitched before:-rotate-2">
          <h1 className="headline top-54 left-3">Collection</h1>
          <div className="ml-14  bg-foreground rounded-l-box">
            <div className="flex flex-col gap-6 relative pt-18 pl-8 pb-6">
              <SlingDimensions />
              <SlingHighlight />
              <SlingClips />
              <SlingAltColors />
            </div>
          </div>
          <div className="relative stitched before:rotate-2">
            <div className="grid grid-cols-4 row-auto gap-y-4 py-16 pl-8 mr-10">
              <BreadDimensions />
              <BreadHighlight />
              <BreadClips />
              <BreadAltColors />
            </div>
          </div>
          <div className="stitched relative before:-rotate-2">
            <div className="ml-14 flex flex-col gap-6 relative pt-5 pl-8 pr-10 pb-10 bg-foreground mask-b-from-95% rounded-l-box">
              <HoboDimensions />
              <HoboHighlight />
              <HoboClips />
              <HoboAltColors />
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 mb-12">
            <button className="btn btn-md btn-outline btn-primary rounded-full">
              SEE MORE CRAFTS
            </button>
          </div>
        </section>
        <section className="relative rounded-t-full border-t-4 border-dashed border-border">
          <div className="relative rounded-full aspect-square w-68 mx-auto overflow-hidden my-6">
            <Image
              src={reviewImg}
              alt="Review image"
              className="object-cover object-[0%_85%]"
              fill
            />
          </div>
          <div className="ml-14">
            <div className="bg-foreground  rounded-l-box text-sm leading-6 relative mb-8 py-8 pl-8 pr-10">
              <h1 className="headline -left-11 top-40">Reviews</h1>
              <ReviewCarousel />
            </div>
            <div className="flex flex-col items-end gap-6 mr-10 relative mb-16">
              <Image
                src={kitImg}
                alt="Kit Image"
                width={170}
                className="object-contain absolute -left-27 -bottom-15"
              />
              <h2 className="font-semibold">Carry a piece of craft.</h2>
              <LinkBtn
                href="collection"
                text={
                  <>
                    Shop the <br /> collection
                  </>
                }
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default HomePage;
