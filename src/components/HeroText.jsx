import FlipWords from './FlipWords';
import { motion } from 'framer-motion';



const HeroText = () => {
    const words = [
        'Secure',
        'Modern',
        'Scalable',
    ];
    
    const variants = {
        hidden: { opacity: 0, x: -50, transition: { delay: 1 } },
        visible: { opacity: 1, x: 0},
    }
    return (
        <div className="hero-text">
            {/* Desktop view */}
            <div className="flex-col hidden md:flex">
                <div className="flex flex-col items-start">
                    <motion.h1 className="text-8xl neon-text-header font-bold text-neutral-100"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                    >DevSword</motion.h1>
                    <h3 className="text-4xl font-medium text-neutral-300">Precision in Code, Power in Design</h3>
                    <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}
                    >
                    </motion.div>
                    <motion.p className="text-xl font-light text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8 }}
                    >Your concept. My blade. Flawless delivery.</motion.p>
                </div>
            </div>
            {/* Mobile view */}
            <div className="flex flex-col space-y-6 md:hidden">
                <motion.h1 className="text-6xl font-bold neon-text-header"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
                >DevSword</motion.h1>
                <div>
                    <motion.h3 className="text-xl font-black text-neutral-100"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                    >Precision in Code, Power in Design</motion.h3>
                    <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}
                    >
                    </motion.div>
                    <motion.p className="text-md font-light text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8 }}
                    >Your concept. My blade. Flawless delivery.</motion.p>
                </div>
                
            </div>
        </div>
    )
}

export default HeroText;
