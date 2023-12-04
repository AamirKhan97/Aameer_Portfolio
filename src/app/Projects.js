import React, { useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import Edsys from "../assets/images/edsysEducation.svg";
import Animal from "../assets/images/AnimalApp.svg";
import Vehicle from "../assets/images/VehiclTrackingLogo.svg";
import Cloud from "../assets/images/cloudXperte.svg";
import Fleet from "../assets/images/FleetManaLogo.svg";
import Cost from "../assets/images/AppCost.png";
import { ThemeContext } from "@/context/ThemeContext";

const Projects = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div id="Projects" data-aos="fade-up">
        <div className="contentBox">
          <div className="row">
            <div className="col-md-12">
              <h1>Projects</h1>
              <div
                className={theme === "light" ? "belowLine" : "belowLineDark"}
              ></div>
              <div className="belowLine2"></div>
            </div>
          </div>
        </div>
        <div className="contentSlider">
          <Splide
            options={{
              type: "loop",
              gap: "50px",
              drag: "free",
              arrows: false,
              pagination: false,
              perPage: 6,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: 1.5,
              },
            }}
            extensions={{ AutoScroll }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <Link
                href="https://edsys-parent.ui.redbytes.in/Dashboard"
                target="_blank"
              >
                <div className="htmlBox">
                  <Image
                    alt=""
                    className="technoImg"
                    src={Edsys}
                    height="100%"
                    width="100%"
                  />
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="http://animal-admin.ui.redbytes.in/Dashboard"
                target="_blank"
              >
                <div className="EdsysBox">
                  <Image
                    alt=""
                    className="technoImg"
                    src={Animal}
                    height="100%"
                    width="100%"
                  />
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="http://vehicletrackingsystem.ui.redbytes.in/CustomerProfile"
                target="_blank"
              >
                <div className="vehicleBox">
                  <Image
                    alt=""
                    className="technoImgV"
                    src={Vehicle}
                    height="100%"
                    width="100%"
                  />
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link href="https://cloudxperte.com/" target="_blank">
                <div className="CloudBox">
                  <Image
                    alt=""
                    className="technoImg"
                    src={Cloud}
                    height="100%"
                    width="100%"
                  />
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link href="https://www.fleetmanagement.ae/" target="_blank">
                <div className="fleetBox">
                  <Image
                    alt=""
                    className="technoImg"
                    src={Fleet}
                    height="100%"
                    width="100%"
                  />
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="https://mobileappdevelopmentcost.com/"
                target="_blank"
              >
                <div className="CostBox">
                  <Image
                    alt=""
                    className="technoImgC"
                    src={Cost}
                    height="100%"
                    width="100%"
                  />
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link
                href="https://animal-customer.ui.redbytes.in/Home"
                target="_blank"
              >
                <div className="customerBox">
                  <Image
                    alt=""
                    className="technoImgC"
                    src={Animal}
                    height="100%"
                    width="100%"
                  />
                </div>
              </Link>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Projects;
