import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import { ScrollTrigger } from "gsap/all";
import VideoComponents from "./VideoComponents";

gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      delay: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      delay: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        markers: true,
        stagger: 0.25,
      },
    });
  });
  return (
    <section
      id='highlights'
      className='w-screen overflow-hidden h-full common-padding bg-zinc '
    >
      <div className='screen-max-width '>
        <div className='w-full mb-12 md:flex justify-between items-center'>
          <h1 id='title' className='section-heading '>
            Get the highlights.
          </h1>
          <div className='flex flex-wrap items-end gap-5 '>
            <p className=' link  '>
              Watch the film <img src={watchImg} alt='' className='ml-2' />
            </p>
            <p className='link '>
              Watch the event
              <img src={rightImg} alt={"arrow"} className='ml-2' />
            </p>
          </div>
        </div>
        <VideoComponents />
      </div>
    </section>
  );
};

export default Highlights;
