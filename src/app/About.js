import React from "react";
import cardImg from "../assets/images/AameerSnap.jpg";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div id="AboutMain" data-aos="fade-up">
        <div className="headingTxt">
          <h1>About Me</h1>
          <div className="belowLine"></div>
          <div className="belowLine2"></div>
        </div>
        <div className="aboutContent">
          <div className="row">
            <div className="col-md-4">
              <div className="profileCard">
                <div className="borderCard"></div>
                <div className="imageHolder">
                  <Image
                    src={cardImg}
                    height="100%"
                    width="100%"
                    className="aboutImg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="headingDetails">
                <h1>
                  I am a Software Engineer with over two years of
                  hands-on experience specializing in crafting exceptional user
                  interfaces and experiences. My passion lies in front-end
                  development, where I excel in creating intuitive and visually
                  appealing web applications. My expertise primarily revolves
                  around React.js and Next.js, Ui / Ux allowing me to deliver
                  high-performance and responsive solutions.
                </h1>
                <div className="row">
                  <div className="col-md-6">
                    <div className="flexBox">
                      <label className="key">
                        Name <span>:</span>
                      </label>
                      <label className="value">Aameer Khan</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flexBox">
                      <label className="key">
                        Email <span>:</span>
                      </label>
                      <label className="value">aameerkhan7835@gmail.com</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flexBox">
                      <label className="key">
                        Phone <span>:</span>
                      </label>
                      <label className="value">+919623907835</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flexBox">
                      <label className="key">
                        Age <span>:</span>
                      </label>
                      <label className="value">26</label>
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
export default About;
