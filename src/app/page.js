"use client";
import About from "./About";
import Landing from "./Landing";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "@splidejs/react-splide/css";
import { useContext, useEffect } from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      offset: 250,
      throttleDelay: 200,
      debounceDelay: 200,
      // delay: 600,
      easing: "ease",
    });
  }, []);
  return (
    <>
      <div className={theme === "light" ? "light" : "dark"}>
        <Navbar />
        <div className="mainRoot">
          <Landing />
        </div>
        <div className="marginSideWays">
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
}
