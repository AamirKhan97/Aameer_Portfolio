import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import html from "../assets/images/html.svg";
const Skills = () => {
  return (
    <>
      <div id="skillsMain" data-aos="fade-up">
        <div className="contentBox">
          <div className="row">
            <div className="col-md-12">
              <h1>Skills</h1>
              <div className="belowLine"></div>
              <div className="belowLine2"></div>
              <div className="contentSlider">
                <Splide
                  options={{
                    type: "loop",
                    gap: "50px",
                    drag: "free",
                    arrows: false,
                    pagination: false,
                    perPage: 3,
                    // autoScroll: {
                    //   pauseOnHover: true,
                    //   pauseOnFocus: false,
                    //   rewind: false,
                    //   speed: 1.5,
                    // },
                  }}
                  // extensions={{ AutoScroll }}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide>
                    <div className="htmlBox">
                      <Image className="technoImg" src={html} height="100%" width="100%" />
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
