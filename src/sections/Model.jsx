import { PerspectiveCamera, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';

// import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants';

import Desktop from '../components/Desktop';
import CanvasLoader from '../components/CanvasLoader';
import ReactLogo from '../components/ReactLogo';
import ThreeLogo from '../components/ThreeLogo';
import HtmlLogo from '../components/HtmlLogo';
import CssLogo from '../components/CssLogo';
import Arrow from '../components/Arrow';
import DesktopCamera from '../components/DesktopCamera';
import Button from '../components/Button';

export default function Model() {
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
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">            
        <p className="sm:text2xl text-xl font-medium text-white text-center font-generalsans">
          I&apos;m Arunachalam <img src="/assets/cool.svg" alt="cool" className="w-6 h-6 cool-emoji" />
        </p>
        <p className="model_tag">Software Development Engineer</p>   
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className='w-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 50]} />
            <DesktopCamera isMobile={isMobile}>
              <Desktop
                scale={sizes.desktopScale}
                rotation={sizes.desktopRotation}
                position={sizes.desktopPosition}
                // Leva Controls
                // scale={[levaControls.scale, levaControls.scale, levaControls.scale]} 
                // rotation={[levaControls.rotationX, levaControls.rotationY, levaControls.rotationZ]} 
                // position={[levaControls.positionX, levaControls.positionY, levaControls.positionZ]}
              />
            </DesktopCamera>
            <group>
              <ReactLogo scale={sizes.reactLogoScale} position={sizes.reactLogoPosition}/>
              <ThreeLogo scale={sizes.threeLogoScale} position={sizes.threeLogoPosition}/>
              { isSmall ||isMobile || isTablet ? <HtmlLogo scale={sizes.htmlCssLogoScale} position={sizes.htmlPosition} rotation={sizes.htmlRotation}/> : null}
              { isSmall ||isMobile || isTablet ? <CssLogo scale={sizes.htmlCssLogoScale} position={sizes.cssPosition} rotation={sizes.cssRotation}/> : null}
              { isSmall ||isMobile || isTablet ? <Arrow scale={sizes.arrowScale} position={sizes.arrowPosition} rotation={sizes.arrowRotation}/> : null}
            </group>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>      
      <div className={`absolute h-${sizes.button} bottom-7 left-0 right-0 w-full z-10 c-space`}>
        <a className='w-fit'>
          <Button text="Let's Work together" containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};
