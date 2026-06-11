import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-gray-300 border-t border-gray-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Dev<span className="text-purple-500">Portfolio</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              I am a Full Stack Developer building modern, responsive and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-purple-400">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm text-gray-400">Email: gmail@example.com</p>
            <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
            <p className="text-sm text-gray-400">Location: India</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-8 text-xl">
          <a href="https://github.com/Official-ujjawal384" className="hover:text-purple-500"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ujjawal-barman" className="hover:text-purple-500"><FaLinkedin /></a>
          <a href="https://x.com/ujjawal_384" className="hover:text-purple-500"><FaTwitter /></a>
          <a href="https://www.instagram.com/official_ujjal384" className="hover:text-purple-500"><FaInstagram /></a>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} Ujjawal Barman. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;