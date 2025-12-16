import React from 'react'
import './Portfolio.css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import musicapp1 from '../../img/musicapp1.png'
import MusicApp from '../../img/musicapp.png'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";





function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 5, type: 'spring' }

    const pieces = [
        { src: Sidebar, title: 'Concrete study', orientation: 'portrait' },
        { src: Ecommerce, title: 'E‑commerce landing', orientation: 'landscape' },
        { src: musicapp1, title: 'Music player UI', orientation: 'portrait' },
        { src: MusicApp, title: 'Streaming dashboard', orientation: 'landscape' },
        { src: Sidebar, title: 'Brand direction', orientation: 'portrait' },
        { src: Ecommerce, title: 'Product grid', orientation: 'landscape' },
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
                        className={`portfolio-item ${piece.orientation}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    >
                        <img src={piece.src} alt={piece.title} />
                        <div className="portfolio-item__label">{piece.title}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Portfolio