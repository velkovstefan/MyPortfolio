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
  Card,
  CardContent,
  Chip,
  Box,
} from "@mui/material";

import { useRef } from 'react';
import { useInView } from 'framer-motion';

// import SpotlightBorder from "../GlowCard/GlowCard"
import SpotlightBorder from "../GlowCard/Glow8bitCard"

import { TextScramble } from '../../../../components/motion-primitives/text-scramble';
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

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Google",
    location: "Mountain View, CA",
    period: "Jan 2022 – Present",
    current: true,
    description:
      "Led migration of core search UI to React 18, reduced bundle size by 40%, and mentored 4 junior engineers across two teams.",
    skills: ["React", "TypeScript", "GraphQL", "Web Perf"],
  },
  {
    role: "Frontend Engineer",
    company: "Meta",
    location: "Remote",
    period: "Mar 2019 – Dec 2021",
    description:
      "Built React components for Ads Manager. Worked on real-time performance dashboards serving 2M+ advertisers.",
    skills: ["React", "Redux", "Jest", "REST APIs"],
  },
  {
    role: "Junior Developer",
    company: "Startup XYZ",
    location: "New York, NY",
    period: "Jun 2017 – Feb 2019",
    description:
      "Developed and maintained client-facing features for a SaaS platform. First exposure to agile workflows and CI/CD pipelines.",
    skills: ["JavaScript", "Vue.js", "CSS", "Git"],
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
  
    <Box className="font-kode z-5" sx={{ maxWidth: 800, mx: "auto", py: 4, px: 2 }}>
      {/* <Typography className="z-10 glowTitle" variant="h5" sx={{ fontWeight: 600, color: "#f3f4f6" }} gutterBottom>
        Work Experience
      </Typography> */}
       
      <ScrumbleHeading text="Text Scrumble"/>
      <Typography variant="body2" sx={{ mb: 3, color: "#6b7280" }}>
        {experiences.length} positions · {experiences[experiences.length - 1].period.split(" ")[0]} – Present
      </Typography>

      <Timeline position="right" sx={{ p: 0, m: 0 }}>
        {experiences.map((exp, index) => (
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
              {index < experiences.length - 1 && (
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
                      description:
                        "Led migration of core search UI to React 18, reduced bundle size by 40%, and mentored 4 junior engineers across two teams.",
                      skills: ["React", "TypeScript", "GraphQL", "Web Perf"]
                    }}/>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    
      
    </Box>
  );
}