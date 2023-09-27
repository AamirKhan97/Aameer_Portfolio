import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const Skills = () => {
  new Splide('.splide', {
    autoScroll: {
      speed: 2,
    },
  });
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
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    pagination: false,
                    gap: '2rem',
                    perPage: 3,
                    autoScroll: Splide,
                    speed : 2
                  }}
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
