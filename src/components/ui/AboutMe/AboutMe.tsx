"use client"

import { useRef } from 'react';
import {
  Typography,
  CardContent,
  Box,
} from "@mui/material";

const COLORS = {
  accent: "#f59e0b",
  chipBg: "rgba(245,158,11,0.1)",
  chipText: "#fbbf24",
  smokeHeading: "#afafaf",
  smokeText: "#999999"
};

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


export default function SpotlightBorder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || !spotlightRef.current) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.left = `${x}px`;
    spotlightRef.current.style.top = `${y}px`;
  };

  return (

    <Box className="font-kode z-5" sx={{ maxWidth: 800, mx: "auto", mb:4, py: 4, px: 2 }}>


        <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="z-5 group relative overflow-hidden bg-zinc-700/30 p-[2px]"
        style={{ clipPath: CLIP, }}
        >
        {/* Spotlight blob */}
        <div
            ref={spotlightRef}
            style={{
            backgroundColor: COLORS.accent
            }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px] blur-3xl opacity-0 group-hover:opacity-80 transition-opacity"
        />

        {/* Inner card */}
        <div
            className="relative h-full w-full bg-black font-kode"
            style={{ clipPath: CLIP }}
        >
            <CardContent className='p-y-5' sx={{
                paddingX:4
            }}>
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 1,
                mb: 1,
                width: "100%",
                flexDirection:'column'
                }}
            >
                {/* <Box></Box> */}
                <Typography
                    variant="h5"
                    className="font-mono"
                    sx={{ fontWeight: 600, color: COLORS.smokeHeading, textAlign: 'center', justifySelf:'center', alignSelf:'center'}}
                >
                About Me
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: COLORS.accent,justifySelf:'center', alignSelf:'center' }}
                >
                Computer Science · Software Engineer
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, color: COLORS.smokeText, textAlign:"justify" }}
                >
                Computer Science student at FINKI, Ss. Cyril and Methodius University, with hands-on experience in full-stack development, machine learning, and AI research.  Contributor to Vezilka, a national AI project focused on fine-tuning and evaluating large language models for the Macedonian language. Capable of building from start to production-ready applications using modern technologies and CI/CD pipelines. Passionate about building reliable, high-performance software at scale.
                </Typography>
            </Box>

            
            </CardContent>
        </div>
        </div>
    </Box>
  );
}