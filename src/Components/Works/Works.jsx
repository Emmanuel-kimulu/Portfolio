import React from 'react'
import './Works.css'
import Oracom from '../../img/oracom.png'
import Bvat from '../../img/Bvat.png'
import Steelaxis from '../../img/steelaxis.png'
import Smartbibles from '../../img/smartbibles.jpg'
import Storihut from '../../img/storihut.png'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'






function Works() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }} >Works with all these</span>
                <span>Brands and clients</span>
                <span style={{ color: darkMode ? 'white' : '' }}>Are you looking for someone to deliver some work for you? I am available.
                    <br />

                    <br />
                </span>
                <Link spy={true} to='contact' smooth={true}>
                    <button className="button s-button">Hire Me</button>
                </Link>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* Right side */}

            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Oracom} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Bvat} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Steelaxis} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Smartbibles} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Storihut} alt="" />
                    </div>

                </motion.div>

                {/* background circles */}

                <div className="w-backCircle blueCircle" ></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
}

export default Works