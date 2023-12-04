import Image from "next/image";
import React, { useContext } from "react";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import sass from "../assets/images/sass.svg";
import javascript from "../assets/images/javascript.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import rBoot from "../assets/images/rBoot.svg";
import primeReact from "../assets/images/primeReact.svg";
import materialUi from "../assets/images/materialUi.svg";
import reactJs from "../assets/images/reactJs.svg";
import nextJs from "../assets/images/nextJs.svg";
import redux from "../assets/images/redux.svg";
import antDesign from "../assets/images/antDesign.svg";
import Node from "../assets/images/nodeJs.svg";
import Tailwind from "../assets/images/Tailwind.svg";
import { ThemeContext } from "@/context/ThemeContext";

const Skills = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div id="skillsMain">
        <div className="contentBox">
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <h1>Skills</h1>
              <div
                className={theme === "light" ? "belowLine" : "belowLineDark"}
              ></div>
              <div className="belowLine2"></div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-up">
              <div className={theme === "light" ? "flexBox" : "flexBoxDark"}>
                <div className="imgHolder">
                  <Image src={html} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-1" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">90%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-right">
              <div
                className={theme === "light" ? "flexBox85" : "flexBoxDark85"}
              >
                <div className="imgHolder">
                  <Image src={css} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-2" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">85%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-left">
              <div className={theme === "light" ? "flexBox" : "flexBoxDark"}>
                <div className="imgHolder">
                  <Image src={sass} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-2" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">85%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-up-left">
              <div
                className={theme === "light" ? "flexBox85" : "flexBoxDark85"}
              >
                <div className="imgHolder">
                  <Image src={javascript} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-3" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">70%</span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-2" data-aos="fade-up">
              <div className={theme === "light" ? "flexBox" : "flexBoxDark"}>
                <div className="imgHolder">
                  <Image src={bootstrap} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-4" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">100%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-right">
              <div
                className={theme === "light" ? "flexBox85" : "flexBoxDark85"}
              >
                <div className="imgHolder">
                  <Image src={Tailwind} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-4" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">100%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-left">
              <div className={theme === "light" ? "flexBox" : "flexBoxDark"}>
                <div className="imgHolder">
                  <Image src={primeReact} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-4" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">100%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-up-left">
              <div
                className={theme === "light" ? "flexBox85" : "flexBoxDark85"}
              >
                <div className="imgHolder">
                  <Image src={materialUi} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-4" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">100%</span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-2" data-aos="fade-up">
              <div className={theme === "light" ? "flexBox" : "flexBoxDark"}>
                <div className="imgHolder">
                  <Image src={reactJs} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-1" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">90%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-right">
              <div
                className={theme === "light" ? "flexBox85" : "flexBoxDark85"}
              >
                <div className="imgHolder">
                  <Image src={nextJs} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-2" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">85%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-left">
              <div className={theme === "light" ? "flexBox" : "flexBoxDark"}>
                <div className="imgHolder">
                  <Image src={redux} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-2" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">85%</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2" data-aos="fade-up-left">
              <div
                className={theme === "light" ? "flexBox85" : "flexBoxDark85"}
              >
                <div className="imgHolder">
                  <Image src={Node} height="100%" width="100%" alt="" />
                </div>

                <div className="dashboard">
                  <svg>
                    <circle className="bg" cx="57" cy="57" r="52" />
                    <circle className="meter-4" cx="57" cy="57" r="52" />
                  </svg>
                  <span className="innerDigit">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
