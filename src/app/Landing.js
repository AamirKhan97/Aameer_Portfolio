import React, { useContext } from "react";
import BlurImg from "../assets/images/BlurImg.png";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";

const Landing = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div></div>
      <div
        className={theme === "light" ? "landingDiv" : "landingDivDark"}
        id="IntroSpace"
      >
        <div className="row g-0">
          <div className="col-md-7">
            <div className="contentCard">
              <div className="txtContnt">
                <h1 className="animate__animated animate__zoomIn">
                  Aameer <span>Khan</span>
                </h1>
                <p className="animate__animated animate__slideInUp">
                  {" "}
                  <span> Front-end Developer </span>with a passion for creating
                  responsive and visually appealing web interfaces. Proficient
                  in HTML, CSS, and JavaScript, I specialize in crafting
                  engaging user experiences that drive user satisfaction and
                  business success.
                </p>
                <Link href="#AboutMain" className="ViewMoreLink">
                  <button>About Me</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12 ">
                <div className="topCard">
                  <div className="innerCont">
                    <div className="emptyBox1"></div>
                    <div className="emptyBox2"></div>
                    <div className="emptyBox3"></div>
                    <div className="contentBox">
                      <Image
                        alt=""
                        src={BlurImg}
                        height="100%"
                        width="100%"
                        className="innerBrandImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
