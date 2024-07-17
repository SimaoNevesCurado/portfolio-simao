import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const WELCOME_CONTENT = `Hello! Im Simão Curado, a 19-year-old computer engineering student aspiring to become a full-stack web developer.
I am passionate about technology and have developed skills in both front-end and back-end technologies like React and Next.js and Node.js.
Im looking leverage my experience and to create innovative solutions that drive business growth.`;

// custom messages
 export const NAVBAR_TXT = '{ / } Simão.dev';
 export const ABOUT_T1 = '<About Me/>';
 export const TECH_TITLE = '<Technologies/>';
 export const EXPERIENCE_TITLE = '<Experience & Education/>';
 export const CONTACT_TITLE = '<Lets get in touch!/>';
 export const PROJECT_TITLE='<Projects/>';


export const ABOUT_TEXTO = `I am a dedicated and versatile full stack developer with a passion for creating 
efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety
 of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began
  with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt 
  to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
  Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "College Student",
    company: "Freelancer",
    description: `During my studies i have been doing some freelance jobs. I've been involved with lots of projects using different technologies. `,
    technologies: ["Javascript", "React.js", "Next.js", "Node.js","Web3.js","TypeScript"],
  },
  
  {
    year: "2022 - 2023",
    role: " Intern Web Developer",
    company: "SEE Informática",
    description: `Responsible for the development of client websites from start to finish. 
     Built an infrastructure that handles an online store. WordPress, HTML, CSS, JavaScript..`,
    technologies: ["JavaScript", "HTML", "CSS", "PHP"],
  },
];

export const PROJECTS = [
  {
    title: "Mobile Fitness App",
    image: project2,
    description:
      "An application for logging custom workouts, with features such as program creation, workout creation with the ability to track the progress.",
    technologies: ["React Native", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind CSS","Next.js","Framer Motion"],
  },
];

export const CONTACT = {
  address: "Leiria, Portugal ",
  phoneNo: "+351 910 262 881",
  email: "simao_neves_curado@hotmail.com",
};
