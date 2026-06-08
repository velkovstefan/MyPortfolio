import { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import colorMap from './ColorMap.json'
import projectData from './Projects.json'

import {
  Typography,
  Chip,
  Box,
  GlobalStyles,
} from "@mui/material";
import ScrumbleHeading from "../../ScrumbleHeading/ScrumbleHeading";

const COLORS = {
  accent: "#f59e0b",
  accentOrange: "#ea580c",
  dot: "#f59e0b",
  cardBg: "#14141abd",
  cardBorder: "rgba(245,158,11,0.2)",
  cardBorderHover: "rgba(245,158,11,0.55)",
  cardGlow: "0 0 24px rgba(245,158,11,0.15)",
  cardGlowHover: "0 0 32px rgba(245,158,11,0.35)",
  dotGlow: "0 0 0 4px rgba(245,158,11,0.2)",
  chipBg: "rgba(245,158,11,0.1)",
  chipText: "#fbbf24",
  connector: "rgba(245,158,11,0.25)",
};

const getChipColors = (tech: string) => {
  const key = tech.toLowerCase() as keyof typeof colorMap
  const result = colorMap[key] ?? { bg: COLORS.chipBg, fg: COLORS.chipText }
  return result
}

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [shimmerProject, setShimmerProject] = useState<string | null>(null)

  const handleToggle = (name: string) => {
    setActiveProject(prev => {
      const opening = prev !== name
      if (opening) {
        setShimmerProject(name)
        // Duration of the "Atari" scan
        setTimeout(() => setShimmerProject(null), 600)
      }
      return opening ? name : null
    })
  }

  // const projectData = ;

  return (
    <>
      <GlobalStyles styles={{
        "@keyframes atariScan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        }
      }} />

      <Box className="flex-column gap-5 font-kode" sx={{ maxWidth: 800, mx: "auto", py: 4, px: 2 }}>
        <ScrumbleHeading text="Projects"/>
        <Typography variant="body2" sx={{ mb: 3, color: "#6b7280" }}>
                {projectData.length} projects 
        </Typography>
        {projectData.map((proj) => {
          const isActive = activeProject === proj.name
          const isShimmering = shimmerProject === proj.name

          return (
            <Box
              key={proj.name}
              className="font-kode flex"
              sx={{
                p: 2,
                bgcolor: proj.bgcolor,
                color: "white",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden", // Keep the shimmer inside the box
              }}
            >
              {/* ATARI STYLE SHIMMER — Triggers once on open */}
              {isShimmering && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: .7,
                    zIndex: 10,
                    pointerEvents: "none",
                    background: `linear-gradient(90deg, 
                      transparent 0%, 
                      rgba(255, 255, 255, 0) 40%, 
                      ${COLORS.accent} 45%, 
                      #fff 50%, 
                      ${COLORS.accent} 55%, 
                      rgba(255, 255, 255, 0) 60%, 
                      transparent 100%)`,
                    animation: "atariScan .6s linear forwards",
                  }}
                />
              )}

              <Box
                sx={{
                  display: "flex",
                  gap: 2.5,
                  position: "relative",
                }}
              >
                <ButtonComponent image={proj.image} />

                <div className="z-5 group relative overflow-hidden p-[2px] flex-1">
                  <div className="relative h-full font-kode">
                    <Box
                      className="h-full"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "normal",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        <Typography
                          variant="subtitle1"
                          className="font-mono"
                          sx={{ fontWeight: 600, color: "#f3f4f6" }}
                        >
                          {proj.name}
                        </Typography>

                        <Box
                          onClick={() => handleToggle(proj.name)}
                          sx={{
                            fontFamily: '"Press Start 2P", monospace',
                            fontSize: "10px",
                            color: COLORS.accent,
                            border: `1px solid ${COLORS.cardBorder}`,
                            px: 1,
                            py: 0.5,
                            cursor: "pointer",
                            userSelect: "none",
                            letterSpacing: "0.05em",
                            transition: "all 0.15s",
                            flexShrink: 0,
                            "&:hover": {
                              bgcolor: COLORS.accent,
                              color: "#000",
                              boxShadow: `0 0 10px ${COLORS.accent}`,
                            },
                          }}
                        >
                          {isActive ? "▲ CLOSE" : "▼ INFO"}
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                        {proj.technologies.map((tech) => {
                          const { bg, fg } = getChipColors(tech)
                          return (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                fontSize: 11,
                                height: 22,
                                borderRadius: 0,
                                bgcolor: `${bg}`,
                                color: fg,
                                border: `1px solid rgba(245,158,11,0.2)`,
                              }}
                            />
                          )
                        })}
                      </Box>
                    </Box>
                  </div>
                </div>
              </Box>

              <Box
  
                sx={{
                  // marginTop: "30px",
                  maxHeight: isActive ? "1000px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
                  opacity: isActive ? 1 : 0,
                  
                }}
              >
                <Box sx={{
                  borderTop: isActive ? `1px solid ${COLORS.cardBorder}` : "1px solid transparent",
                  marginTop: "30px"
                }}><Typography
                  sx={{
                    fontFamily: '"VT323", monospace',
                    fontSize: 15,
                    color: "#c8922a",
                    lineHeight: 1.6,
                    pt: 1.5,
                    letterSpacing: "0.03em",
                  }}
                >
                  {proj.description}
                </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
    </>
  );
}