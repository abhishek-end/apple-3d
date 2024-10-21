import React from "react";
import { highlightSlide } from "../constants";
// import Highlights from "./Highlights";

const VideoComponents = () => {
  return (
    <>
      <div className='flex items-center'>
        {highlightSlide.map((list, i) => (
          <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
              <div className='w-full h-full  flex-center bg-black rounded-3xl overflow-hidden '>
                <video id='video' playsInline={true} preload='auto' muted>
                  <source src={list.video} type='video/mp4' />
                </video>
              </div>
              <div className='absolute top-12 left-[5%] z-10'>
                {list.textLists.map((text) => (
                  <p key={text} className='md:text-2xl text-xl font-medium'>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoComponents;
