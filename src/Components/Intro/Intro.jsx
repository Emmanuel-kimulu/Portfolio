import React from 'react'
import './Intro.css'
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";
import Resume from './resume.pdf'
import { Link } from 'react-scroll'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'





function Intro() {

    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }} >Hi! I Am</span>
                    <span>Emmanuel Kimulu</span>
                    <span>Junior Frontend developer an UI/UX Designer looking to grow to a higher level </span>

                </div>
                <div className="btn-intro">
                    <Link spy={true} to='contact' smooth={true} >
                        <button className="button i-button">Hire me</button>
                    </Link>

                    <a href={Resume} download>
                        <button className="button i-button">Download Cv</button>
                    </a>
                </div>



                <motion.div
                    initial={{ marginTop: "6rem" }}
                    whileInView={{ marginTop: "3rem" }}
                    transition={transition}

                    className="i-icons">
                    <a href='https://github.com/Emmanuel-kimulu' target="blank" >
                        <Github color="#366BA1" size='5rem' />
                    </a>

                    <a href='https://twitter.com/EmmanuelKimulu' target="blank">
                        <Linkedin color="#366BA1" size='5rem' />
                    </a>
                    <a href='https://twitter.com/EmmanuelKimulu' target="blank">
                        <Twitter color="#366BA1" size='5rem' />
                    </a>

                </motion.div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt=""
                />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "63%" }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }} className="floating-div">

                    <FloatingDiv image={crown} txt1='web' txt2='Developer' />
                </motion.div>


                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}
                    className="floating-div">
                    <FloatingDiv image={thumbup} txt1=' UI/UX' txt2='Designer' />
                </motion.div>

                {/* blur div */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }} ></div>

                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>



            </div>
        </div >
    )
}

export default Intro