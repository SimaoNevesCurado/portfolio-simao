
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { NAVBAR_TXT } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8">
      <div className="flex flex-shrink-0 items-center mb-4 md:mb-0">
        <h2 className="text-3xl font-bold">{NAVBAR_TXT}</h2>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/simaonevescurado/" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SimaoNevesCurado" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="" aria-label="Twitter">
          <FaSquareXTwitter />
        </a>
        <a href="" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
