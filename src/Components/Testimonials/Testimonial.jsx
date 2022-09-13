import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Testimonial.css'
import 'swiper/css/pagination'
import 'swiper/css'
import { Pagination } from "swiper"

import Profile1 from "../../img/Mannu.png"
import Profile2 from "../../img/Mannu.png"
import Profile3 from "../../img/Mannu.png"
import Profile4 from "../../img/Mannu.png"
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
            review: "Azimio Tv or Citizen TV whatever they cal themselves will now hav to focus on their fake lotteries za shinda 200k kila saa blablabla as they fleece illiterate villagers mashinani off their money"
        },
        {
            img: Profile2,
            review: "Azimio Tv or Citizen TV whatever they cal themselves will now hav to focus on their fake lotteries za shinda 200k kila saa blablabla as they fleece illiterate villagers mashinani off their money"
        },
        {
            img: Profile3,
            review: "Azimio Tv or Citizen TV whatever they cal themselves will now hav to focus on their fake lotteries za shinda 200k kila saa blablabla as they fleece illiterate villagers mashinani off their money"
        },
        {
            img: Profile4,
            review: "Azimio Tv or Citizen TV whatever they cal themselves will now hav to focus on their fake lotteries za shinda 200k kila saa blablabla as they fleece illiterate villagers mashinani off their money"
        },
    ]
    return (

        <motion.div
            initial={{ left: "6rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}

            className="t-wrapper">
            <div className="t-heading" id="Testimonials" >
                <span>Clients always get </span>
                <span>Exceptional work</span>
                <span> from me</span>
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