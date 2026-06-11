const experiences = [
  {
    role: "Full Stack Developer",
    company: "DevCompany",
    duration: "2023 - Present",
    description:
      "Working on scalable web applications using MERN stack. Built responsive UI and optimized backend APIs for performance.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions",
    duration: "2022 - 2023",
    description:
      "Worked on React-based UI components, improved responsiveness and collaborated with design team to build user-friendly interfaces.",
  },
  {
    role: "Full Stack Developer",
    company: "DevCompany",
    duration: "2023 - Present",
    description:
      "Working on scalable web applications using MERN stack. Built responsive UI and optimized backend APIs for performance.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions",
    duration: "2022 - 2023",
    description:
      "Worked on React-based UI components, improved responsiveness and collaborated with design team to build user-friendly interfaces.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#050816] text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <p className="text-[#915EFF] uppercase tracking-widest text-center">
          Experience
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-center mt-2">
          My Experience
        </h2>

        {/* Timeline */}
        <div className="mt-12 space-y-10 relative border-l border-[#915EFF] pl-6">
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              
              {/* Dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 bg-[#915EFF] rounded-full"></span>

              {/* Card */}
              <div className="bg-[#151030] p-6 rounded-2xl border border-gray-800 hover:border-[#915EFF] transition-all duration-300">
                
                <h3 className="text-xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-[#915EFF] mt-1">
                  {exp.company}
                </p>

                <span className="text-gray-400 text-sm">
                  {exp.duration}
                </span>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {exp.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;