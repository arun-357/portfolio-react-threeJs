# Portfolio Project

## Skills Highlighted 🚀
- **React**: Used for building the user interface.
- **Three.js**: Utilized for 3D graphics rendering.
- **React Three Fiber**: A React renderer for Three.js.
- **GSAP**: Used for animations.
- **Responsive Design**: Implemented using `react-responsive`.
- **JavaScript**: Core language for the project.
- **HTML & CSS**: For structuring and styling the web pages.
- **Tailwind CSS**: Used for styling the components with utility-first CSS.
- **Vercel**: Used for deploying the website.

## About the Project 🖥️
This project is a personal portfolio website showcasing the skills and projects of a Software Development Engineer. The website features a 3D model of a desktop setup, which can be interacted with using orbit controls. The project leverages React Three Fiber for rendering 3D graphics and includes various 3D models such as a desktop, React logo, and Three.js logo.

### Features 🌟
- **3D Desktop Model**: A realistic 3D model of a desktop setup.
- **Interactive Controls**: Orbit controls for interacting with the 3D model.
- **Responsive Design**: Adapts to different screen sizes.
- **Animations**: Smooth animations using GSAP.

## References 📚
The project was initially inspired by a YouTube video, but significant changes have been made to enhance functionality and interactivity.

### New Features ✨
- **New 3D Models**: Added new 3D models with more interaction using video and image textures.
- **Contact Section**: Filters out inappropriate languages to maintain professionalism.
- **Tech Stack Image Carousel**: Displays the tech stack using an interactive image carousel.
- **Confetti Animations**: Added confetti animations for celebratory effects.
- **Emit Arc Function**: Emits arcs for globe location visualization.
- **Vercel**: Deploying the website using Vercel for seamless and efficient deployment.

### Project Structure 🗂️
```
portfolio/
├── public/
│   ├── assets/
│   │   └── cool.svg
│   └── models/
│       ├── desktop/
│       │   └── scene.gltf
│       └── threeJs/
│           └── scene.gltf
├── src/
│   ├── components/
│   │   ├── Arrow.jsx
│   │   ├── Button.jsx
│   │   ├── CanvasLoader.jsx
│   │   ├── CssLogo.jsx
│   │   ├── Desktop.jsx
│   │   ├── DesktopCamera.jsx
│   │   ├── HtmlLogo.jsx
│   │   ├── ReactLogo.jsx
│   │   └── ThreeLogo.jsx
│   ├── constants/
│   │   └── index.js
│   ├── sections/
│   │   └── Model.jsx
│   └── App.js
├── .gitignore
├── package.json
└── README.md
```

### How to Run the Project 🏃‍♂️
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Future Enhancements 🔮
- Add new section to download resume!

### License 📜
This project is licensed under the MIT License.