import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full py-20 px-6 bg-[#0b0f1a] text-white" id="contact">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Info */}
          <div className="space-y-6">
            <p className="text-gray-400">
              Have a project idea or want to work together? Feel free to contact me.
              I’m always open to discussing new opportunities.
            </p>

            <div className="space-y-4 text-gray-300">
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500" />
                <span>gmail@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-purple-500" />
                <span>+91 90********</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <form className="space-y-4">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#0b0f1a] border border-gray-700 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#0b0f1a] border border-gray-700 outline-none focus:border-purple-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[#0b0f1a] border border-gray-700 outline-none focus:border-purple-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}