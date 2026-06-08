
import { useRef } from 'react';
import {
  Typography,
  CardContent,
  Chip,
  Box,
} from "@mui/material";

const CLIP = `polygon(
  0px 8px, 4px 8px, 4px 4px, 8px 4px,
  8px 0px, calc(100% - 8px) 0px,
  calc(100% - 8px) 4px, calc(100% - 4px) 4px,
  calc(100% - 4px) 8px, 100% 8px,
  100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px),
  calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px),
  calc(100% - 8px) 100%, 8px 100%,
  8px calc(100% - 4px), 4px calc(100% - 4px),
  4px calc(100% - 8px), 0px calc(100% - 8px)
)`;


export default function ButtonComponent({ image }: { image: string }){
    return(
                <div
                // ref={containerRef}
                // onMouseMove={handleMouseMove}
                className="z-5 group relative overflow-hidden bg-zinc-900/40 p-[5px] font-kode z-2"
                style={{ clipPath: CLIP, width:80, height:80}}
                >
                {/* Spotlight blob */}
                <div
                    // ref={spotlightRef}
                    // style={{
                    // backgroundColor: COLORS.accent
                    // }}
                    className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px] blur-3xl opacity-0 group-hover:opacity-80 transition-opacity"
                />
        
                {/* Inner card */}
                <div
                    className="relative p-1 h-full w-full bg-black font-kode "
                    style={{ clipPath: CLIP, display:'flex', justifyContent:'center', alignItems:'center'}}
                >
                    
                        <img src={`/public/images/${image}`} alt="project logo" style={{
                            width:"100%"
                        }}/>

                </div>
                </div>
    );
}