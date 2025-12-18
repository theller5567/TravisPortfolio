import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { FaDownload } from 'react-icons/fa6';
import Stars from '../components/Stars';

const Hero = () => {

    // Detect scrollYProgress and direction
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [swordRotation, setSwordRotation] = useState(0);

    function downloadResume(){
        window.open('/assets/Travis-Heller-Resume.pdf', '_blank');
    }

    const isMobile = useMediaQuery({maxWidth: 853});
    return (
        <section id='home' className='hero-section'>
            <div className="stars-container">
                <Stars />
            </div>
                <div className="hero-text">
                    <h1>Fullstack Developer</h1>
                    <h3>Precision in Code, Power in Design</h3>
                    <p>Crafting tomorrow’s web, one flawless line at a time.</p>
                    <div className="btn-container">
                        <button className="btn">Contact Me</button>
                        <button className="btn btn-secondary" onClick={downloadResume}><FaDownload /> Download Resume</button>
                    </div>
                </div>
                <div className="hero-image" >
                    {/* Sword rotates to -50deg when scrolling down and stays there, rotates back to 0deg when scrolling up */}
                    {/* <img src="/assets/DevSword.png" alt="hero image" style={{ transform: `rotate(${swordRotation}deg) scale(${scale})` }} /> */}
                    <img src="/assets/me-bw-transparent2.png" alt="hero image" />
                </div>
        </section>
    )
}

export default Hero;