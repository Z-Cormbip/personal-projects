import { useLocation, useNavigate } from "react-router-dom";
import OverlayMenu from "./OverlayMenu";
import {
  Bars3Icon,
  MapPinIcon as MapPinOutline,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon as MapPinSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isStoreLocator = location.pathname === "/store-locator";

  const handleMapPinClick = () => {
    if (isStoreLocator) {
      navigate("/");
    } else {
      navigate("/store-locator");
    }
  };

  return (
    <>
      <nav className="relative bg-secondary px-8 py-4 flex-center-gap accent-line-bot">
        <button
          className="nav-btn"
          aria-label="Open menu overlay"
          onClick={() => setMenuOpen(true)}
        >
          <Bars3Icon />
        </button>
        <button
          className="nav-btn"
          aria-label="Toggle store locator"
          onClick={handleMapPinClick}
        >
          {isStoreLocator ? <MapPinSolid /> : <MapPinOutline />}
        </button>
        <button className="nav-btn" aria-label="Open shopping window overlay">
          <ShoppingBagIcon />
        </button>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default NavBar;
