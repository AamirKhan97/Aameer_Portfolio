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
                {/* <div className="totalProfCircle">
                  <div className="innerColorBlack">
                    <div className="insiderWhite">100%</div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
