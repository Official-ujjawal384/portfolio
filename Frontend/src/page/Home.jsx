import { useEffect } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Skill from "../component/Skill";
import Project from "../component/Project";
import Experience from "../component/Exprience";
import Contact from "../component/Contect";
import Footer from "../component/Footer";



function Home() {

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Experience />
        <Contact />
        <Footer />
    </div>
  );
}

export default Home;