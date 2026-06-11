import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AirBnb Website",
    description:
      "Full Stack AirBnb Website built with React, Node.js, Express and MongoDB.",
    image: "/projects/ecommerce.png",
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full Stack E-Commerce Website built with React, Node.js, Express and MongoDB.",
    image: "/projects/ecommerce.png",
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full Stack E-Commerce Website built with React, Node.js, Express and MongoDB.",
    image: "/projects/ecommerce.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built using React and Tailwind CSS.",
    image: "/projects/portfolio.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application using Socket.io and Node.js.",
    image: "/projects/chatapp.png",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-[#915EFF] uppercase tracking-widest text-center">
          My Work
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-center mt-2">
          Projects
        </h2>

        <div
          className="
            mt-12
            flex flex-col
            md:flex-row
            gap-8
            md:overflow-x-auto
            overflow-y-hidden
            pb-4
            scrollbar-hide
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-[#151030]
                rounded-2xl
                overflow-hidden
                border
                border-gray-800
                hover:border-[#915EFF]
                hover:-translate-y-2
                transition-all
                duration-300

                w-[325px]
                md:min-w-[380px]
                lg:min-w-[420px]
                flex-shrink-0
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#915EFF] px-4 py-2 rounded-lg"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-[#915EFF] px-4 py-2 rounded-lg"
                  >
                    <FiExternalLink />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;