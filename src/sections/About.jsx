import Card from '../components/Card'
import { useRef } from 'react';
import Globe from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';

const About = () => {
    const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="grid-1 flex items-end grid-default-color">
                <img 
                src="/assets/coding-pov.png" 
                alt="coding pov" 
                className="absolute scale-[1.75] -right-[20] -top-[4] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Travis Heller</p>
                    <p className="subtext">Over the last couple decades, I've developed my frontend and backend dev skills to deliver dynamic web applications.</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none bottom-0 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo " />
            </div>
            {/* Grid 2 */}
            <div className="grid-2 grid-default-color">
                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"75deg", top: '30%', left: '20%' }} text="Design Patterns" />
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"-30deg", top: '60%', left: '50%' }} text="Design Principles" />
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"90deg", top: '20%', left: '80%' }} text="JavaScript" />
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"-45deg", top: '55%', left: '0%' }} text="React" />
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"20deg", top: '10%', left: '38%' }} text="Node.js" />
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"10deg", top: '80%', left: '80%' }} text="Express" />
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"5deg", top: '80%', left: '10%' }} text="MongoDB" />
                    <Card containerRef={grid2Container} style={{ padding: "1rem", rotate:"15deg", top: '10%', left: '5%' }} text="CSS / SCSS" />
                    {/* <Card containerRef={grid2Container} image="/assets/logos/csharp-pink.png" style={{ rotate:"-45deg", top: '70%', left: '35%' }} />
                    <Card containerRef={grid2Container} image="/assets/logos/dotnet-pink.png" style={{ rotate:"45deg", top: '70%', left: '65%' }} />
                    <Card containerRef={grid2Container} image="/assets/logos/blazor-pink.png" style={{ rotate:"-45deg", top: '10%', left: '65%' }} /> */}
                </div>
            </div>
            {/* Grid 3 */}
            <div className="grid-3 grid-black-color">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in the United States - Georgia, and open to remote work worldwide.</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe />
                </figure>
            </div>
            {/* Grid 4 */}
            <div className="grid-4 grid-special-color">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="headtext text-center">Do you want to start a project together?</p>
                    <CopyEmailButton />
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-5 grid-default-color">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Tech Stack</p>
                    <p className="subtext">I specialize in a variety of languages, frameworks, and tools to build robust and scalable web applications.</p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Frameworks />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About