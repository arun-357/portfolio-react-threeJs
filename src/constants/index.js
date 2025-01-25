export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: '3D Portfolio Website',
    desc: 'This 3D portfolio website is an innovative platform that showcases projects and skills through an interactive and visually captivating experience.',
    subdesc:
      'Built with advanced technologies like Three.js, React, and Tailwind CSS, this portfolio demonstrates technical expertise and creativity, delivering an immersive and engaging presentation for visitors.',    
    href: 'https://github.com/arun-357/portfolio-react-threeJs',
    phone: false,
    type: 'video',
    texture: '/models/phone/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #ffffff',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Three Js',
        path: '/assets/threeJs.png',
      },
    ],
  },
  {
    title: 'Jira Time Log Reminder',
    desc: 'As a Scrum Master, ensuring accurate time logging for generating effective burndown charts was a challenge. The Jira Time Log Reminder automates this process, saving time and improving team efficiency.',
    subdesc:
      'Built using Jira Open API, Google Script, Node.js, and Google Chat API, this tool sends automated reminders to team members at the end of each day, ensuring timely and accurate time logging.',    
    href: 'https://github.com/arun-357/jiraTimeLogReminder',
    phone: true,
    type:'image',
    texture: '/models/phone/project2.png',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #ffffff',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Jira Open API',
        path: '/assets/jira.png',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/nodeJs.png',
      },
      {
        id: 3,
        name: 'Google Scripts',
        path: '/assets/google.png',
      },
      {
        id: 4,
        name: 'Google Chat',
        path: 'assets/chat.png'
      },
      {
        id: 5,
        name: 'Open API',
        path: '/assets/openAPI.png',
      },
    ],
  },
  {
    title: 'Voice Enhancer Telegram Bot',
    desc: 'As an influencer, I needed a quick and efficient solution to enhance audio quality for my content. The Voice Enhancer Telegram Bot was designed to address this need, eliminating the hassle of using tedious online tools.',
    subdesc:
      'Created using Python, Telegram Open API, and Spotify’s Pedalboard library, this bot simplifies voice enhancement, providing a fast and reliable tool tailored for content creators !',    
    href: 'https://github.com/arun-357/voiceEnhancer-telegramBot',
    type: 'video',
    texture: '/models/phone/project3.png',
    phone: true,
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px #ffffff',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Telegram',
        path: 'assets/tele.png',
      }, 
      {
        id: 3,
        name: 'Spotify Pedalboard',
        path: 'assets/spotify.png',
      }
    ],
  },
  {
    title: 'Jane Street Market Prediction',
    desc: 'This project focuses on predicting market outcomes with high accuracy, leveraging advanced data analysis and machine learning techniques to model financial market behavior.',
    subdesc:  
      'Developed as part of a Kaggle competition, this solution achieved a top 3% ranking among thousands of participants. Built using Python and XBG Boost machine learning frameworks.',     
    href: 'https://github.com/arun-357/janeStreet-marketPrediction',
    phone: true,
    type: 'image',
    texture: '/models/phone/project4.png',
    logo: '/assets/jane.png',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solidrgb(112, 135, 166)',
      boxShadow: '0px 0px 60px 0px #ffffff',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Kaggle',
        path: 'assets/kaggle.png',
      },
      {
        id: 2,
        name: 'Pandas',
        path: 'assets/pandas.png',
      }, 
      {
        id: 3,
        name: 'Pandas',
        path: 'assets/collab.png',
      }
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  console.log(isSmall, isMobile, isTablet);
  return {
    desktopScale: isSmall ? 1 : isMobile ? 1 : 1.4,
    desktopPosition: isSmall ?  [7.3, 1.7, -2.5] : isTablet ? [10, -1, 1] : isMobile ? [7.3, 3.9, -2.5] : [9.7, -9, 11],
    desktopRotation: isSmall ? [0.5, 0.8, 0] : isMobile ? [0.5, 0.8, 0] :  isTablet ? [0.5, 0.8, 0] : [0.3, 0.6, 0],

    reactLogoScale: isSmall ? 0.2 : isMobile ? 0.3 : isTablet ? 0.3 : 0.7,
    reactLogoPosition: isSmall ? [10, 10, 0] : isMobile ? [9, 12, 0] : isTablet ? [12, 12, 0] : [28, 5, 0],

    threeLogoScale: isSmall ? 0.02 : isMobile ? 0.03 : isTablet ? 0.03 : 0.08,
    threeLogoPosition: isSmall ? [-9, 11, 0] : isMobile ? [-9, 13.5, 0] : isTablet ? [-13, 14, 0] : [-32, 4.5, 0],
    
    astroScale: isSmall ? 0.7 : isMobile ? 0.7 : isTablet ? 0.7 : 1.5,
    astroPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],

    htmlCssLogoScale: 0.03,
    htmlPosition: [-5.2, -11.2, 0],
    htmlRotation: [0, 0, 0.2],

    cssPosition: [6.2, -11.2, 0],
    cssRotation: [0, 0, -0.2],

    arrowScale: 20,
    arrowPosition: [0, -13.6, 0],
    arrowRotation: [0, -3.2, 0.1],
  };
};

export const latLogWorkPlace = [
  { lat: 11.0168, lng: 76.9558, size: 30, color: 'white' },
  // { lat: 18.5204, lng: 73.8567, size: 15, color: 'red' },
  // { lat: 13.0843, lng: 80.2705, size: 15, color: 'white' },
  // { lat: 12.9716, lng: 77.5946, size: 15, color: 'red' },
  // { lat: 17.4065, lng: 78.4772, size: 15, color: 'white' },
]

export const latLogWorkLabel = [
  { lat: 11.0168, lng: 76.9558, size: 7, color: 'white', text: 'Coimbatore, India'},
  // { lat: 18.5204, lng: 73.8567, size: 7, color: 'white', text: 'Pune'},
  // { lat: 13.0843, lng: 80.2705, size: 4, color: 'white', text: 'Chennai'},
  // { lat: 12.9716, lng: 77.5946, size: 4, color: 'white', text: 'Bangalore'},
  // { lat: 17.4065, lng: 78.4772, size: 7, color: 'white', text: 'Hyderabad'},
]