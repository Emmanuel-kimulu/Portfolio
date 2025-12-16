import React from 'react'
import './Portfolio.css'
import D1 from '../../img/Designs/1.png'
import D2 from '../../img/Designs/2.png'
import D3 from '../../img/Designs/3.png'
import D4 from '../../img/Designs/4.png'
import D5 from '../../img/Designs/5.png'
import D6 from '../../img/Designs/6.png'
import D7 from '../../img/Designs/7.png'
import D8 from '../../img/Designs/8.png'
import D9 from '../../img/Designs/9.png'
import D10 from '../../img/Designs/10.png'
import D11 from '../../img/Designs/11.png'
import D12 from '../../img/Designs/12.png'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";





function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 5, type: 'spring' }

    const pieces = [
        { src: D2, title: 'Design 2' },
        { src: D9, title: 'Design 9' },
        { src: D6, title: 'Design 6' },
        { src: D1, title: 'Design 1' },
        { src: D10, title: 'Design 10' },
        { src: D3, title: 'Design 3' },
        { src: D5, title: 'Design 5' },
        { src: D11, title: 'Design 11' },
        { src: D7, title: 'Design 7' },
        { src: D4, title: 'Design 4' },
        { src: D12, title: 'Design 12' },
        { src: D8, title: 'Design 8' },
    ];

    return (
        <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: "100%" }}
            transition={transition}

            className="portfolio" id="Portifolio">
            <div className="portfolio__heading">
                <span style={{ color: darkMode ? 'white' : '' }}>Recent work</span>
                <span>Portfolio gallery</span>
                <p style={{ color: darkMode ? '#cfcfcf' : '#555' }}>
                    A flexible grid that fits both portrait and landscape pieces. Hover any tile to preview.
                </p>
            </div>

            <div className="portfolio-grid">
                {pieces.map((piece, idx) => (
                    <motion.div
                        key={idx}
                        className="portfolio-item"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    >
                        <img src={piece.src} alt={piece.title} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Portfolio