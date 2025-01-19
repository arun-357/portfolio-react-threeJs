import * as THREE from 'three';
import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll, Text, Center, useTexture, Float } from '@react-three/drei';
import { proxy, useSnapshot } from 'valtio';
import { easing } from 'maath';

const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])
const state = proxy({
  clicked: null,
  urls: [123, 4, 5, 6, 66, 7, 8].map((u) => `slider/${u}.png`)
})

function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
      easing.damp(child.scale, 'y', 0.3 + y / 3, 0.15, delta)
    })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} />
      ))}
    </group>
  )
}

// eslint-disable-next-line react/prop-types
function Item({ index, position, scale, ...props }) {
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const click = () => (state.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    ref.current.material.scale[0] = ref.current.scale.x
    ref.current.material.scale[1] = ref.current.scale.y
    easing.damp(ref.current.material, 'grayscale', hovered ? 0 : Math.max(0, 1 - y), 0.15, delta)
    easing.dampC(ref.current.material.color, hovered ? 'white' : '#aaa', hovered ? 0.3 : 0.15, delta)
  })
  return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} />
}

// eslint-disable-next-line react/prop-types
function Items({ w = 2, gap = 0.15 }) {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  const totalPages = (width - xW + urls.length * xW) / width;

  return (
    <ScrollControls horizontal damping={0.9} pages={totalPages}>
      <Minimap />
      <Scroll>
        {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */}
      </Scroll>
    </ScrollControls>
  )
}

function HeaderText() {
  const useMatCap = useTexture('./assets/gold.png');
  return (
    <Float floatIntensity={1}>
    <Center position={[0.2, 2.8, -0.1]} rotation={[0, 0, 0]} scale={0.4}>
      <Text font="./fonts/Bebas.woff">
        TECH STACK
        <meshMatcapMaterial matcap={useMatCap} />
      </Text>
    </Center>
    </Float>
  )
}

export default function TechStack() {
  return (
    <section className="absolute min-h-screen w-full flex flex-col relative">
      <div className='w-full h-full absolute inset-0 flex'>
        <Suspense fallback={null}>
          <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
            <HeaderText />
            <Items />
          </Canvas>
        </Suspense>
      </div>
    </section>
  )
}
