import { WELCOME_CONTENT } from "../constants";
import profilePic from "../assets/welcome.png";
import { motion } from "framer-motion";

const Welcome = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../assets/SimaoCuradoSV.png';
    link.download = 'SimaoCurado.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    const animateContainerLeft =(tempodelay) =>({
  hidden: {x:-100,opacity:0},
  visible:{
  x:0,
  opacity:1,
  transition:{duration:0.5,delay: tempodelay}
}
    });

 
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-8">
            <motion.h1 
            variants={animateContainerLeft(0)}
            initial="hidden"
            animate="visible"
            
            className="pb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight lg:mt-16 text-center lg:text-left">
              HI, I'M SIMÃO
            </motion.h1>
            <motion.span 
             variants={animateContainerLeft(0.5)}
             initial="hidden"
             animate="visible"
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center lg:text-left">
              I'M A WEB
              <br />
              DEVELOPER
            </motion.span>

            <motion.p 
             variants={animateContainerLeft(1)}
             initial="hidden"
             animate="visible"
            className="my-2 max-w-xl py-6 text-center lg:text-left">
              {WELCOME_CONTENT}
            </motion.p>
            <motion.button
              onClick={handleDownload}
              variants={animateContainerLeft(1)}
             initial="hidden"
             animate="visible"
              className="mt-4 px-6 py-3 border border-neutral-100 bg-transparent text-lg font-semibold rounded-md text-neutral-100 hover:border-teal-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-600 hover:via-teal-700 hover:to-blue-800 hover:ring-2 hover:ring-teal-500 hover:ring-opacity-50 focus:outline-none"
            >
              Download CV
            </motion.button>
          </div>
        </div>
        <div className="w-full py-8 flex lg:w-1/2 lg:p-8 justify-center lg:justify-end lg:inline">
          <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}


            className="rounded-full  h-auto lg:w-full"
            src={profilePic}
            width={600}
            height={600}
            alt="Simao Curado"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

