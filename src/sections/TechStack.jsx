import { useCallback, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Center, useTexture, Float } from '@react-three/drei';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../components/EmbalButtons'

const imagesUrls = [123, 4, 5, 6, 66, 7, 8, 9, 10, 11].map((url) => `slider/${url}.png`);
const options = { dragFree: true };
const slideCount = imagesUrls.length;
const slides =  Array.from(Array(slideCount).keys());

function HeaderText() {
  const useMatCap = useTexture('./assets/gold.png');
  return (
      <Float floatIntensity={1}>
        <Center position={[1.5, 1.5, -0.1]} rotation={[0, 0, 0]} scale={3}>
          <Text font="./fonts/Bebas.woff">
          TECH STACK
          <meshMatcapMaterial matcap={useMatCap} />
          </Text>
        </Center>
      </Float>
  )
}

export default function TechStack() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)
  }, [emblaApi, onScroll]);

  return <>
   <div className="absolute w-full flex relative">
      <Canvas>
        <HeaderText />
      </Canvas>
   </div>
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img src={imagesUrls[index]} alt={`Slide ${index + 1}`} className="embla__slide__number"/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  </>
}
