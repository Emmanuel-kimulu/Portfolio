import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Testimonial.css'
import 'swiper/css/pagination'
import 'swiper/css'
import { Pagination } from "swiper"

import Profile1 from "../../img/leblanc.jpg"
import Profile2 from "../../img/Robbins.jpg"
import Profile3 from "../../img/vince.jpg"
import Profile4 from "../../img/Glaser.jpg"
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";




function Testimonial() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' }




    const clients = [
        {
            img: Profile1,
            name: "Martin LeBlanc",
            review: "User interface is like a joke, if you have to explain it, it's not that good "
        },
        {
            img: Profile2,
            name: "Anthony Robbins",
            review: "It's not what we do once in a while that shapes our lives. It's what we do consistently."

        },
        {
            img: Profile3,
            name: "Vince Lombardi",
            review: "It takes months to find a customer... seconds to loose one."
        },
        {
            img: Profile4,
            name: "Milton Glaser",
            review: "There are three responses to a piece of design  yes, no, and WOW! Wow is the one to aim for."
        },
    ]
    return (

        <motion.div
            initial={{ left: "6rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}

            className="t-wrapper">
            <div className="t-heading" id="Quotes" >
                <span>Some exceptional quotes that </span>
                <span>keeps me </span>
                <span>going. </span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>

            {/* slider */}
            <Swiper

                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >

                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.name}</span>
                                <span style={{ color: darkMode ? 'white' : '' }}>{client.review}</span>
                            </div>

                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </motion.div>
    )
}

export default Testimonial