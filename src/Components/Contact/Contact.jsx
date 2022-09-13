import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";



function Contact() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' }

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mnhugxf', 'template_ew7ynqm', form.current, 'jLDizy4N9E0-kuBnc')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <motion.div
            initial={{ marginTop: "8rem" }}
            whileInView={{ marginTop: "4rem" }}
            transition={transition}
            className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>

                    </div>

                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <input name="message" className="user" placeholder="Message" />
                    <input type="submit" value="send" className="button" />
                    <span> {done && "Thanks for contacting me!"} </span>

                    <div className="blur c-blur1"
                        style={{ background: "var(--purple)" }}>

                    </div>

                </form>
            </div>

        </motion.div>

    )
}

export default Contact