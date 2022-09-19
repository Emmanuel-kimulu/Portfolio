import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";





function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 5, type: 'spring' }

    return (
        <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: "100%" }}
            transition={transition}

            className="portfolio" id="Portifolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slide */}


            <Swiper


                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide> */}
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>

            </Swiper>


        </motion.div>
    )
}

export default Portfolio