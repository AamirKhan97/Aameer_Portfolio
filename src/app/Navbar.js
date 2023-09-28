import Image from "next/image";
import Link from "next/link";
import React from "react";
import Brand from "../assets/images/brandLogo.svg";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import javascript from "../assets/images/javascript.svg";
import uiux from "../assets/images/uiux.svg";
import react from "../assets/images/react.svg";
import next from "../assets/images/next.svg";
import rBoot from "../assets/images/rBoot.svg";
import primeReact from "../assets/images/primeReact.svg";
import antDesi from "../assets/images/antDesi.svg";
import materialui from "../assets/images/material-ui.svg";
import Node from "../assets/images/Node.svg";
import express from "../assets/images/express.svg";
import mongoDb from "../assets/images/mongoDb.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top" id="navbar">
        <div className="mainNav">
          <Link href="#navbar" className="navbar-brand brandTxt">
            <Image src={Brand} width="100%" height="100%" />
          </Link>
          <div className="scrollAnimation">
            <h5>
              Technologies I <span>Know</span>
            </h5>
            <div className="belowAnimate">
              <Image src={html} height="100%" width="100%" />
              <Image src={css} height="100%" width="100%" />
              <Image src={bootstrap} height="100%" width="100%" />
              <Image src={javascript} height="100%" width="100%" />
              <Image src={uiux} height="100%" width="100%" />
              <Image src={react} height="100%" width="100%" />
              <Image src={next} height="100%" width="100%" />
              <Image src={rBoot} height="100%" width="100%" />
              <Image src={primeReact} height="100%" width="100%" />
              <Image src={antDesi} height="100%" width="100%" />
              <Image src={materialui} height="100%" width="100%" />
              <Image src={Node} height="100%" width="100%" />
              <Image src={express} height="100%" width="100%" />
              <Image src={mongoDb} height="100%" width="100%" />
            </div>
          </div>
          <div className="navLinks">
            <Link href="#AboutMain">About</Link>
            <Link href="#">Skills</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Education</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
