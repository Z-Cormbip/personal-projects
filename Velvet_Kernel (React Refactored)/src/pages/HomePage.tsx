import { ChevronDownIcon } from "@heroicons/react/24/outline";
import BrandBars from "../components/BrandBars";
import AsideDesign1 from "../components/AsideDesign1";
import AsideDesign2 from "../components/AsideDesign2";
import { renderStars } from "../utils/renderStars";

const Home = () => {
  return (
    <>
      <header>
        <h1 className="flex-center mb-4 mt-6">
          <img
            src="/src/assets/Compressed/SVG/Logo-shadow.svg"
            alt="Velvet Kernel logo"
          />
        </h1>
        <div className="flex-end gap-2.5 mb-4">
          <div className="w-full bg-primary flex-end">
            <img
              src="/src/assets/Compressed/header-hero.png"
              alt="Person snacking on velvet kernel popcorn"
            />
          </div>
          <BrandBars />
        </div>
        <div className="relative flex-center">
          <p className="flex-col-center text-txt-md">
            <span className="font-medium tracking-[22%]">Indulgence</span>
            <span>in every crunch.</span>
          </p>
          <ChevronDownIcon className="absolute text-dark size-10 nudge-anime hover:translate-y-0.5 drop-shadow-md drop-shadow-dark/50 right-4 top-auto" />
        </div>
      </header>
      <section>
        <div className="flex justify-between mt-4 mb-6">
          <aside className="relative flex">
            <BrandBars />
            <AsideDesign1 />
          </aside>
          <div className="ml-2.5 border-l border-b-2">
            <figure className="flex flex-col flex-end pl-4 gap-6">
              <img
                src="/src/assets/Compressed/section-1/hero.png"
                alt="A bowl of popcorns"
              />
              <figcaption>
                <p className="flex flex-col pr-4">
                  <span>
                    Velvet Kernel blends <strong>classic comfort</strong> with
                    <strong> gourmet flair</strong>.
                  </span>
                  <span>Crafted for those who snack with style.</span>
                </p>
              </figcaption>
            </figure>
            <button className="cta-btn flex-center mx-auto my-4">
              Explore Flavors
            </button>
          </div>
        </div>
        <article className="relative bg-secondary text-light pt-6 pb-4 px-8 accent-line-top flex flex-col gap-2">
          <h2 className="text-light font-serif text-txt-lg leading-6 tracking-wider">
            “Crafted to Crave.”
          </h2>
          <p className="text-light-subtxt">
            A <i>symphony of flavors</i>, thoughtfully curated for the{" "}
            <i>modern snacker</i>.
          </p>
        </article>
      </section>
      <section>
        <article className="relative bg-secondary pb-6 pt-4 px-8 accent-line-bot">
          <ul className="flex gap-2 mb-4">{renderStars(5, "size-5")}</ul>
          <p className="text-light mb-2">
            “The best butter crunch I've ever had. I hide the bag from my kids!”
          </p>
          <h2 className="text-light-subtxt">
            <i>— Alyssa R.</i>
          </h2>
        </article>
        <div className="flex justify-between my-6">
          <div className="border-r border-b-2 mr-2.5">
            <figure className="flex flex-col pr-4 gap-6">
              <img
                src="src/assets/Compressed/section-2/hero.png"
                alt="An employee mixing popcorns"
              />
              <figcaption className="pl-4">
                <p className="flex flex-col">
                  <span>
                    We pop our <strong>delicious, handcrafted</strong> recipes
                    in
                  </span>
                  <span>
                    <strong>small batches</strong> every single morning.
                  </span>
                </p>
              </figcaption>
            </figure>
            <button className="cta-btn flex-center mx-auto my-4">
              Shop Now
            </button>
          </div>
          <aside className="relative flex">
            <BrandBars />
            <AsideDesign2 />
          </aside>
        </div>
      </section>
      <section>
        <div className="mb-6">
          <p className="flex-col-center">
            <span className="font-medium">Thanks for snacking with us.</span>
            <span>Every handful, a little luxury.</span>
          </p>
        </div>
        <div className="flex just gap-2.5 mb-8">
          <BrandBars />
          <div className="bg-primary flex w-full">
            <img
              src="src/assets/Compressed/article/hero.png"
              alt="Person offering a handful of popcorns"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
