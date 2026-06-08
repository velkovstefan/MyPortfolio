"use client"

import { useRef } from 'react';
import {
  Typography,
  CardContent,
  Chip,
  Box,
} from "@mui/material";

const COLORS = {
  accent: "#f59e0b",
  chipBg: "rgba(245,158,11,0.1)",
  chipText: "#fbbf24",
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

interface SpotlightBorderProps {
  obj: {
    role: string;
    company: string;
    location: string;
    period: string;
    current: boolean;
    description: string;
    skills: string[];
  };
}

export default function SpotlightBorder({ obj }: SpotlightBorderProps) {
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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="z-5 group relative overflow-hidden bg-zinc-700/30 p-[2px]"
      style={{ clipPath: CLIP }}
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
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 1,
              mb: 1,
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                className="font-mono"
                sx={{ fontWeight: 600, color: "#f3f4f6" }}
              >
                {obj.role}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: COLORS.accent }}
              >
                {obj.company} · {obj.location}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {obj.current && (
                <Chip
                  label="Present"
                  size="small"
                  sx={{
                    fontSize: 10,
                    height: 20,
                    bgcolor: "rgba(245,158,11,0.15)",
                    color: COLORS.chipText,
                    border: `1px solid rgba(245,158,11,0.4)`,
                    borderRadius: 0,
                    animation: "glow 2s ease-in-out infinite",
                    "@keyframes glow": {
                      "0%, 100%": { boxShadow: "0 0 4px rgba(245,158,11,0.3)" },
                      "50%": { boxShadow: "0 0 12px rgba(245,158,11,0.6)" },
                    },
                  }}
                />
              )}
              <Chip
                label={obj.period}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: 11,
                  height: 24,
                  color: "#9ca3af",
                  borderColor: "rgba(76, 81, 88, 0.3)",
                  borderRadius: 0,
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {obj.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  fontSize: 11,
                  height: 22,
                  borderRadius: 0,
                  bgcolor: COLORS.chipBg,
                  color: COLORS.chipText,
                  border: `1px solid rgba(245,158,11,0.2)`,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </div>
    </div>
  );
}