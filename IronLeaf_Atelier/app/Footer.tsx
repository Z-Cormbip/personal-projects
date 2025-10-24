import Link from "next/link";
import { slugify } from "./utils/slugify";
import { Facebook } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import { footerImg } from "@/public/images/home";

const links = [
  "FAQs",
  "Store Policies",
  "Privacy Policy",
  "Shipping Policy",
  "Refund Policy",
  "Terms of Use",
];
const Footer = () => {
  return (
    <footer>
      <ul className="grid grid-cols-2 row-auto *:odd:border-r-2">
        {links.map((link, idx) => {
          return (
            <li key={idx} className="border-t-2 border-dashed border-border">
              <Link
                href={`/${slugify(link)}`}
                className="block py-4 px-6 text-sm link link-hover"
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <section className="relative bg-foreground py-8 mask-t-from-95%">
        <Image
          src={footerImg}
          alt="Footer Image"
          width={320}
          className="object-contain absolute top-1 -left-23 aspect-square"
        />
        <div className="flex flex-col items-end gap-5 mr-10">
          <div className="flex flex-col gap-4 items-end bg-foreground/25 relative py-2 pl-4 rounded-l-lg backdrop-blur-sm">
            <h1 className="text-2xl text-shadow-sm text-shadow-slate-900/25">
              Contact us
            </h1>
            <address className="text-sm not-italic flex flex-col gap-2 items-end mb-2">
              <p>
                <strong>Email</strong>: craft@ironleafatelier.co
              </p>
              <p>
                <strong>Mobile</strong>: +63 012 345 6789
              </p>
            </address>
          </div>
          <Link
            href="/ironleafatelier"
            className="bg-foreground/25 backdrop-blur-sm pr-8 pl-6 py-3 rounded-lg border border-dashed border-slate-800/50 relative"
          >
            <p>/IronleafAtelier</p>
            <SiFacebook
              className="fill-primary absolute top-2 right-2"
              size={16}
            />
          </Link>
          <Link
            href="/ironleafatelier"
            className="bg-foreground/25 backdrop-blur-sm pr-8 pl-4 py-3 rounded-lg border border-dashed border-slate-800/50 relative"
          >
            <p>@IronleafAtelier</p>
            <SiInstagram
              className="fill-primary absolute top-2 right-2"
              size={16}
            />
          </Link>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
