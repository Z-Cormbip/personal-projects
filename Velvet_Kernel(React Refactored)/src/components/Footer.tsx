import {
  ChevronDoubleUpIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-secondary **:text-light px-8 py-6 relative accent-line-top grid grid-cols-2 grid-row-2 gap-y-4">
      <section className="flex flex-col gap-2 flex-wrap">
        <h2 className="font-serif text-txt-lg leading-6 tracking-wider">
          Contact us
        </h2>
        <address className="**:text-light-subtxt">
          <div className="flex items-center gap-2">
            <PhoneIcon className="size-4" />
            <p className="text-txt-xsm">123-456-7890</p>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="size-4" />
            <p className="text-txt-xsm">support@velvetkernel.com</p>
          </div>
        </address>
      </section>
      <ChevronDoubleUpIcon className="size-10 nudge-anime hover:-translate-y-0.5 drop-shadow-md drop-shadow-dark/50 justify-self-end cols-[2/3]" />
      <img
        src="src/assets/Compressed/SVG/lightLogo.svg"
        className="self-center"
        aria-hidden="true"
        alt=""
      />
      <SocialLinks />
    </footer>
  );
};
export default Footer;
