import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { Canvas, useFrame } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
function Hero1() {
  const [isMobile, setIsMobile] = useState(false); // Initialize with false
  const [modelViewerLoaded, setModelViewerLoaded] = useState(true);
  useEffect( () => {
    if (modelViewerLoaded) {
      console.log("Loaded Sucessfully")
      gsap.to("model-viewer", {
        scrollTrigger: {
          trigger: "model-viewer",
          start: "top center",
          end: () => "+=" + document.querySelector("#mainPath").getBoundingClientRect().height,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to("#camera", {
              opacity: 1 - progress * 2,
              scale: 1 - progress,
              duration: 0.5,
            });
          },
        },
        immediateRender: true,
        attr: {
          'camera-orbit': '-30deg 80deg',
        },
        zIndex: 999,
        motionPath: {
          path: '#mainPath',
        },
      });
      // Parallax effect
      var title = document.getElementById('parallax-title');
      window.addEventListener('mousemove', function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        var newPositionX = -mouseX * 0.007; // Adjust the parallax effect as desired
        var newPositionY = -mouseY * 0.007; // Adjust the parallax effect as desired
        title.style.transform = 'translate(' + newPositionX + 'px, ' + newPositionY + 'px)';
      });
    }
  }, [modelViewerLoaded]);
  function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'white' : 'rgb(14, 165, 234)'} />
      </mesh>
    );
  }
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    // Call handleResize when the component mounts
    handleResize();
    // Add a resize event listener to update isMobile on window resize
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="banner relative mb-24">
        <div className="row align-items-end">
          <div className="col-lg-6 pt-100">
            <span className="text-sm-bold animate_animated animateflash animate_repeat-2">Hello Everyone!</span>
            <h1 className="color-gray-50 mt-20 mb-20 wow animate_animated animate_fadeInUp text-pink-300">AI
              <Typewriter

                options={{
                  wrapperClassName: "typewrite color-linear",
                  strings: ['Coming Soon', 'At', 'twenty-one'],
                  autoStart: true,
                  loop: true,
                }}
              />


            </h1>

            <div className="row">
              <div className="col-lg-9">
                <p className="text-base color-gray-600">
                  <div className="text-base color-gray-600">21AI Research  stands as a beacon of innovation in</div> 
                  <div className="text-base color-gray-600">the field of Artificial Intelligence and Machine </div> 
                  <div className="text-base color-gray-600">Learning, nestled in the vibrant business landscape </div> 
                  <div className="text-base color-gray-600">of Dubai, UAE. We are more than just a technology company </div> 
                  <div className="text-base color-gray-600">we are architects of transformative solutions, harnessing the limitless potential of AI and Machine Learning </div> 
                  <div className="text-base color-gray-600">to empower businesses with unprecedented intelligence.</div> 
                </p>
              </div>
            </div>
            <div className="box-subscriber mt-40 mb-50 wow animate_animated animate_fadeInUp">
              <div className="inner-subscriber bg-gray-800">
                <form className="d-flex">
                  <input className="input-sybscriber" type="text" placeholder="email address" />
                  <button className="btn btn-linear btn-arrow-right">Subscribe<i className="fi-rr-arrow-small-right" /></button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center py-5 px-1">
            <Canvas color={'#0F172A'} className=' animate_animated animateflash animate_repeat-2 w-auto vw-20'>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0.2, 2, 0]} />
              <Box position={[-4, 0, 0]} />
              <Box position={[4, 0, 0]} />
            </Canvas>


            <div className="shape-1">
              {/* teststart */}


              {/* testend */}
              <img src="assets/imgs/vrhero.png" id='parallax-title'
                style={{ width: '100%', height: 'auto' }} alt="Genz" />
              </div>
            {/* <div className="banner-2 shape-2"><img src="assets/imgs/page/homepage3/banner-2.jpg" alt="Genz" /></div> */}

            <div className="banner-img position-relative wow animate_animated animate_fadeInUp">
              <div className="pattern-1"><img src="assets/imgs/template/pattern-1.svg" alt="Genz"/></div>
              <div className="pattern-2"><img src="assets/imgs/template/pattern-2.svg" alt="Genz"/></div>
              <div className="pattern-3"><img src="assets/imgs/template/pattern-3.svg" alt="Genz"/></div>
              <div className="pattern-4"><img src="assets/imgs/template/pattern-4.svg" alt="Genz"/></div>
            </div>
            {!isMobile && (

            <model-viewer
              animation-name="spin" id="mymodelviewer"
              autoplay
              ar
              ar-modes="webxr scene-viewer quick-look"
              src="assets/imgs/dronepearl.glb"
              shadow-intensity="1"
              // style={{ width: '50%', height: '50%' }} // Adjust the scale as needed
              alt="drone"
              camera-orbit="35deg 110deg"
              exposure="0.6"
              shadow-softness="0.8"
            ></model-viewer>
            )}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" style={{ position: 'absolute' , width:"100px"}}>
              <path id="mainPath" d="M 427 -248 C -1236 -21 -575 348 -729 693" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
