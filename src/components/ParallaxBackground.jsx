import { motion, useTransform, useScroll } from 'framer-motion';


const ParallaxBackground = () => {
const { scrollYProgress } = useScroll();
const mountain3Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
const planetsX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);
const mountain2Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
const mountain1Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <motion.div className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url('/assets/sky.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
          />
        {/* Background Mountains */}
        <motion.div className="absolute inset-0 w-full h-screen -z-40"
          style={{
            backgroundImage: "url('/assets/mountain-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: mountain3Y,
          }}
          />
          {/* Planets */}
          <motion.div className="absolute inset-0 w-full h-screen -z-30"
          style={{
            backgroundImage: "url('/assets/planets.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            x: planetsX,
          }}
          />
          <motion.div className="absolute inset-0 w-full h-screen -z-30"
          style={{
            backgroundImage: "url('/assets/mountain-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: mountain2Y,
          }}
          />
          <motion.div className="absolute inset-0 w-full h-screen -z-30"
          style={{
            backgroundImage: "url('/assets/mountain-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            y: mountain1Y,
          }}
          />
        </div>
    </section>
  )
}
export default ParallaxBackground;
