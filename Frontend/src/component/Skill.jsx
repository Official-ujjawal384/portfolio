import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaPython,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "React JS",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
  },
  {
    name: "Express JS",
    icon: <SiExpress className="text-gray-300 text-5xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-5xl" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-500 text-5xl" />,
  },
  {
    name: "C",
    icon: <FaCode className="text-blue-400 text-5xl" />,
  },
  {
    name: "C++",
    icon: <FaCode className="text-indigo-400 text-5xl" />,
  },
  {
    name: "Java",
    icon: <FaJava className="text-orange-500 text-5xl" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400 text-5xl" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400 text-5xl" />,
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs className="text-white text-5xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-[#915EFF] uppercase tracking-widest text-center">
          My Skills
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-center mt-2">
          Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-[#151030]
                p-6
                rounded-2xl
                border border-gray-800
                flex flex-col
                items-center
                justify-center
                gap-4
                hover:border-[#915EFF]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {skill.icon}

              <h3 className="font-semibold text-center text-sm md:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;