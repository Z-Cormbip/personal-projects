import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <ul className="place-self-end **:text-txt-xsm relative pl-2 before:absolute before:bg-light before:w-px before:h-full before:top-0 before:left-0">
      <li>
        <Link to="#" className="flex items-center gap-2">
          <FaInstagram />
          <p>Instagram</p>
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center gap-2">
          <FaXTwitter />
          <p>Twitter</p>
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center gap-2">
          <FaTiktok />
          <p>Tiktok</p>
        </Link>
      </li>
      <li>
        <Link to="#" className="flex items-center gap-2">
          <FaFacebook />
          <p>Facebook</p>
        </Link>
      </li>
    </ul>
  );
};
export default SocialLinks;
