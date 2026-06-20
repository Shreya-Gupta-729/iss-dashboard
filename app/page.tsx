"use client";

import React from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import { useState } from "react";


const orbitron = Orbitron({
  subsets: ["latin"],
});



export default function Page()
{
  const [darkMode, setDarkMode] = useState(true);

  return(
    
    <div  className={
        darkMode
            ? "bg-slate-950 text-white min-h-screen"
            : "bg-white text-[#06030f] min-h-screen"
    }>
  
    <div id ="header" className="flex justify-between items-center px-5 pt-10 pb-10 bg-gradient-to-b from-blue-500/30 to transparent relative z-30">
      
    <h1 className={`${orbitron.className} text-5xl font-bold`}> ISS Telemetry Dashboard 🌏</h1>
    <button onClick={() => setDarkMode(!darkMode)} className={`${orbitron.className} border rounded-lg px-4 py-2 text-2xl transition delay-150 hover:bg-blue-500`}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <a href="./login" className={`${orbitron.className} text-2xl border rounded-lg px-5 py-2 bg-black-500 transition delay-150 duration-300 ease-in-out  hover:bg-blue-500`}>Login</a>
    </div>
    <div id = "body" className="flex  flex items-center justify-center pt-5 pb-20">

    <div id="stars" className="absolute inset-0 overflow-hidden inset-0">
        {Array.from({ length: 50 }).map((_, index) => {
            const size = Math.random() * 4 + 1; 

               return (
                <div key={index}
                     className="absolute bg-[#00ffff] rounded-full animate-pulse"
                     style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.8 + 0.2,
                        boxShadow: `0 0 ${size * 4}px rgba(0, 255, 255, 0.8)`,
                    }}
                ></div>
                      );
         })}
     </div>
    <div id="body-right" className="flex items-center justify-center w-1/2">
      <div className="relative w-100 h-100 flex items-center justify-center">
        <div className=" drop-shadow-[0_0_9px_rgba(128,128,128,0.9)]">
          <Image
                  src="/Earth.png"
                  alt="Earth"
                  width={150}
                  height={150}
    />
        </div>
        <div className="absolute w-full h-full animate-spin [animation-duration:8s]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2  drop-shadow-[0_0_9px_rgba(128,128,128,0.9)]">
              <Image
                  src="/iss.png"
                  alt="International Space Station"
                  width={70}
                  height={70}
    />
          </div>
        </div>

      </div>
    </div>
    <div id = "body-left" className={`${orbitron.className} text-2xl flex-col justify-center-safe items-center px-20 py-30 w-200 z-10`}>
      <h1 className="py-10">Explore the path followed by ISS with our telemetry app</h1>
      <a href = "./login" className=" text-1xl justify-center-safe border rounded lg px-5 py-3 bg-black-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500">Get Started</a>
    </div>
    
    </div>

    <div className={`${orbitron.className} pb-50`}>
      <h1 className={`${orbitron.className} py-20 text-3xl justify-center-safe pl-105 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent`}>Why choose our dashboard?</h1>
      <div className="flex pt-30 pl-30">
        <div className="pr-15">
         <div className={ darkMode? `${orbitron.className} border rounded lg px-10 w-80 transition delay-150 hover:bg-white hover:text-[#06030f] ease-in-out hover:-translate-y-1`: `${orbitron.className} border rounded bg-blue-500/40 lg px-10 w-80 transition delay-150 hover:bg-[#06030f] hover:text-white ease-in-out hover:-translate-y-1`}>
            <h1 className="py-5 font-bold">Live Tracking 📍</h1>
            <p className="pb-5">Watch the International Space Station orbit Earth in real time with continuously updated coordinates</p>
         </div>
        </div>
       <div className="pr-15">
         <div className={ darkMode? `${orbitron.className} border rounded lg px-10 w-80 transition delay-150 hover:bg-white hover:text-[#06030f] ease-in-out hover:-translate-y-1`: `${orbitron.className} border rounded bg-blue-500/40 lg px-10 w-80 transition delay-150 hover:bg-[#06030f] hover:text-white ease-in-out hover:-translate-y-1`}>
            <h1 className="py-5 font-bold">Live Tracking 📍</h1>
            <p className="pb-5">Watch the International Space Station orbit Earth in real time with continuously updated coordinates</p>
         </div>
        </div>
       <div className="pr-15">
         <div className={ darkMode? `${orbitron.className} border rounded lg px-10 w-80 transition delay-150 hover:bg-white hover:text-[#06030f] ease-in-out hover:-translate-y-1`: `${orbitron.className} border rounded bg-blue-500/40 lg px-10 w-80 transition delay-150 hover:bg-[#06030f] hover:text-white ease-in-out hover:-translate-y-1`}>
            <h1 className="py-5 font-bold">Live Tracking 📍</h1>
            <p className="pb-5">Watch the International Space Station orbit Earth in real time with continuously updated coordinates</p>
         </div>
        </div>
      </div>
    </div>
    <div id = "footer" className="pt-30 pb-10 pl-5 bg-gradient-to-b from-transparent to-blue-500/40">
      Telemetry Dashboard
        <p className="flex-col">
        Built using
        Next.js
        React
        Tailwind CSS
        Leaflet
        </p>

© 2026
    </div>
    </div>
  );

}