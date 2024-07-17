import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TECH_TITLE } from "../constants";
import { SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants =(durationTemp) => ({
  initial:{y:-10},
  animate:{
    y:[10, -10],
    transition:{
      duration: durationTemp,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },

});

const Tecnologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <motion.h2 
    
    whileInView={{opacity: 1 ,y:0}}
    initial={{opacity:0, y: -100}}
    transition={{duration:1.5}}
    
    className="my-20 text-center font-medium text-4xl ">{TECH_TITLE}</motion.h2>
    <motion.div 
    
    whileInView={{opacity:1 , x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration: 1.5}}
    className=" flex flex-wrap items-center justify-center gap-4">
      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </motion.div>
      <motion.div  
       variants={iconVariants(3)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
        <TbBrandNextjs className="text-7xl text-neutral-100" />
      </motion.div >
      <motion.div 
      variants={iconVariants(5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <BiLogoTypescript className="text-7xl text-blue-500" />
      </motion.div>
      <motion.div 
      
      variants={iconVariants(2)}
       initial="initial"
       animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiJavascriptFill className="text-7xl text-yellow-400" />
      </motion.div>
      <motion.div 
      variants={iconVariants(6)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiCsharp className="text-7xl text-purple-400" />
      </motion.div>
      <motion.div 
      variants={iconVariants(4)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiPython className="text-7xl text-blue-400" />
      </motion.div>
      
     
    </motion.div>
  </div>
}

export default Tecnologies