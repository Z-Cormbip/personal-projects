import { renderStars } from "../utils/renderStars";

interface StoreDetailsProps {
  left: {
    name: string[];
    starRating: number;
    totalReviews?: number;
    location: string[];
    contact: string;
    link: string;
  };
  right: {
    distance: number;
    storeStatus: string;
    storeHours: string;
    orderOptions: string[];
  };
}

export const StoreDetails = ({ left, right }: StoreDetailsProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex-col-gap gap-4">
        <div className="flex-col-gap gap-2 ml-4">
          <h2 className="flex-col-gap font-medium">
            {left.name.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h2>
          <div className="flex-center-y gap-1">
            <ul className="flex-center-y gap-1">
              {renderStars(left.starRating, "size-4")}
            </ul>
            <p className="text-[#A02D0D] text-txt-xsm">({left.totalReviews})</p>
          </div>
          <h3 className="flex-col-gap text-txt-xsm">
            {left.location.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h3>
        </div>
        <div className="*:text-txt-xxsm flex-col-gap gap-2">
          <p className="bg-subtxt/20 px-4 py-1 mr-auto rounded-r-md">
            {left.contact}
          </p>
          <p className="bg-subtxt/20 px-4 py-1 mr-auto rounded-r-md">
            {left.link}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center relative before:absolute before:w-px before:h-full before:top-0 before:left-0 before:bg-dark/30 pl-2">
        <div className="flex-col-gap gap-2 *:not-[h2]:mr-4">
          <h3 className="flex-center-y gap-2">
            <svg
              className="w-8 h-2 text-subtxt"
              aria-label={`Distance from location to ${left.name.join(" ")}`}
            >
              <use href="/src/assets/svg-icons/icons.svg#distance-marker" />
            </svg>
            <span className="text-txt-xsm">{right.distance} mi</span>
          </h3>
          <h2 className="bg-accent flex justify-end pr-8 rounded-l-md font-normal">
            {right.storeStatus}
          </h2>
          <h3 className="text-txt-xsm">{right.storeHours}</h3>
        </div>
        <ul className="*:text-txt-xxsm flex-col-gap gap-2 mr-4">
          {right.orderOptions.map((option, i) => (
            <li key={i} className="text-txt-xsm">
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SnackShopDetails = () => (
  <StoreDetails
    left={{
      name: ["Jackson & Dearborn's", "Snack Shop"],
      starRating: 4.5,
      totalReviews: 2,
      location: ["48 W Jackson Blvd", "Chicago, IL 012345"],
      contact: "(012) 345-6789",
      link: "www.snackshop.com",
    }}
    right={{
      distance: 1.1,
      storeStatus: "OPEN",
      storeHours: "10 am - 8 pm",
      orderOptions: [
        "Pickup Window",
        "UberEATS",
        "DoorDash",
        "Mobile Ordering",
      ],
    }}
  />
);

export const MallStoreDetails = () => (
  <StoreDetails
    left={{
      name: ["Velvet Kernel -", "Water Tower Place"],
      starRating: 4,
      totalReviews: 5,
      location: ["772 Michigan Ave", "Chicago, IL 01234"],
      contact: "(123) 456-7890",
      link: "www.mallstore.com",
    }}
    right={{
      distance: 1.4,
      storeStatus: "OPEN",
      storeHours: "10 am - 6 pm",
      orderOptions: [
        "Pickup Window",
        "Mall Location",
        "UberEATS",
        "Mobile Ordering",
      ],
    }}
  />
);

export const NavyPierDetails = () => (
  <StoreDetails
    left={{
      name: ["O'Hare Store -", "Navy Pier & Dock"],
      starRating: 5,
      totalReviews: 3,
      location: ["800 E Grand Ave", "Chicago, IL 12345"],
      contact: "(321) 654-0987",
      link: "www.pieranddock.com",
    }}
    right={{
      distance: 1.9,
      storeStatus: "OPEN",
      storeHours: "10 am - 8 pm",
      orderOptions: [
        "Pickup Window",
        "Drive-Thru",
        "Parking Lot",
        "Mobile Ordering",
      ],
    }}
  />
);
