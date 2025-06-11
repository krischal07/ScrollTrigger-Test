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

  const text =
  "We see our clients as strategic partners. This means: In close cooperation, we are there for a wide range of marketing tasks. We implement our ideas and concepts seamlessly — everything from a single source. We are not satisfied with \"run-of-the-mill\". We challenge ourselves and others. This is how we guarantee high-quality and sustainable results.";
  
  const words = text.split(" ").map((word, i) => (
    <span key={i} className="inline-block opacity-20 mr-1">
      {word}
    </span>
  ));


  useGSAP(() => {
    const textWidth = text1Ref.current.offsetWidth;

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

    gsap.to(containerRef.current, {
      y: "-50vh",
      opacity: 0,
      ease: "power1.in",
      scrollTrigger: {
        markers:true,
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // gsap.fromTo(
    //   textRef.current,
    //   { opacity: 0.2 },
    //   {
    //     opacity: 1,
    //     ease: "power1.out",
    //     scrollTrigger: {
    //       trigger: textRef.current,
    //       start: "top 80%", // when top of p hits 80% viewport height
    //       end: "top 30%",   // fully visible by 30%
    //       scrub: true,
    //     },
    //   }
    // );
    const spans = containerRef2.current.querySelectorAll("span");
    gsap.to(spans, {
      opacity: 1,
      ease: "power1.out",
      stagger: 0.2, // fade in each word one by one
      scrollTrigger: {
        trigger: containerRef2.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);
  return (
    <div>
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
      <div className="h-screen w-screen bg-zinc-900 flex items-center justify-center p-5">
        {/* <div id="box1" className=" size-50 bg-amber-400 rounded-lg "></div> */}
        <p className="text-white text-6xl" ref={containerRef2}>

      {words} 
        </p>
      </div>
      <div className="h-screen w-screen bg-zinc-800">
        <div id="box2" className=" size-50 bg-emerald-400 rounded-lg "></div>
      </div>
      <div className="h-screen w-screen bg-black"></div>
    </div>
  );
};

export default App;
