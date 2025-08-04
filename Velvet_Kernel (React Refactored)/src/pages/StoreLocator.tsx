import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationSearchInput from "../components/LocationSearchInput";
import {
  SnackShopCard,
  MallStoreCard,
  NavyPierCard,
} from "../components/StoreCard";
import { useState } from "react";
import {
  MallStorePin,
  NavyPierPin,
  SnackShopPin,
} from "../components/StorePin";
import {
  MallStoreDetails,
  NavyPierDetails,
  SnackShopDetails,
} from "../components/StoreDetails";
import ZoomBtns from "../components/ZoomBtns";

const StoreLocator = () => {
  const [activeStore, setActiveStore] = useState<
    null | "snack" | "mall" | "navy"
  >(null);

  const [lastViewedStore, setLastViewedStore] = useState<
    "snack" | "mall" | "navy"
  >("snack");

  return (
    <header>
      <div className="flex-center gap-2 mt-8">
        <MapPinIcon className="size-10 text-red-400" />
        <div className="">
          <p className="text-subtxt text-txt-xsm">Your current location</p>
          <h1 className="font-sans font-medium text-txt-lg">Chicago, IL US</h1>
        </div>
      </div>
      <LocationSearchInput />
      <div
        className="relative w-full m-auto max-w-80"
        onClick={() => setActiveStore(null)}
      >
        <img
          src="src/assets/Compressed/store-locator/cropped-map.jpg"
          alt="Map of Velvet Kernel store locations"
        />
        <SnackShopPin
          onClick={() => {
            setActiveStore("snack");
            setLastViewedStore("snack");
          }}
        />
        <MallStorePin
          onClick={() => {
            setActiveStore("mall");
            setLastViewedStore("mall");
          }}
        />
        <NavyPierPin
          onClick={() => {
            setActiveStore("navy");
            setLastViewedStore("navy");
          }}
        />
        {activeStore === "snack" && (
          <SnackShopCard onClose={() => setActiveStore(null)} />
        )}
        {activeStore === "mall" && (
          <MallStoreCard onClose={() => setActiveStore(null)} />
        )}
        {activeStore === "navy" && (
          <NavyPierCard onClose={() => setActiveStore(null)} />
        )}
        <ZoomBtns />
      </div>
      <section className="flow-root border-l border-b-2 ml-6 mb-10 pt-8 pb-6">
        {lastViewedStore === "snack" && <SnackShopDetails />}
        {lastViewedStore === "mall" && <MallStoreDetails />}
        {lastViewedStore === "navy" && <NavyPierDetails />}
        <button className="cta-btn flex-center mx-auto mt-8">
          Shop Details
        </button>
      </section>
    </header>
  );
};

export default StoreLocator;
