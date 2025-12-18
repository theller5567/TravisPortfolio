import { OrbitingCircles } from './OrbitingCircles';

export function Frameworks() {
    const skills = [
        "photoshop",
        "git",
        "html5",
        "javascript",
        "react",
        "sqlite",
        "tailwindcss",
        "vitejs",
        "wordpress",
        "php",
        "analytics",
        "mongodb",
        "figma",
        "nodejs",
        "typescript",
        "sass",
        "vue",
        "netlify",
        "aws",
        "cloudflare",
      
    ];
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={35}>
        {skills.map((skill, index) => (
          <Icon src={`assets/logos/${skill}.svg`} key={index} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon src={`assets/logos/${skill}.svg`} key={index} />
        ))}
      </OrbitingCircles>
    </div>
  )
}

const Icon = ({ src}) => {
    return <img src={src} className="duration-200 rounded-sm hover:scale-110" />
};
