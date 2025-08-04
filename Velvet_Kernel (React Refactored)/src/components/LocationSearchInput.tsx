import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TbCurrentLocation } from "react-icons/tb";
import { MapPinIcon } from "@heroicons/react/24/solid";

const schema = z.object({
  location: z.string().min(2, "Please type at least 2 characters."),
});

type FormData = z.infer<typeof schema>;

const MOCK_LOCATIONS = [
  "Grand Ave, Chicago, IL US",
  "Jackson Blvd, Chicago, IL US",
  "Michigan Ave, Chicago, IL US",
];

const LocationSearchInput = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { register, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const locationInput = watch("location");

  useEffect(() => {
    if (locationInput && locationInput.length >= 2) {
      const filtered = MOCK_LOCATIONS.filter((loc) =>
        loc.toLowerCase().includes(locationInput.toLowerCase())
      );
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setSuggestions([]);
    }
  }, [locationInput]);

  const handleSelect = (value: string) => {
    const input = document.querySelector<HTMLInputElement>("#inputLocation");
    if (input) input.value = value;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col bg-[#E8E9E1] border border-[#B2B2B2] rounded-lg mx-7 my-4">
      <div className="flex-center-y gap-2.5 h-10 py-2.5 px-3.5">
        <MagnifyingGlassIcon className="size-6 stroke-[#707070]" />
        <input
          id="inputLocation"
          type="text"
          placeholder=" Enter a location"
          aria-label="Enter a location"
          className="search-input"
          {...register("location")}
          autoComplete="off"
        />
      </div>

      <div
        className={`search-ext ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
      >
        <button
          className="locate-btn"
          aria-label="Use your current location"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log("Latitude:", position.coords.latitude);
                console.log("Longitude:", position.coords.longitude);
              },
              (error) => {
                console.error("Geolocation error:", error);
              }
            );
          }}
        >
          <TbCurrentLocation className="size-4 stroke-[#707070]" />
          Use my location
        </button>

        <ul
          className="suggested-locations"
          aria-label="List of suggested locations"
        >
          {suggestions.map((suggestion, i) => (
            <li
              key={i}
              className="suggested-loc"
              onClick={() => handleSelect(suggestion)}
            >
              <MapPinIcon className="size-4 fill-[#707070]" />
              <p className="text-txt-xsm font-normal">{suggestion}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationSearchInput;
