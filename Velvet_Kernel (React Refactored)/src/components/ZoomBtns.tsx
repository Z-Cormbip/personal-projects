import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const ZoomBtns = () => {
  return (
    <div className="absolute flex-col-center right-2.5 top-2.5 rounded-md shadow-md shadow-dark/25 gap-px bg-[#B2B2B2]">
      <button className="zoom-btns rounded-t-md">
        <PlusIcon />
      </button>
      <button className="zoom-btns rounded-b-md">
        <MinusIcon />
      </button>
    </div>
  );
};
export default ZoomBtns;
