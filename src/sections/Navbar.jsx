import { useState } from 'react';
import { motion } from 'motion/react';

function Navigation() {
    const scrollToSection = (sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <ul className='nav-ul'>
            <li className='nav-li'>
                <button type="button" aria-label="Home" onClick={() => scrollToSection('home')} className='nav-link'>Home</button>
            </li>
            <li className='nav-li'>
                <button type="button" aria-label="About" onClick={() => scrollToSection('about')} className='nav-link'>About</button>
            </li>
            <li className='nav-li'>
                <button type="button" aria-label="Projects" onClick={() => scrollToSection('projects')} className='nav-link'>Projects</button>
            </li>
            <li className='nav-li'>
                <button type="button" aria-label="Experience" onClick={() => scrollToSection('experience')} className='nav-link'>Experience</button>
            </li>
            {/* <li className='nav-li'>
                <button type="button" aria-label="Testimonials" onClick={() => scrollToSection('testimonials')} className='nav-link'>Testimonials</button>
            </li> */}
            <li className='nav-li'>
                <button type="button" aria-label="Contact" onClick={() => scrollToSection('contact')} className='nav-link'>Contact</button>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div>
        <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
            <div className='mx-auto c-space max-w-7xl'>
                <div className='flex items-center justify-between py-2 xs:py-0'>
                    <button type="button" aria-label="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">Travis Heller</button>
                    <button type="button" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                        <img src={isOpen ? "./assets/close.svg" : "./assets/menu.svg"} className='w-6 h-6' alt="toggle" />
                    </button>
                    <nav className="hidden sm:flex">
                    <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && <motion.div 
            initial={{ opacity: 0,x: -10 }}
            animate={{ opacity: 1,x: 0 }}
            style={{ maxHeight: '100vh' }}
            transition={{ duration: 1 }}
            className="block overflow-hidden text-center sm:hidden">
                <nav className="pb-5">
                    <Navigation />
                </nav>
            </motion.div>}
        </div>
    </div>
  )
}

export default Navbar;