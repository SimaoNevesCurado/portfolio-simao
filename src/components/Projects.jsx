import { PROJECT_TITLE, PROJECTS } from "../constants"
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
          
    whileInView={{opacity: 1 ,y:0}}
    initial={{opacity:0, y: -100}}
    transition={{duration:0.5}}
      
      className="my-20 text-center font-medium text-4xl">{PROJECT_TITLE}</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
                whileInView={{opacity: 1 ,x:0}}
                initial={{opacity:0, x: -100}}
                transition={{duration:0.5}}
            className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
             whileInView={{opacity: 1 ,x:0}}
             initial={{opacity:0, x: 100}}
             transition={{duration:1}}

            className="w-full lg:w-3/4 max-w-xl">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
