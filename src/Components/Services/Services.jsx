import React from 'react'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Crown from '../../img/crown.png';
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";




function Services() {

    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services' >

            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Skills</span>
                <span style={{ color: darkMode ? 'white' : '' }}>These are the skills I have been learning and practising.  <br />currently I am on proficiency level and <br /> I am hoping to learn and  gain more experience.</span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>



            {/* right side */}
            <div className="cards">
                <motion.div
                    transition={transition}
                    whileHover={{ y: -10 }}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={'UI/UX'}
                        detail={"Figma, Adobe Xd, illustrator, Video Editing(novice)"}
                    />
                </motion.div>

                <motion.div
                    transition={transition}
                    whileHover={{ y: -10 }}
                >
                    <Card
                        emoji={Crown}
                        heading={'Graphic Design'}
                        detail={"Adobe Illustrator, Photoshop, InDesign, After Effects, Lightroom"}
                    />
                </motion.div>

                <motion.div
                    transition={transition}
                    whileHover={{ y: -10 }}
                >
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css,Javascript,Wordpress, Reactjs, Android"}
                    />
                </motion.div>

                <motion.div
                    transition={transition}
                    whileHover={{ y: -10 }}
                >
                    <Card
                        emoji={Humble}
                        heading={'General'}
                        detail={"Computer Repair, system mangement,,Data entry, Design "}
                    />
                </motion.div>

                <div className="blur s-blur2" stye={{ background: "var(--purple)" }}></div>



            </div>
        </div>
    )
}

export default Services