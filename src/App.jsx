// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React, { useRef } from "react";
// import SplitText from "./components/SplitText/SplitText";

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const containerRef = useRef();
//   const text1Ref = useRef();
//   const text2Ref = useRef();
//   const containerRef2 = useRef();
//   const deignRef = useRef();
//   const containerRef3 = useRef();

//   const text =
//     "We see our clients as strategic partners. This means: In close cooperation, we are there for a wide range of marketing tasks. We implement our ideas and concepts seamlessly — everything from a single source. We are not satisfied with 'run-of-the-mill'. We challenge ourselves and others. This is how we guarantee high-quality and sustainable results.";

//   const words = text.split(" ").map((word, i) => (
//     <span key={i} className="inline-block opacity-20 mr-1">
//       {word}
//     </span>
//   ));

//   useGSAP(() => {
//     const textWidth = text1Ref.current.offsetWidth;

//     // Overtake time with us marquee
//     gsap.to([text1Ref.current, text2Ref.current], {
//       x: `-=${textWidth}`,
//       duration: 10,
//       ease: "linear",
//       repeat: -1,
//       modifiers: {
//         x: (x) => {
//           const numX = parseFloat(x);
//           return (numX % -textWidth) + "px";
//         },
//       },
//     });

//     // Fade out black section on scroll
//     gsap.to(containerRef.current, {
//       y: "-50vh",
//       opacity: 0,
//       ease: "power1.in",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 0.5,
//       },
//     });

//     // Fade in text spans one by one
//     const spans = containerRef2.current.querySelectorAll("span");
//     gsap.to(spans, {
//       opacity: 1,
//       ease: "power1.out",
//       stagger: 0.2,
//       scrollTrigger: {
//         trigger: containerRef2.current,
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true,
//       },
//     });

//     // Web Design section marquee
//     const designMarquee = gsap.to(deignRef.current, {
//       xPercent: -50,
//       ease: "linear",
//       repeat: -1,
//       duration: 150,
//     });

//     // Speed up on scroll
//     ScrollTrigger.create({
//       trigger: containerRef3.current,
//       start: "top top",
//       end: "+=1500",
//       scrub: true,
//       pin: true,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const newDuration = 50 - progress * 40;
//         designMarquee.duration(newDuration);
//       },
//     });

//     // Move green div up as we scroll
//     gsap.to(".green-section", {
//       y: "-100%",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: containerRef3.current,
//         start: "top 80%",
//         end: "top 20%",
//         scrub: 1,
//       },
//     });

//     // Add a pin for the green section to maintain proper stacking
//     ScrollTrigger.create({
//       trigger: ".green-section",
//       pin: true,
//       start: "top top",
//       end: "bottom top",
//       pinSpacing: false,
//     });

//     const boxes = gsap.utils.toArray(".box");

  
//     gsap.from(boxes, {
//       opacity: 0,
//       y: 50,
//       scale: 0.8,
//       duration: 0.5,
//       stagger: 0.1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".green-section",
//         start: "top 80%", // when top of green-section hits 80% viewport height
//         toggleActions: "play none none reset",
//       },
//     });
//   }, []);

//   return (
//     <div className="min-h-screen">
//       {/* Black section */}
//       <div
//         ref={containerRef}
//         className="h-screen w-screen bg-black flex items-end overflow-hidden"
//       >
//         <div
//           ref={text1Ref}
//           className="text-white text-[145px] font-bold whitespace-nowrap flex"
//         >
//           <span>Overtake time with</span>
//           <span className="ml-12">us</span>
//           <span className="ml-32"></span>
//         </div>
//         <div
//           ref={text2Ref}
//           className="text-white text-[145px] font-bold whitespace-nowrap flex"
//         >
//           <span>Overtake time with</span>
//           <span className="ml-12">us</span>
//           <span className="ml-32"></span>
//         </div>
//       </div>

//       {/* Text fade section */}
//       <div className="h-screen w-screen bg-zinc-900 flex items-center justify-center p-5">
//         <p className="text-white text-6xl" ref={containerRef2}>
//           {words}
//         </p>
//       </div>

//       {/* Web Design marquee section */}
//       <div
//         ref={containerRef3}
//         className="h-screen w-screen bg-zinc-800 flex items-center justify-center overflow-hidden p-5"
//       >
//         <div ref={deignRef} className="whitespace-nowrap flex">
//           <p className="text-white text-9xl font-bold tracking-wider mr-16">
//             - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
//           </p>
//           <p className="text-white text-9xl font-bold tracking-wider mr-16">
//             - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
//           </p>
//         </div>
//       </div>

//       {/* Green Section */}
//       <div className="h-screen w-screen bg-green-800 green-section p-4 flex flex-col items-center gap-5 border-box relative z-10">
//         <p className="text-white text-6xl">This is a green section</p>

//         <div className="grid grid-cols-4 gap-4">

//         <div id="box2" className="box size-50 bg-emerald-400 rounded-lg "></div>
//         <div id="box2" className="box size-50 bg-black rounded-lg "></div>
//         <div id="box2" className="box size-50 bg-yellow-400 rounded-lg "></div>
//         <div id="box2" className="box size-50 bg-blue-400 rounded-lg "></div>

//         <div id="box2" className="box size-50 bg-black rounded-lg "></div>
//         <div id="box2" className="box size-50 bg-emerald-400 rounded-lg "></div>
//         <div id="box2" className="box size-50 bg-blue-400 rounded-lg "></div>
//         <div id="box2" className="box size-50 bg-yellow-400 rounded-lg "></div>
//         </div>
//       </div>

//       <div className="h-screen w-screen bg-zinc-900 flex flex-col items-center justify-center">
//         <SplitText text="Latest News for now" className="text-white text-6xl"/>
//       </div>

//     </div>
//   );
// };

// export default App;




import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import SplitText from "./components/SplitText/SplitText";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef();
  const text1Ref = useRef();
  const text2Ref = useRef();
  const containerRef2 = useRef();
  const designRef = useRef();
  const containerRef3 = useRef();
  const greenSectionRef = useRef();

  const text =
    "We see our clients as strategic partners. This means: In close cooperation, we are there for a wide range of marketing tasks. We implement our ideas and concepts seamlessly — everything from a single source. We are not satisfied with 'run-of-the-mill'. We challenge ourselves and others. This is how we guarantee high-quality and sustainable results.";

  const words = text.split(" ").map((word, i) => (
    <span key={i} className="inline-block opacity-20 mr-1">
      {word}
    </span>
  ));

  useGSAP(() => {
    const textWidth = text1Ref.current.offsetWidth;

    // Overtake time marquee
    gsap.to([text1Ref.current, text2Ref.current], {
      x: `-=${textWidth}`,
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const numX = parseFloat(x);
          return (numX % -textWidth) + "px";
        },
      },
    });

    // Fade out black section on scroll
    gsap.to(containerRef.current, {
      y: "-50vh",
      opacity: 0,
      ease: "power1.in",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // Fade in text spans one by one
    const spans = containerRef2.current.querySelectorAll("span");
    gsap.to(spans, {
      opacity: 1,
      ease: "power1.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef2.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    // Web Design marquee section
    const designMarquee = gsap.to(designRef.current, {
      xPercent: -50,
      ease: "linear",
      repeat: -1,
      duration: 150,
    });

    // Speed up marquee on scroll
    ScrollTrigger.create({
      trigger: containerRef3.current,
      start: "top top",
      end: "+=1500",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newDuration = 50 - (progress * 40);
        designMarquee.duration(newDuration);
      },
    });

    // Move green section up on scroll
    gsap.to(greenSectionRef.current, {
      y: "-100%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: greenSectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    // Animate boxes inside green section
    const boxes = gsap.utils.toArray(".box");
    gsap.from(boxes, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: greenSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Black section */}
      <div
        ref={containerRef}
        className="h-screen w-screen bg-black flex items-end overflow-hidden"
      >
        <div
          ref={text1Ref}
          className="text-white text-[145px] font-bold whitespace-nowrap flex"
        >
          <span>Overtake time with</span>
          <span className="ml-12">us</span>
          <span className="ml-32"></span>
        </div>
        <div
          ref={text2Ref}
          className="text-white text-[145px] font-bold whitespace-nowrap flex"
        >
          <span>Overtake time with</span>
          <span className="ml-12">us</span>
          <span className="ml-32"></span>
        </div>
      </div>

      {/* Text fade section */}
      <div className="h-screen w-screen bg-zinc-900 flex items-center justify-center p-5">
        <p className="text-white text-6xl" ref={containerRef2}>
          {words}
        </p>
      </div>

      {/* Web Design marquee */}
      <div
        ref={containerRef3}
        className="h-screen w-screen bg-zinc-800 flex items-center justify-center overflow-hidden p-5"
      >
        <div ref={designRef} className="whitespace-nowrap flex">
          <p className="text-white text-9xl font-bold tracking-wider mr-16">
            - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
          </p>
          <p className="text-white text-9xl font-bold tracking-wider mr-16">
            - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
          </p>
        </div>
      </div>

      {/* Green Section */}
      <div
        ref={greenSectionRef}
        className="h-screen w-screen bg-green-800 p-4 flex flex-col items-center gap-5 border-box relative z-10 green-section"
      >
        <p className="text-white text-6xl">This is a green section</p>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className={`box size-50 rounded-lg ${
                index % 4 === 0
                  ? "bg-emerald-400"
                  : index % 4 === 1
                  ? "bg-black"
                  : index % 4 === 2
                  ? "bg-yellow-400"
                  : "bg-blue-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* SplitText Section */}
      <div className="h-screen w-screen bg-zinc-900 flex flex-col items-center justify-center">
        <SplitText text="Latest News for now" className="text-white text-6xl" />
      </div>
    </div>
  );
};

export default App;
