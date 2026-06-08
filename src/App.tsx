import { useState, useEffect,useRef } from 'react'
import { cn } from "./lib/utils";
import { Spotlight } from "./components/ui/spotlight";
import  TimelineComponent from "./components/ui/TimelineComponent/TimelineComponent"
import AboutMe from './components/ui/AboutMe/AboutMe'

import Projects from './components/ui/Projects/Projects'
import './App.css'
import { ChatModal } from './components/ui/ChatModal/ChatModal';
import Logo from './components/ui/Logo/Logo';
import ProjectGrid from './components/ui/ProjectComponents/ProjectGrid/ProjectGrid';




function App() {
  const [count, setCount] = useState(0)
  const [isFocused, setIsFocused] = useState(false);

   const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1. Add 'isolate' to the wrapper to prevent negative z-index from slipping behind the black webpage background */}
<div className="relative w-full flex-col gap-6 overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center min-h-[100vh] isolate">
  
  {/* 2. Add 'z-0' or 'z-[-1]' here to force the grid layout completely beneath your text elements */}
  <div
    className={cn(
      "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none z-0",
      "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
    )}
  />

  <Spotlight
    className="-top-40 left-0 md:-top-20 md:left-60"
    fill="white"
  />
  
  {/* 3. Your content stays clean at z-10 */}
  <div className="relative z-10 mx-auto w-full max-w-xl p-4 pt-20 md:pt-0">
    <Logo/>
    {isSticky && (
      <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 px-4 animate-in slide-in-from-bottom duration-300">
          {/* <ChatModal /> */}
      </div>
    )}
  </div>
  
  <div ref={ref} className="relative z-10">   
    <ChatModal />
  </div>
  
  {/* Wrap remaining elements in a relative z-10 container if needed */}
  <div className="relative z-10">
    <AboutMe/>
    <TimelineComponent/>
    <ProjectGrid/>
  </div>
</div>

    

{/* 
      <div className="ticks"></div>
      <section id="spacer">
      <div style={{position:'relative'}}>
        <Projects/>
      </div>
      </section> */}
      
      
    </>
  )
}

export default App
