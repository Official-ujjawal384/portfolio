import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-[#915EFF] uppercase tracking-widest">
          Introduction
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          About Me
        </h2>

        {/* Description */}
        <p className="mt-8 text-gray-400 leading-8 max-w-3xl">
          I'm a Full Stack Developer passionate about building
          responsive, modern and scalable web applications.
          I enjoy creating beautiful user interfaces with React
          and powerful backend systems using Node.js, Express
          and MongoDB.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-[#151030] p-6 rounded-2xl border border-gray-800 hover:border-[#915EFF] transition">
            <FaCode className="text-4xl text-[#915EFF]" />
            <h3 className="text-xl font-semibold mt-4">
              Frontend
            </h3>
            <p className="text-gray-400 mt-2">
              React.js, Tailwind CSS, JavaScript, HTML, Bootstrap, Material UI
            </p>
          </div>

          <div className="bg-[#151030] p-6 rounded-2xl border border-gray-800 hover:border-[#915EFF] transition">
            <FaLaptopCode className="text-4xl text-[#915EFF]" />
            <h3 className="text-xl font-semibold mt-4">
              Backend
            </h3>
            <p className="text-gray-400 mt-2">
              Node.js, Express.js, MongoDB
            </p>
          </div>

          <div className="bg-[#151030] p-6 rounded-2xl border border-gray-800 hover:border-[#915EFF] transition">
            <FaGraduationCap className="text-4xl text-[#915EFF]" />
            <h3 className="text-xl font-semibold mt-4">
              Education
            </h3>
            <p className="text-gray-400 mt-2">
             BCA / Engineering Student
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;