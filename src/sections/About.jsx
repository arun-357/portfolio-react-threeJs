import { useState, useCallback, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

import { latLogWorkLabel } from '../constants'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('arunachalamnachiappan20@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const ARC_REL_LEN = 0.4; // relative to whole arc
  const FLIGHT_TIME = 1000;
  const NUM_RINGS = 3;
  const RINGS_MAX_R = 5; // deg
  const RING_PROPAGATION_SPEED = 5; // deg/sec
  const [arcsData, setArcsData] = useState([]);
  const [ringsData, setRingsData] = useState([]);
  const globalRef = useRef()

  const emitArc = useCallback(({ lat: startLat, lng: startLng }) => {
      const { lat: endLat, lng: endLng } = latLogWorkLabel[0];
      // add and remove arc after 1 cycle
      const arc = { startLat, startLng, endLat, endLng };
      setArcsData(curArcsData => [...curArcsData, arc]);
      setTimeout(() => setArcsData(curArcsData => curArcsData.filter(d => d !== arc)), FLIGHT_TIME * 2);

      // add and remove start rings
      const srcRing = { lat: startLat, lng: startLng };
      setRingsData(curRingsData => [...curRingsData, srcRing]);
      setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== srcRing)), FLIGHT_TIME * ARC_REL_LEN);

      // add and remove target rings
      setTimeout(() => {
        const targetRing = { lat: endLat, lng: endLng };
        setRingsData(curRingsData => [...curRingsData, targetRing]);
        setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== targetRing)), FLIGHT_TIME * ARC_REL_LEN);
      }, FLIGHT_TIME);
  }, []);

  useEffect(() => {
      globalRef.current.pointOfView({lat: 20.5937, lng: 78.9629, altitude: 1.5}, 4000);
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Short Story</p>
              <p className="grid-subtext">
                  With around 3 years of experience, I have developed expertise in both frontend and backend development, building dynamic applications and smart home systems. 
                  My work includes creating microservices and integrating technologies such as AWS, Google Home, and Alexa Skills Kit to enhance system functionality and user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globalRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={latLogWorkLabel}
                onGlobeClick={emitArc}
                arcsData={arcsData}
                arcColor={() => 'darkOrange'}
                arcDashLength={ARC_REL_LEN}
                arcDashGap={2}
                arcDashInitialGap={1}
                arcDashAnimateTime={FLIGHT_TIME}
                arcsTransitionDuration={0}
                ringsData={ringsData}
                ringColor={() => t => `rgba(255,100,50,${1-t})`}
                ringMaxRadius={RINGS_MAX_R}
                ringPropagationSpeed={RING_PROPAGATION_SPEED}
                ringRepeatPeriod={FLIGHT_TIME * ARC_REL_LEN / NUM_RINGS}
              />
            </div>
            <div>
              <p className="grid-headtext">Communications & Locations</p>
              <p className="grid-subtext">I&apos;m based in Coimbatore, India and open to work Pan India.</p>
              <div className="copy-container p-4 mt-2" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="text-sm font-medium text-gray_gradient text-white">arunachalamnachiappan20@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
