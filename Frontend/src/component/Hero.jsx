import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import ujjawal from "../assets/img/ujjawal.png";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#915EFF] text-lg mb-3">👋 Hello, I'm</p>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ujjawal Barman
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 mt-6 max-w-xl leading-8">
              I build modern, responsive and scalable web applications using
              React.js, Node.js, Express.js and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact">
                <button className="bg-[#915EFF] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                  Hire Me
                </button>
              </a>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Ujjawal-Barman_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border border-[#915EFF] px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#915EFF] transition"
              >
                <FaDownload />
                Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8 text-2xl">
              <a href="https://github.com/Official-ujjawal384">
                <FaGithub className="hover:text-[#915EFF]" />
              </a>

              <a href="https://www.linkedin.com/in/ujjawal-barman">
                <FaLinkedin className="hover:text-[#915EFF]" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#915EFF] blur-3xl opacity-30 rounded-full"></div>

              {/* React */}
              <div className="hidden md:block absolute top-8 left-0 lg:top-10 lg:left-0 bg-[#151030] p-2 lg:p-3 rounded-xl border border-[#915EFF] z-20">
                <FaReact className="text-cyan-400 text-xl lg:text-3xl" />
              </div>

              {/* JavaScript */}
              <div className="hidden md:block absolute top-28 -left-4 lg:top-40 lg:-left-10 bg-[#151030] p-2 lg:p-3 rounded-xl border border-[#915EFF] z-20">
                <SiJavascript className="text-yellow-400 text-xl lg:text-3xl" />
              </div>

              {/* Node */}
              <div className="hidden md:block absolute top-16 right-0 lg:top-20 lg:right-0 bg-[#151030] p-2 lg:p-3 rounded-xl border border-[#915EFF] z-20">
                <FaNodeJs className="text-green-500 text-xl lg:text-3xl" />
              </div>

              {/* Tailwind */}
              <div className="hidden md:block absolute bottom-20 left-0 bg-[#151030] p-2 lg:p-3 rounded-xl border border-[#915EFF] z-20">
                <SiTailwindcss className="text-sky-400 text-xl lg:text-3xl" />
              </div>

              {/* HTML */}
              <div className="hidden md:block absolute bottom-10 right-0 bg-[#151030] p-2 lg:p-3 rounded-xl border border-[#915EFF] z-20">
                <FaHtml5 className="text-orange-500 text-xl lg:text-3xl" />
              </div>

              {/* CSS */}
              <div className="hidden md:block absolute bottom-40 right-10 bg-[#151030] p-2 lg:p-3 rounded-xl border border-[#915EFF] z-20">
                <FaCss3Alt className="text-blue-500 text-xl lg:text-3xl" />
              </div>

              {/* Image */}
              <img
                src={ujjawal}
                alt="profile"
                className="
        w-[250px] h-[250px]
        md:w-[320px] md:h-[320px]
        lg:w-[420px] lg:h-[420px]
        object-cover rounded-full
        border-4 border-[#915EFF]
        relative z-10
      "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
