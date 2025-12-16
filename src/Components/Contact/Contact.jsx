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
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (sending) return;
        setSending(true);
        setDone(false);
        setErrorMessage('');

        emailjs.sendForm('service_mnhugxf', 'template_ew7ynqm', form.current, 'jLDizy4N9E0-kuBnc')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
                setErrorMessage('Message failed to send. Please try again.');
            })
            .finally(() => setSending(false));
    };

    return (
        <motion.div
            initial={{ marginTop: "8rem" }}
            whileInView={{ marginTop: "4rem" }}
            transition={transition}
            className="contact-form"
            id="contact">
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
                    <input type="text" name="user_name" className="user" placeholder="Name" required />
                    <input type="email" name="user_email" className="user" placeholder="Email" required />
                    <textarea name="message" className="user" placeholder="Message" required rows={4} />
                    <input type="submit" value={sending ? "Sending..." : "Send"} className="button" disabled={sending} />
                    <span className="contact-status success"> {done && "Thanks for contacting me!"} </span>
                    <span className="contact-status error"> {errorMessage} </span>

                    <div className="blur c-blur1"
                        style={{ background: "var(--purple)" }}>

                    </div>

                </form>
            </div>

        </motion.div>

    )
}

export default Contact