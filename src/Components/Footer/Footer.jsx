import React from 'react'
import "./Footer.css"
import Wave from '../../img/wave.png'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'




function Footer() {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>kimuluemmanuel@gmail.com</span>
                <div className="f-icons">
                    <Twitter color="blue" size='3rem' />
                    <Facebook color="white" size='3rem' />
                    <Github color="white" size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer