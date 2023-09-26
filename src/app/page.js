"use client";
import About from "./About";
import Landing from "./Landing";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      throttleDelay: 200,
      debounceDelay: 200,
      // delay: 600,
      easing: "ease",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="mainRoot">
        <Landing />
      </div>
      <div className="marginSideWays">
        <About />
      </div>
    </>
  );
}