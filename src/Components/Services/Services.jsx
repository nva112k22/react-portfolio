import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Nguyen-Viet-An.pdf'
import { ThemeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Services = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* lefft side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : " " }}>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque aspernatur iste impedit dolorem perspiciatis!
          <br />
          fugit doloremque quis recusandae excepturi alias exercitationem omnis
          beatae similique?
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Dowload CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd, react, node"}
          />
        </motion.div>
        <motion.div
          whileInView={{ top: "12rem", left: "-4rem" }}
          initial={{ left: "-15rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, React, Sketch, Photoshop, Adobe"}
          />
        </motion.div>
        <motion.div
          whileInView={{ top: "19rem", left: "12rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus neque aspernatur iste impedit dolorem perspiciatis!"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
