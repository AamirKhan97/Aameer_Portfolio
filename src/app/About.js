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
                  I am a Front-end developer with over two years of hands-on
                  experience specializing in crafting exceptional user
                  interfaces and experiences. My passion lies in front-end
                  development, where I excel in creating intuitive and visually
                  appealing web applications. My expertise primarily revolves
                  around React.js and Next.js, Ui / Ux allowing me to deliver
                  high-performance and responsive solutions.
                </h1>
                <div className="row">
                  <div className="col-md-6">
                    <div className="rightBox">
                      <p>Personal Info</p>
                      <div className="flexBox">
                        <label className="key">
                          Name <span>:</span>
                        </label>
                        <label className="value">Aameer Ayub Khan</label>
                      </div>
                      <div className="flexBox">
                        <label className="key">
                          Email <span>:</span>
                        </label>
                        <a
                          href="mailto:aameerkhan7835@gmail.com"
                          target="_blank"
                          className="value"
                        >
                          aameerkhan7835@gmail.com
                        </a>
                      </div>
                      <div className="flexBox">
                        <label className="key">
                          Phone <span>:</span>
                        </label>
                        <a
                          href="tel:919623907835"
                          target="_blank"
                          className="value"
                        >
                          +91 9623907835
                        </a>
                      </div>
                      <div className="flexBox">
                        <label className="key">
                          Address <span>:</span>
                        </label>
                        <label className="value">
                          Aurangabad, Maharashtra
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="leftBox">
                      <div className="servicesBox">
                        <p>Education</p>
                        <div className="flexBox">
                          <label className="key">
                            SSC <span>:</span>
                          </label>
                          <label className="value">
                            St.Francis High School / 2013
                          </label>
                        </div>
                        <div className="flexBox">
                          <label className="key">
                            HSC <span>:</span>
                          </label>
                          <label className="value">
                            Dr. Rafiq Zakaria Campus / 2015
                          </label>
                        </div>
                        <div className="flexBox">
                          <label className="key">
                            Bachelor's <span>:</span>
                          </label>
                          <label className="value">
                            Sir Sayed Collage / 2020
                          </label>
                        </div>
                        <div className="flexBox">
                          <label className="key">
                            Web Development <span>:</span>
                          </label>
                          <label className="value">Youtube (Ui Brains)</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="downloadBox">
                      <a download href="/Aameer_cv.pdf">
                        <button className="downloadBtn">
                          Download Cv
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-cloud-arrow-down-fill"
                            viewBox="0 0 16 16"
                            className="downloadIcon"
                          >
                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                          </svg>{" "}
                        </button>
                      </a>
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
