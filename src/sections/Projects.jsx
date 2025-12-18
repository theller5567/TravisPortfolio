import React from 'react'
import { myProjects } from '../constants/index'
import Project from '../components/Project'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });

    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }
    const [preview, setPreview] = useState(null);
    
  return (
    <section id="projects" onMouseMove={handleMouseMove} className="relative c-space section-spacing">
        <h2 className="text-heading">My Selected Projects</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full">
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
            ))}
            {preview && <motion.img className="bg-mint border-2 border-white/10 p-2 fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-90"
            src={preview}
            alt="project"
            style={{
                x: springX,
                y: springY,
            }}
            />}
        </div>
    </section>
  )
}

export default Projects