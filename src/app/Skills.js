import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
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
                    gap: "10px",
                    drag: "free",
                    arrows: false,
                    pagination: false,
                    perPage: 4,
                    autoScroll: {
                      pauseOnHover: true,
                      pauseOnFocus: false,
                      rewind: false,
                      speed: 2,
                    },
                  }}
                  extensions={{AutoScroll}}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>HTML</h1>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>CSS</h1>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>HTML</h1>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>CSS</h1>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>HTML</h1>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>CSS</h1>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>HTML</h1>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="skills1Box">
                      <h1>CSS</h1>
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
