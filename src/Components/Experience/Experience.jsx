import React from 'react'
import './Experience.css'
import { motion } from "framer-motion";


function Experience() {
  return (
    <div className="experience" id="Experience" >
      <div className="achievement">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="circle">4+</motion.div>
        <span>Years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <motion.div
          initial={{ rotate: 45, }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="circle">6+</motion.div>

        <span>Completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <motion.div
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="circle">5+</motion.div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience