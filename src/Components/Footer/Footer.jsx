import React from 'react'
import "./Footer.css"
import Wave from '../../img/wave.png'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'




function Footer() {
    return (
        <div className="footer">
            <img src={Wave} alt="" className="footer-wave" />
            <div className="f-content">
                <div className="f-contact">
                    <span>kimuluemmanuel@gmail.com</span>
                    <span>mwendwakimulu@gmail.com</span>
                    <span>+254 798 576 316</span>
                </div>
                <div className="f-icons">
                    <a href='https://twitter.com/EmmanuelKimulu' target="blank"> <Twitter color="white" size='3rem' /></a>
                    <a href='https://www.facebook.com/emmanuel.kimulu'><Facebook color="white" size='3rem' /></a>
                    <a href='https://github.com/Emmanuel-kimulu' target="blank" > <Github color="white" size='3rem' /></a>
                    <a href='https://www.linkedin.com/in/emmanuel-kimulu' target="blank" > <Linkedin color="white" size='3rem' /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer