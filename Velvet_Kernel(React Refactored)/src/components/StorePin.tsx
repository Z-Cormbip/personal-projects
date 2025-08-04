interface StorePinProps {
  storeName: string;
  top: number;
  left: number;
  onClick: () => void;
}

export const StorePin = ({ storeName, top, left, onClick }: StorePinProps) => {
  return (
    <button
      className="absolute"
      style={{ top: `${top}%`, left: `${left}%` }}
      aria-label={`Open ${storeName} details card`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <img
        className="store-pin"
        src="src/assets/Compressed/store-locator/store-pin.png"
        alt=""
      />
    </button>
  );
};

export const SnackShopPin = ({ onClick }: { onClick: () => void }) => (
  <StorePin
    storeName="Jackson Dearborn's Snack Shop"
    top={57}
    left={37}
    onClick={onClick}
  />
);

export const MallStorePin = ({ onClick }: { onClick: () => void }) => (
  <StorePin
    storeName="Velvet Kernel - Water Tower Place"
    top={79}
    left={23}
    onClick={onClick}
  />
);

export const NavyPierPin = ({ onClick }: { onClick: () => void }) => (
  <StorePin
    storeName="O'Hare Store - Navy Pier & Dock"
    top={49}
    left={23}
    onClick={onClick}
  />
);
