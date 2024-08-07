import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'

import Lights from './Lights'
import IPhone from './IPhone'
import { Suspense } from 'react'

import * as THREE from 'three'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full $ {index === 2} ? right-[-100%] : ''`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
      makeDefault
      ref={controlRef}
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.4}
      target={new THREE.Vector3(0, 0, 0)}
      onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      
      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>
        <Suspense fallback={<div>Loading</div>}>
          <IPhone
          scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
          item={item}
          size={size}
          />
        </Suspense>
      </group>
    </View>


  )
}

export default ModelView