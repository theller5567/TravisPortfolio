export const myProjects = [
  {
    id: 1,
    title: "Media Library - React",
    description:
      "A media library built with React, MongoDB, AWS-S3. It allows users to upload, view, and delete media files while being able to tag, categorize, and search for them.",
    subDescription: [
      "Built a media library with React, MongoDB, AWS-S3. It allows users to upload, view, and delete media files while being able to tag, categorize, and search for them.",
      "Implemented a media library logic with React, MongoDB, AWS-S3. It allows users to upload, view, and delete media files while being able to tag, categorize, and search for them.",
      "Designed a responsive frontend with SCSS, enhancing user experience.",
      "Added a tag system, and a search functionality for functionality improvements.",
    ],
    href: "https://nerdycoder.com/projects/omniapp/media-library",
    logo: "",
    image: "/assets/projects/medialibrary.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 3,
        name: "AWS-S3",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 4,
        name: "SCSS",
        path: "/assets/logos/sass.svg",
      }
    ],
  },
    {
      id: 2,
      title: "Emoji Memory Game",
      description:
        "The Emoji Memory Game is a highly interactive, full-stack web application that gamifies the classic memory-matching puzzle. Players are challenged to find matching pairs of emojis within a limited number of attempts, with the game dynamically adjusting based on user-selected categories and difficulty levels. I wanted players to feel part of a community, so I built a persistent Global Leaderboard system. This required seamless coordination between the React frontend and a custom Node/Express backend.",
      subDescription: [
        'Dynamic Gameplay: Offers multiple emoji categories (e.g., Animals, Food, Flags) fetched dynamically, and five difficulty tiers ranging from "Beginner" (40 flips) to "Insane" (10 flips).',
        'Global Leaderboard: A competitive ranking system that persists data to a database, allowing players to view top scores globally, filtered by difficulty level.',
        'Real-Time Analytics: Tracks flips, win/loss states, and calculates overall community stats such as total games played, average flips, and win rates.',
        'Immersive UI/UX: Features smooth 3D card-flip animations, a "darken" background transition during active play, and celebratory confetti effects upon winning.',
        'Responsive Engine: Utilizes advanced CSS techniques (Grid, Flexbox, and Container Queries) to ensure the game board scales perfectly from mobile screens to large desktop monitors.',

      ],
      href: "https://emoji-memory-game-th.netlify.app/",
      logo: "",
      image: "/assets/projects/emoji-memory-game.jpg",
      tags: [
        {
          id: 1,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 2,
          name: "SCSS",
          path: "/assets/logos/sass.svg",
        },
        {
          id: 3,
          name: "MongoDB",
          path: "/assets/logos/mongodb.png",
        },
        {
          id: 4,
          name: "JavaScript",
          path: "/assets/logos/js.svg",
        }
      ],
    },
    {
      id: 3,
      title: "Chef Landon - AI Recipe Generator",
      description:
        "I built Chef Landon AI to showcase how AI can be integrated into a user-friendly product while maintaining high standards for security and design. This project highlights my ability to bridge the gap between complex backend AI integrations and a polished, responsive frontend user experience.",
      subDescription: [
        'Structured Data Parsing: Developed custom logic to parse raw AI text responses into a structured data format (title, ingredients, instructions), allowing for a clean, side-by-side card layout on larger screens.',
        'State-Aware Logic: Includes "dirty" state tracking to prevent redundant API calls, saving on costs and improving performance by only allowing re-generation when the ingredient list actually changes.',
        'Security First: Architected the project to never expose secrets in the client-side code, utilizing environment variables and backend proxying for all external service integrations.',

      ],
      href: "https://cheflandon.netlify.app/",
      logo: "",
      image: "/assets/projects/cheflandon.jpg",
      tags: [
        {
          id: 1,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 2,
          name: "Claude API",
          path: "/assets/logos/claude.svg",
        },
        {
          id: 3,
          name: "MongoDB",
          path: "/assets/logos/mongodb.svg",
        },
        {
          id: 4,
          name: "SCSS",
          path: "/assets/logos/sass.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Omni International - Ecommerce Website",
      description:
        "Designed and developed a fully customizable Magento 2 theme optimized for performance and SEO.",
      subDescription: [
        "Optimized SEO and page speed for the ecommerce website.",
        "Implemented custom widgets and plugin compatibility for extended functionality.",
        "Implemented a responsive design for mobile devices."
      ],
      href: "https://omni-inc.com/",
      logo: "",
      image: "/assets/projects/omni-inc.jpg",
      tags: [
        {
          id: 1,
          name: "Magento 2",
          path: "/assets/logos/magento.svg",
        },
        {
          id: 2,
          name: "PHP",
          path: "/assets/logos/php.svg",
        },
        {
          id: 3,
          name: "HTML5",
          path: "/assets/logos/html5.svg",
        },
        {
          id: 4,
          name: "CSS3",
          path: "/assets/logos/css3.svg",
        },
      ],
    },
    {
      id: 5,
      title: "ROI Calculator - Landing Page",
      description:
        "This project is a sophisticated, interactive sales enablement platform developed for Omni International. It transforms a traditional product landing page into a powerful Business Intelligence (BI) tool designed to help laboratory stakeholders make data-driven decisions about laboratory automation.The centerpiece of the application is a custom-engineered ROI BI Engine that translates complex operational variables—such as lab technician salaries, manual error rates, and sample throughput—into clear, persuasive financial insights.",
      subDescription: [
        'Decision-Support ROI Engine: Built a robust mathematical model using vanilla JavaScript to calculate the "Time-to-Payback." This tool allows potential customers to enter real-world laboratory metrics and receive instant, accurate visualizations of annual labor savings and operational efficiency gains.',
        'Interactive Hardware Analytics: Developed a custom "hotspot" interface that enables users to explore the technical specifications of the LH 96 hardware through an intuitive, data-rich UI.',
        'Frictionless Lead Acquisition: Integrated a lead-capture system using a serverless architecture (Netlify Forms), ensuring that high-intent users generated by the ROI calculator are immediately funneled into the sales pipeline.',
        'Professional UX/UI Architecture: Designed a fully responsive, mobile-first experience that maintains the integrity of complex data visualizations across all devices.',
      ],
      href: "https://lh96-landingpage-roi.netlify.app/",
      logo: "",
      image: "/assets/projects/roi-calculator.jpg",
      tags: [
        {
          id: 1,
          name: "JavaScript",
          path: "/assets/logos/javascript.svg",
        },
        {
          id: 2,
          name: "HTML5",
          path: "/assets/logos/html5.svg",
        },
        {
          id: 3,
          name: "SCSS",
          path: "/assets/logos/sass.svg",
        },
      ],
    },
    {
      id: 6,
      title: "Blackjack Game - JavaScript",
      description:
        "A modern, interactive Blackjack game built with React 19 and Framer Motion. This project focuses on high-performance state management and seamless user interactions. Key challenges included implementing complex card game logic with useReducer, managing asset preloading for a zero-latency experience, and creating a responsive casino-style UI that works across all devices.",
      subDescription: [
        'Dynamic Betting System: Users can place bets using interactive poker chips (25, 50, 100, and 500 denominations) with real-time balance tracking.',
        'Intelligent Game Logic: A robust custom game engine that handles card dealing, hit/stand mechanics, and dealer AI behavior (hits until soft 17).',
        'Real-time Hand Evaluation: Automatically calculates hand totals, including sophisticated "Soft" vs. "Hard" total logic for Aces.',
        'Fluid UI/UX Animations: Uses high-performance animations for card dealing, chip movements, and state transitions to provide a premium feel.',
        'Asset Optimization: Implements a custom preloading system with a progress tracker to ensure all game assets (cards, chips, backgrounds) are ready before gameplay begins.',
        'Responsive Design: Fully optimized for different screen sizes, ensuring a seamless experience across desktop, tablet, and mobile devices.',

      ],
      href: "https://blackjack-react-tmh.netlify.app/",
      logo: "",
      image: "/assets/projects/blackjack.jpg",
      tags: [
        {
          id: 1,
          name: "JavaScript",
          path: "/assets/logos/javascript.svg",
        },
        {
          id: 2,
          name: "HTML5",
          path: "/assets/logos/html5.svg",
        },
        {
          id: 3,
          name: "CSS3",
          path: "/assets/logos/css3.svg",
        }
      ],
    },
    {
      id: 7,
      title: "Weather App - React",
      description:
        "This is a high-performance, responsive Weather Dashboard built to provide real-time meteorological data with a focus on reliability, accessibility, and smooth user experience. Users can search for any city globally, view current weather conditions, and explore detailed hourly and daily forecasts.The application goes beyond simple data fetching by implementing industry-standard patterns for handling network instability, optimizing performance through intelligent caching, and ensuring a layout-stable UI during data loading.",
      subDescription: [
        "Smart Search (Typeahead): Implemented an ARIA-compliant search component with debounced geocoding suggestions and full keyboard navigation (Arrow keys, Enter, Esc).",
        "Comprehensive Data: Real-time integration with the Open-Meteo API for current conditions, 24-hour hourly forecasts, and 7-day daily trends.",
        "Dynamic Unit System: A centralized unit toggle that instantly switches the entire dashboard (Temperature, Wind Speed, and Precipitation) between Metric and Imperial systems.",
        "Zero Layout Shift (CLS): Utilized custom CSS tokens and skeleton loaders to reserve space for data, ensuring a perfectly stable layout while content is loading.",
        "Resilience & Offline Support:",
        "Intelligent Caching: Custom fresh/stale caching layer using localStorage to reduce API calls and provide instant reloads.",
        "Retry Logic: Automatic exponential backoff for failed requests to handle transient network issues.",
        "Error Boundaries: A global React Error Boundary and classified API error screens to provide user-friendly feedback on failure.",
        "Timezone Accuracy: Logic to ensure hourly data aligns with the destination city's local timezone rather than the user's browser time.",

      ],
      href: "https://weather-app-react-tmh.netlify.app/",
      logo: "",
      image: "/assets/projects/weatherApp.png",
      tags: [
        {
          id: 1,
          name: "JavaScript",
          path: "/assets/logos/javascript.svg",
        },
        {
          id: 2,
          name: "HTML5",
          path: "/assets/logos/html5.svg",
        },
        {
          id: 3,
          name: "CSS3",
          path: "/assets/logos/css3.svg",
        },
        {
          id: 4,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 5,
          name: "TypeScript",
          path: "/assets/logos/typescript.svg",
        },
      ],
    }
  ];
  
  export const mySocials = [
    {
      name: "WhatsApp",
      href: "",
      icon: "/assets/socials/whatsApp.svg",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/ali-sanati/",
      icon: "/assets/socials/linkedIn.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ali.sanatidev/reels/",
      icon: "/assets/socials/instagram.svg",
    },
  ];
  
  export const experiences = [
    {
      title: "2015-Present",
      job: "Senior Developer & Marketing Specialist",
      date: "Omni International",
      contents: [
        "In my current role at Omni International, I lead a full redesign and rebuild of the company’s eCommerce site. This initiative resulted in a 35 percent increase in lead conversions and a more streamlined user journey. I implemented a fully integrated marketing stack involving HubSpot, Salesforce, and Magento, automating workflows and reducing manual lead handoff tasks by 40 percent.",
        "On the front end, I developed custom components using React.js and Vue.js, optimized performance, and ensured responsiveness across all devices. I also collaborated closely with design, sales, and external development teams to manage timelines, align goals, and deliver measurable outcomes.",
      ],
    },
    {
      title: "2013-2014",
      job: "Front-End Developer & UX Designer",
      date: "Satori Interactive",
      contents: [
        "Led the development of high-profile projects for IHG, Equifax, and Merial, enhancing client satisfaction.",
        "Managed AWS/Beanstalk environments and streamlined offshore team coordination for efficient project delivery.",
        "Delivered innovative custom dashboards, SPAs, and mobile apps to meet client needs.",
        "Spearheaded the UX strategy, improving user experience and client communication processes.",
        "Contributed to the hiring process and content development, ensuring team growth and project alignment.",
      ],
    },
    {
      title: "Consulting",
      job: "Web Developer & Digital Marketing Consultant",
      date: "TMH Designs",
      contents: [
        "Provided consulting services for web development and digital marketing projects.",
        "Delivered custom web solutions and marketing automation workflows.",
        "Collaborated with clients to optimize lead capture and CRM integrations.",
        "Created multimedia content and web assets supporting digital campaigns.",
      ],
    },
  ];
  export const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://robohash.org/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://robohash.org/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://robohash.org/john",
    },
    {
      name: "Alice",
      username: "@alice",
      body: "This is hands down the best thing I've experienced. Highly recommend!",
      img: "https://robohash.org/alice",
    },
    {
      name: "Bob",
      username: "@bob",
      body: "Incredible work! The attention to detail is phenomenal.",
      img: "https://robohash.org/bob",
    },
    {
      name: "Charlie",
      username: "@charlie",
      body: "This exceeded all my expectations. Absolutely stunning!",
      img: "https://robohash.org/charlie",
    },
    {
      name: "Dave",
      username: "@dave",
      body: "Simply breathtaking. The best decision I've made in a while.",
      img: "https://robohash.org/dave",
    },
    {
      name: "Eve",
      username: "@eve",
      body: "So glad I found this. It has changed the game for me.",
      img: "https://robohash.org/eve",
    },
  ];
  