'use client'
import { useState, useEffect, useRef } from "react"

export default function HomeBanner({data, localea}) {
  const [controlMuted, setControlMuted] = useState(false);
  const [initialMutedState, setInitialMutedState] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setControlMuted(!controlMuted);
    setInitialMutedState(!controlMuted);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Section is not visible, mute the video
          setControlMuted(false);
        } else {
          // Section is visible, restore to initial state
          setControlMuted(initialMutedState);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [initialMutedState]);

  return (
    <section ref={sectionRef} className="bg-[#fcfcfc]">
      <div className="max-w-full">
        <div className="flex justify-center items-center w-full h-full relative">
          {/* Video */}
          <div className="flex justify-center items-center w-full h-full z-0">
            <video
              autoPlay={true}
              playsInline={true}
              muted={!controlMuted}
              loop
              controls={false}
              preload="auto"
              className='object-contain aspect-video w-full h-full'
            >
              <source src='/th/Videos/banner.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Button */}
          <div className="flex justify-end items-end w-full h-full absolute top-0 z-[10]">
            <div className="sticky  bottom-[0px] right-[12px] sm:right-[24px] inline-block pb-[12px] sm:pb-[24px]">
              <input
                type="checkbox"
                id="checkboxInput"
                className="hidden"
                checked={controlMuted}
                onChange={handleToggle}
              />
              <label
                htmlFor="checkboxInput"
                className={`w-[50px] h-[50px] flex items-center justify-center bg-[#272727] rounded-full cursor-pointer transition-all duration-300 shadow-md hover:bg-[#3d3d3d] ${
                  controlMuted ? 'active:scale-70' : ''
                } overflow-hidden`}
              >
                <div className={`w-full h-full flex items-center justify-center z-10 transition-opacity duration-300 ${controlMuted ? 'opacity-0' : 'opacity-100'}`}>
                  <svg className="w-[24px] h-[24px] stroke-white stroke-[5]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M671-177q-11 7-22 13t-23 11q-15 7-30.5 0T574-176q-6-15 1.5-29.5T598-227q7-3 13-6.5t12-7.5L480-368v111q0 27-24.5 37.5T412-228L280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h88L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-93-93Zm89-304q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21.5-23t31.5 0q97 43 155 131t58 197q0 33-6 65.5T817-353q-8 22-24.5 27.5t-30.5.5q-14-5-22.5-18t-.5-30q11-26 16-52.5t5-55.5ZM591-623q33 21 51 63t18 80v10q0 5-1 10-2 13-14 17t-22-6l-51-51q-6-6-9-13.5t-3-15.5v-77q0-12 10.5-17.5t20.5.5Zm-201-59q-6-6-6-14t6-14l22-22q19-19 43.5-8.5T480-703v63q0 14-12 19t-22-5l-56-56Z"/>
                  </svg>
                </div>
                <div className={`absolute w-full h-full flex items-center justify-center z-20 transition-opacity duration-300 ${controlMuted ? 'opacity-100' : 'opacity-0'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed">
                    <path d="M760-481q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21.5-23t31.5 0q97 43 155 131.5T840-481q0 108-58 196.5T627-153q-16 7-31.5 0T574-176q-5-15 2-29.5t22-21.5q74-34 118-102.5T760-481ZM280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120l132-132q19-19 43.5-8.5T480-703v446q0 27-24.5 37.5T412-228L280-360Zm380-120q0 42-19 79.5T591-339q-10 6-20.5.5T560-356v-250q0-12 10.5-17.5t20.5.5q31 25 50 63t19 80Z"/>
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
