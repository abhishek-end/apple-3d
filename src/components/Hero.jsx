import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [video, setVideo] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSize = () => {
    window.innerWidth < 760 ? setVideo(smallHeroVideo) : setVideo(heroVideo);
  };
  useEffect(() => {
    // handleVideoSize();
    window.addEventListener("resize", handleVideoSize);
    //clean up fnc
    return () => {
      window.removeEventListener("resize", handleVideoSize);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>
          iPhone 15 pro
        </p>
        <div className='md:w-10/12 w-9/12 pointer-events-none'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={video}
          >
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
      <div
        id='cta'
        className='flex flex-col items-center opacity-0
       translate-y-20 '
      >
        <a href='#highlights' className='btn text-white'>
          Buy
        </a>
        <p className='text-white z-10 font-normal text-xl'>
          From ₹5,600/month or ₹125000
        </p>
      </div>
    </section>
  );
};

export default Hero;
