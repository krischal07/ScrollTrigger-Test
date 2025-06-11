// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all"; 
// import React, { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const containerRef = useRef();
//   const text1Ref = useRef();
//   const text2Ref = useRef();
//   const containerRef2 = useRef();
  
//   const deignRef = useRef();
//   const containerRef3 = useRef();


//   const text =
//   "We see our clients as strategic partners. This means: In close cooperation, we are there for a wide range of marketing tasks. We implement our ideas and concepts seamlessly — everything from a single source. We are not satisfied with \"run-of-the-mill\". We challenge ourselves and others. This is how we guarantee high-quality and sustainable results.";
  
//   const words = text.split(" ").map((word, i) => (
//     <span key={i} className="inline-block opacity-20 mr-1">
//       {word}
//     </span>
//   ));


//   useGSAP(() => {
//     const textWidth = text1Ref.current.offsetWidth;

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

//     gsap.to(containerRef.current, {
//       y: "-50vh",
//       opacity: 0,
//       ease: "power1.in",
//       scrollTrigger: {
//         markers:true,
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 0.5,
//       },
//     });

//     // gsap.fromTo(
//     //   textRef.current,
//     //   { opacity: 0.2 },
//     //   {
//     //     opacity: 1,
//     //     ease: "power1.out",
//     //     scrollTrigger: {
//     //       trigger: textRef.current,
//     //       start: "top 80%", // when top of p hits 80% viewport height
//     //       end: "top 30%",   // fully visible by 30%
//     //       scrub: true,
//     //     },
//     //   }
//     // );
//     const spans = containerRef2.current.querySelectorAll("span");
//     gsap.to(spans, {
//       opacity: 1,
//       ease: "power1.out",
//       stagger: 0.2, // fade in each word one by one
//       scrollTrigger: {
//         trigger: containerRef2.current,
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true,
//       },
//     });

//     const deignRefAnim = gsap.to(deignRef.current, {
//       xPercent: -50,
//       ease: "linear",
//       repeat: -1,
//       duration: 20, // adjust speed here (higher = slower)
//     });

//     // Speen on Scroll
//   ScrollTrigger.create({
//     trigger: containerRef3.current,
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//     onUpdate: (self) => {
//       const progress = self.progress;
//       // Map progress 0-1 to duration 20 -> 5
//       const newDuration = 20 - (progress * 15);
//       deignRefAnim.duration(newDuration);
//     },
//   });

//      // Move green div up as we scroll
//     gsap.to(".green-section", {
//       y: "-100%",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "bottom bottom",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//   }, []);

  
//   return (
//     <div>
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
//       <div className="h-screen w-screen bg-zinc-900 flex items-center justify-center p-5">
//         {/* <div id="box1" className=" size-50 bg-amber-400 rounded-lg "></div> */}
//         <p className="text-white text-6xl" ref={containerRef2}>

//       {words} 
//         </p>
//       </div>
//       {/* <div className="h-screen w-screen bg-zinc-800 flex items-center justify-center p-5">
//         <p className="text-white text-6xl">Web Design-Development-Wireframe-SEO-UI/UX</p>
//       </div> */}

// <div ref={containerRef3} className="h-screen w-screen bg-zinc-800 flex items-center justify-center overflow-hidden p-5">
//       <div ref={deignRef} className="whitespace-nowrap flex">
//         <p
          
//           className="text-white text-9xl font-bold tracking-wider mr-16"
//         >
//          - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
//         </p>

//         <p className="text-white text-9xl font-bold tracking-wider mr-16">
//           - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
//         </p>
//       </div>
//     </div >
//       <div className="h-screen w-screen bg-green-800 green-section">

//       </div>
//     </div>
//   );
// };

// export default App;



import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef();
  const text1Ref = useRef();
  const text2Ref = useRef();
  const containerRef2 = useRef();
  const deignRef = useRef();
  const containerRef3 = useRef();

  const text =
    "We see our clients as strategic partners. This means: In close cooperation, we are there for a wide range of marketing tasks. We implement our ideas and concepts seamlessly — everything from a single source. We are not satisfied with 'run-of-the-mill'. We challenge ourselves and others. This is how we guarantee high-quality and sustainable results.";

  const words = text.split(" ").map((word, i) => (
    <span key={i} className="inline-block opacity-20 mr-1">
      {word}
    </span>
  ));

  useGSAP(() => {
    const textWidth = text1Ref.current.offsetWidth;

    // Overtake time with us marquee
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

    // Web Design section marquee
    const designMarquee = gsap.to(deignRef.current, {
      xPercent: -50,
      ease: "linear",
      repeat: -1,
      duration: 150,
    });

    // Speed up on scroll
    ScrollTrigger.create({
      trigger: containerRef3.current,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newDuration = 50 - (progress * 40);
        designMarquee.duration(newDuration);
      },
    });

    // Move green div up as we scroll
    gsap.to(".green-section", {
      y: "-100%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef3.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div>
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

      {/* Web Design marquee section */}
      <div
        ref={containerRef3}
        className="h-screen w-screen bg-zinc-800 flex items-center justify-center overflow-hidden p-5"
      >
        <div ref={deignRef} className="whitespace-nowrap flex">
          <p className="text-white text-9xl font-bold tracking-wider mr-16">
            - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
          </p>
          <p className="text-white text-9xl font-bold tracking-wider mr-16">
            - Web Design - Development - Wireframe - SEO - UI/UX &nbsp;
          </p>
        </div>
      </div>

      {/* Green Section */}
      <div className="h-screen w-screen bg-green-800 green-section"></div>
    </div>
  );
};

export default App;
