
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { NAVBAR_TXT } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8">
      <div className="flex flex-shrink-0 items-center mb-4 md:mb-0">
        <h2 className="text-3xl font-bold">{NAVBAR_TXT}</h2>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <motion.a 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 1.1 }}
         drag="x"
         dragConstraints={{ left: -100, right: 100 }}

        href="https://www.linkedin.com/in/simaonevescurado/" aria-label="LinkedIn">
          <FaLinkedin />
        </motion.a>
        <motion.a 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 1.1 }}
         drag="x"
         dragConstraints={{ left: -100, right: 100 }} href="https://github.com/SimaoNevesCurado" aria-label="GitHub">
          <FaGithub />
        </motion.a>
        <motion.a 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 1.1 }}
         drag="x"
         dragConstraints={{ left: -100, right: 100 }} href="" aria-label="Twitter">
          <FaSquareXTwitter />
        </motion.a>
        <motion.a 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 1.1 }}
         drag="x"
         dragConstraints={{ left: -100, right: 100 }} href="" aria-label="Instagram">
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
