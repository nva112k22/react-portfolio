import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';
const Works = () => {
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : " " }}>
          Works For All These
        </span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque aspernatur iste impedit dolorem perspiciatis!
          <br />
          fugit doloremque quis recusandae excepturi alias
          <br />
          fugit doloremque quis recusandae excepturi alias excepturi alias
          <br />
          fugit doloremque quis recusandae
        </spane>
        <button className="button s-button">Hire me</button>
        <div className="blur s-bulr1" style={{ background: "ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div 
        initial={{rotate: 45}}
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}}
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works