import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';

import Desktop from '../components/Desktop';
import { CanvasLoader } from '../components/CanvasLoader';
// import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants';

export const Model = () => {
  // Leva Controls
//   const levaControls = useControls('Desktop', {
//       positionX: {
//             value: 2.5,
//             min: -10,
//             max: 10,
//       },
//       positionY: {
//             value: 2.5,
//             min: -10,
//             max: 10,
//       },
//       positionZ: {
//             value: 2.5,
//             min: -10,
//             max: 11,
//       },
//       rotationX: {
//             value: 0,
//             min: -10,
//             max: 10,
//       },
//       rotationY: {
//             value: 0,
//             min: -10,
//             max: 10,
//       },
//       rotationZ: {
//             value: 0,
//             min: -10,
//             max: 10,
//       },
//       scale: {
//             value: 1,
//             min: 0.1,
//             max: 10,
//       },
//   });
  const isSmall = useMediaQuery({ query: '(max-width: 380px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  useEffect(() => {
    const element = document.querySelector('.model_tag_1');
    if (element) {
      element.classList.add('animate-typing');
    }
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">            
        <p className="sm:text3xl text-2xl font-medium text-white text-center font-generalsans">
          I&apos;m Arunachalam <img src="/assets/cool.svg" alt="cool" className="w-6 h-6 cool-emoji" />
        </p>
        <p className="model_tag">Software Development Engineer</p>   
      </div>
      <div className='w-full h-full absolute inset-0'>
            {/* <Leva /> */}
            <Canvas className='w-full h-full'>
                  <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 50]} />
                  <Desktop
                        scale={sizes.desktopScale}
                        rotation={sizes.desktopRotation}
                        position={sizes.desktopPosition}
                        // Leva Controls
                        // scale={[levaControls.scale, levaControls.scale, levaControls.scale]} 
                        // rotation={[levaControls.rotationX, levaControls.rotationY, levaControls.rotationZ]} 
                        // position={[levaControls.positionX, levaControls.positionY, levaControls.positionZ]}
                  />
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={1} />
                  </Suspense>
            </Canvas>
      </div>      
    </section>
  );
};
