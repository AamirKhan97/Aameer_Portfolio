import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Brand from "../assets/images/brandLogo.svg";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Orbit from "../assets/images/orbit.svg";
import Sun from "../assets/images/sun.svg";
import Moon from "../assets/images/sun-moon.svg";

const Navbar = () => {
  const { switchDark, switchLight, theme } = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav
        className="navbar sticky-top"
        id={theme === "light" ? "navbar" : "navbardarkT"}
      >
        <div className="mainNav">
          <Link href="/" className="navbar-brand brandTxt">
            <Image alt="" src={Brand} width="auto" height="45" />
          </Link>
          {/* <div className="scrollAnimation">
            <h5>
              Technologies I <span>Know</span>
            </h5>
            <div className="belowAnimate">
              <Image src={html} height="100%" width="100%" />
              <Image src={css} height="100%" width="100%" />
              <Image src={bootstrap} height="100%" width="100%" />
              <Image src={javascript} height="100%" width="100%" />
              <Image src={uiux} height="100%" width="100%" />
              <Image src={react} height="100%" width="100%" />
              <Image src={next} height="100%" width="100%" />
              <Image src={rBoot} height="100%" width="100%" />
              <Image src={primeReact} height="100%" width="100%" />
              <Image src={antDesi} height="100%" width="100%" />
              <Image src={materialui} height="100%" width="100%" />
              <Image src={Node} height="100%" width="100%" />
              <Image src={express} height="100%" width="100%" />
              <Image src={mongoDb} height="100%" width="100%" />
            </div>
          </div> */}
          {/* <div className="themeMode"></div> */}
          <div className="navLinks">
            {clicked ? (
              <button
                onClick={theme === "light" ? switchDark : switchLight}
                className={theme === "light" ? "themeLight" : "themeDark"}
              >
                <Image alt="" src={theme === "light" ? Moon : Sun} />
              </button>
            ) : (
              <>
                <Link href="#AboutMain">About</Link>
                <Link href="#skillsMain">Skills</Link>
                <Link href="#Projects">Projects</Link>
              </>
            )}
            <Image
              alt=""
              src={Orbit}
              height="25"
              width="25"
              style={{ cursor: "pointer" }}
              onClick={() => setClicked(!clicked)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
