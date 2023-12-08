import Globe from "react-globe.gl";
import { useEffect, useRef, useState   } from "react";
import * as THREE from "three";

// import sky from '../../../public/textures/clouds.png'


export const GlobeComponent = () => {
  const globeEl = useRef<any>(); 
  const lat = 45.616669;
  const lng = 63.316666;
  const [globeSize, setGlobeSize] = useState({ width: 700, height: 700 });
  
  useEffect(() => {

    const handleResize = () => {
      const newWidth = window.innerWidth <= 700 ? 320 : 700;
      const newHeight = window.innerWidth <= 700 ? 320 : 700;
      setGlobeSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener("resize", handleResize);

    handleResize(); 

    const globe = globeEl?.current;

    if (globe) {
    
        globe.controls().enableZoom = false;
    
        globe.controls().enableRotate = true;
      }
    

    const CLOUDS_IMG_URL = "/textures/clouds.png";
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.04;
    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe?.getGlobeRadius()! * (1.04 + CLOUDS_ALT), 
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe?.scene().add(clouds);
      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, [globeEl]);

  useEffect(() => {
    const baikonur = { lat: 25.616669, lng: 83.316666, altitude: 2 };
    globeEl?.current?.pointOfView(baikonur);

    
  }, [globeEl]);

  const globeData = [
    {
      lat: lat,
      lng: lng,
      size: 1,
      color: "white",
      title: "Baikonur",
    },
  ];

  return (
    <div >
      <Globe
        ref={globeEl}
        showGlobe={true}
        animateIn={true}
        // backgroundColor={"red"}
        backgroundColor={"#f0f8ff00"}
        width={globeSize.width}
        height={globeSize.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        waitForGlobeReady={true}
        labelsData={globeData}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => `${d.title}`}
        labelSize={(d: any) => 0.4 + d.size}
        labelDotRadius={(d: any) => 0.5 + d.size}
        labelColor={(d: any) => d.color}
        labelResolution={2}
        enablePointerInteraction={true}
      />
    </div>
  );
};
