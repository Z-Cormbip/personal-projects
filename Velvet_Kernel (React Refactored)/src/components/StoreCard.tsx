import { ArrowTurnUpRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface StoreCardProps {
  name: string[];
  location: string;
  distance: number;
  imageUrl: string;
  top: number;
  left: number;
  onClose: () => void;
}

export const StoreCard = ({
  name,
  location,
  distance,
  imageUrl,
  top,
  left,
  onClose,
}: StoreCardProps) => {
  return (
    <div className="absolute" style={{ top: `${top}%`, left: `${left}%` }}>
      <div
        className="relative grid grid-cols-[1.5fr_1fr] grid-rows-2 bg-light drop-shadow-md drop-shadow-dark/50 w-48 h-38 rounded-[10px] pl-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-1 mt-4">
          <h3 className="text-[12px] flex-col-gap font-normal">
            {name.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h3>
          <p className="text-[10px] text-subtxt">{location}</p>
        </div>
        <button className="group card-xbtn" onClick={onClose}>
          <XMarkIcon className="size-6 stroke-2 stroke-subtxt/50 group-hover:stroke-subtxt/75" />
        </button>
        <div className="absolute text-subtxt flex flex-col items-center bottom-4 left-4 gap-1">
          <svg
            className="w-8 h-2"
            aria-label={`Distance from location to ${name.join(" ")}}`}
          >
            <use href="/src/assets/svg-icons/icons.svg#distance-marker" />
          </svg>
          <p className="text-[10px]">{distance} mi</p>
        </div>
        <div className="relative text-light place-self-end col-[1/3]">
          <img src={imageUrl} alt={name.join(" ")} />
          <Link to="#" className="glass-btn">
            <ArrowTurnUpRightIcon className="size-6 stroke-2" />
            <p className="text-[10px] text-light">Directions</p>
          </Link>
        </div>
        <img
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
          src="src/assets/Compressed/store-locator/store-pin-clicked.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export const SnackShopCard = ({ onClose }: { onClose: () => void }) => (
  <StoreCard
    name={["Jackson &", "Dearborn's", "Snack Shop"]}
    location="Authorized Retailer"
    distance={1.1}
    imageUrl="src/assets/Compressed/store-locator/snackshop-cropped.png"
    top={8}
    left={14}
    onClose={onClose}
  />
);

export const MallStoreCard = ({ onClose }: { onClose: () => void }) => (
  <StoreCard
    name={["Velvet Kernel -", "Water Tower Place"]}
    location="Mall Location"
    distance={1.4}
    imageUrl="src/assets/Compressed/store-locator/mallstore-cropped.png"
    top={30}
    left={0}
    onClose={onClose}
  />
);

export const NavyPierCard = ({ onClose }: { onClose: () => void }) => (
  <StoreCard
    name={["O'Hare Store -", "Navy Pier & Dock"]}
    location="Authorized Retailer"
    distance={1.9}
    imageUrl="src/assets/Compressed/store-locator/navypier-cropped.png"
    top={0}
    left={0}
    onClose={onClose}
  />
);
