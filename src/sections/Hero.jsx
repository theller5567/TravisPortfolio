import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { FaDownload } from 'react-icons/fa6';
import Stars from '../components/Stars';
import { motion } from 'framer-motion';
const variants = {
    hiddenTop: { opacity: 0, y: -150, filter: 'blur(20px)' },
    visibleTop: { opacity: 1, y: 0, filter: 'blur(0px)' },
    hiddenBottom: { opacity: 0, y: 50, filter: 'blur(20px)' },
    visibleBottom: { opacity: 1, y: 0, filter: 'blur(0px)' },
    hiddenImageLeft: { opacity: 0, x: 200, filter: 'blur(20px)' },
    visibleImageLeft: { opacity: 1, x: 0, filter: 'blur(0px)' },
    hiddenImageBottom: { opacity: 0, y: 200, filter: 'blur(20px)' },
    visibleImageBottom: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const Hero = () => {

    // Detect scrollYProgress and direction
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [swordRotation, setSwordRotation] = useState(0);

    function downloadResume(){
        window.open('/assets/Travis-Heller-Resume-2026.pdf', '_blank');
    }

    const isMobile = useMediaQuery({maxWidth: 853});
    return (
        <section id='home' className='hero-section'>
            <div className="stars-container">
                <Stars />
            </div>
                <div className="hero-text">
                    <motion.h1 variants={variants} initial="hiddenTop" animate="visibleTop" transition={{ delay: 0.5 }}>Fullstack Developer</motion.h1>
                    <motion.div variants={variants} initial="hiddenBottom" animate="visibleBottom" transition={{ delay: 1 }}>
                        <h3>Precision in Code, Power in Design</h3>
                        <p>Crafting tomorrow’s web, one flawless line at a time.</p>
                    
                    <div className="btn-container">
                        <button className="btn">Contact Me</button>
                        <button className="btn btn-secondary" onClick={downloadResume}><FaDownload /> Download Resume</button>
                    </div>
                    </motion.div>
                </div>
                <div className="hero-image">
                <motion.div 
                initial={isMobile ? "hiddenImageBottom" : "hiddenImageLeft"} 
                animate={isMobile ? "visibleImageBottom" : "visibleImageLeft"} 
                transition={{ delay: 1.5, type: 'spring', stiffness: 120, damping: 10 }}
                variants={variants} 
                className="hero-image-container" 
                >
                    {/* Sword rotates to -50deg when scrolling down and stays there, rotates back to 0deg when scrolling up */}
                    {/* <img src="/assets/DevSword.png" alt="hero image" style={{ transform: `rotate(${swordRotation}deg) scale(${scale})` }} /> */}
                    <motion.img 
                     src="/assets/me-bw-transparent2.png" alt="hero image" />
                </motion.div>
                </div>
        </section>
    )
}

export default Hero;