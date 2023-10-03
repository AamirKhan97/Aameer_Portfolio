import Image from "next/image";
import React from "react";
import html from "../assets/images/html.svg";
import SkillsBg from "../assets/images/skillsBg.svg";

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
            </div>
            <div className="col-md-5 mb-2">
              <div className="flexBox">
                <div className="imgHolder">
                  <Image src={html} height="100%" width="100%" />
                </div>
                <div className="totalProfCircle">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">100%</div>
                  </div>
                </div>
              </div>
              <div className="stepperBox">
                <div className="firstCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">0%</div>
                  </div>
                  <div className="line1">
                    <div className="innerLine"></div>
                  </div>
                </div>
                <div className="roundedRotate1"></div>
                <div className="secondCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">25%</div>
                  </div>
                  <div className="line2">
                    <div className="innerLine"></div>
                  </div>
                  <div className="roundedRotate2"></div>
                </div>
                <div className="thirdCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">75%</div>
                  </div>
                  <div className="line3">
                    <div className="innerLine"></div>
                  </div>
                </div>
                <div className="roundedRotate3"></div>
                <div className="fouthCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">100%</div>
                  </div>
                </div>
                <div className="roundedRotate4"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 mb-2">
              <div className="flexBox">
                <div className="imgHolder">
                  <Image src={html} height="100%" width="100%" />
                </div>
                <div className="totalProfCircle">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">100%</div>
                  </div>
                </div>
              </div>
              <div className="stepperBox">
                <div className="firstCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">0%</div>
                  </div>
                  <div className="line1">
                    <div className="innerLine"></div>
                  </div>
                </div>
                <div className="roundedRotate1"></div>
                <div className="secondCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">25%</div>
                  </div>
                  <div className="line2">
                    <div className="innerLine"></div>
                  </div>
                  <div className="roundedRotate2"></div>
                </div>
                <div className="thirdCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">75%</div>
                  </div>
                  <div className="line3">
                    <div className="innerLine"></div>
                  </div>
                </div>
                <div className="roundedRotate3"></div>
                <div className="fouthCircleBor">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">100%</div>
                  </div>
                </div>
                <div className="roundedRotate4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
