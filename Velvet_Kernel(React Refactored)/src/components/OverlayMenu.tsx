import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const OverlayMenu = ({ isOpen, onClose }: Props) => {
  return (
    <aside
      className={clsx(
        "bg-light/50 backdrop-blur-[1px] fixed inset-0 z-3 transition-opacity duration-300 ease-out",
        { "is-closed": !isOpen }
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          "bg-light max-w-4/5 h-screen w-full flex-col-gap transition-transform duration-300 ease-out",
          { "-translate-x-full": !isOpen, "translate-x-0": isOpen }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-secondary px-8 py-4 flex justify-between accent-line-bot">
          <button
            className="nav-btn"
            aria-label="Close menu overlay"
            onClick={onClose}
          >
            <XMarkIcon />
          </button>
        </div>
        <ul className="flex-col-gap gap-3 my-6">
          {[
            ["Why Velvet Kernel?", "b1"],
            ["The Pop Process", "b2"],
            ["Store Locator", "b3"],
          ].map(([text, group], i) => (
            <li key={i}>
              <Link to="#" className={`aside-block group/${group}`}>
                <p className="font-normal">{text}</p>
                <ChevronRightIcon
                  className={`nudge-anime group-hover/${group}:translate-x-0.5`}
                />
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="cta-btn flex-center mx-auto "
          aria-label="Go to shopping page"
        >
          Shop Now
        </button>
        <div className="relative">
          <address className="absolute text-subtxt left-7 top-3">
            <div className="flex items-center gap-2">
              <PhoneIcon className="size-4" />
              <p className="text-txt-xsm">123-456-7890</p>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="size-4" />
              <p className="text-txt-xsm">support@velvetkernel.com</p>
            </div>
          </address>
          <img
            className="w-full object-cover"
            src="/src/assets/Compressed/left-overlay/bowl-footer.png"
            aria-hidden="true"
            alt=""
          />
        </div>
      </div>
    </aside>
  );
};

export default OverlayMenu;
