import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import {
  Typography,
  Box,
} from "@mui/material";

// import { useRef } from 'react';
// import { useInView } from 'framer-motion';

// import SpotlightBorder from "../GlowCard/GlowCard"
import SpotlightBorder from "../GlowCard/Glow8bitCard"

import ScrumbleHeading from "../ScrumbleHeading/ScrumbleHeading";



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

const education = [
  {
    role: "B.S. Computer Science",
    company: "Ss. Cyril and Methodius University",
    location: "Skopje",
    period: "Oct 2023 – Present",
    current: true,
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Data Science", "Advanced Programming"],
  },

];
const CLIP = `polygon(
  0px 8px, 2px 8px, 2px 2px, 8px 2px,
  8px 0px, calc(100% - 8px) 0px,
  calc(100% - 8px) 2px, calc(100% - 2px) 2px,
  calc(100% - 2px) 8px, 100% 8px,
  100% calc(100% - 8px), calc(100% - 2px) calc(100% - 8px),
  calc(100% - 2px) calc(100% - 2px), calc(100% - 8px) calc(100% - 2px),
  calc(100% - 8px) 100%, 8px 100%,
  8px calc(100% - 2px), 2px calc(100% - 2px),
  2px calc(100% - 8px), 0px calc(100% - 8px)
)`;
export default function WorkExperience() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (

    <Box className="font-kode z-5 fade-up fade-up-3" sx={{ maxWidth: 800, mx: "auto", py: 4, px: 2 }}>
      {/* <Typography className="z-10 glowTitle" variant="h5" sx={{ fontWeight: 600, color: "#f3f4f6" }} gutterBottom>
        Work Experience
      </Typography> */}

      <ScrumbleHeading text="Education"/>
      <Typography variant="body2" sx={{ mb: 3, color: "#6b7280" }}>
        {education.length} {education.length==1?'qualification':'qualifications'}
      </Typography>

      <Timeline position="right" sx={{ p: 0, m: 0 }}>
        {education.map((exp, index) => (
          <TimelineItem key={index} sx={{ "&:before": { display: "none" } }}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: COLORS.dot,
                  boxShadow: COLORS.dotGlow,
                  width: 12,
                  height: 12,
                  my: 1,
                  border: "none",
                  clipPath: CLIP,
                  animation: exp.current ? "pulse 2s ease-in-out infinite" : "none",
                  "@keyframes pulse": {
                    "0%, 100%": { boxShadow: "0 0 0 4px rgba(245,158,11,0.2)" },
                    "50%": { boxShadow: "0 0 0 8px rgba(245,158,11,0.05)" },
                  },
                }}
              />
              {index < education.length - 1 && (
                <TimelineConnector sx={{ bgcolor: COLORS.connector }} />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ pb: 3, pt: 0.5 }}>
              <SpotlightBorder obj={{
                      role: exp.role,
                      company: exp.company,
                      location: exp.location,
                      period: exp.period,
                      current: true,
                      coursework: exp.coursework
                    }}/>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>


    </Box>
  );
}
