import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "SecureLink Co.,Ltd",
    role: "Web Developer",
    duration: "2024 – Present",
    responsibilities: [
      "Developed Certificate Issuing Systems",
      "Integration with Certificate Authority (CA) for issuing certificates.",
    ],
  },
  {
    company: "Linn IT Solution Co.,Ltd",
    role: "Web Developer",
    duration: "2022 – 2024",
    responsibilities: [
      "Developed Billing Systems & Payment Gateway Implementation.",
      "Developed Radius Management System for network administrators",
      "Developed movie streaming platform for entertainment",
      "API Development for movie streaming platform",
      "m3u8 encryption api for CDN streaming platform",
    ],
  },
  {
    company: "CreateTech Team (Freelance)",
    role: "Business Analyst & Developer",
    duration: "2021 – Present",
    responsibilities: [
      "Delivered client projects on time",
      "Maintained the codebase and enhanced features",
    ],
  },
  {
    company: "MandalarSoft",
    role: "Internship OJT",
    duration: "2021 – 2021",
    responsibilities: [
      "Worked on a variety of projects, including e-commerce websites and portfolio sites",
      "Gained hands-on experience with frontend technologies such as HTML, CSS, PHP, and JavaScript",
      "Collaborated with other students to complete projects on time",
    ],
  },
];

interface WorkTimelineProps {
  delay?: number;
}

const WorkTimeline = ({ delay = 0 }: WorkTimelineProps) => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex justify-start mb-3"
    >
      <div className="max-w-[85%] sm:max-w-[75%] w-full">
        <div className="relative pl-6">
          {/* Timeline line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.15 * i }}
              className="relative mb-1 last:mb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-6 top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                expanded === i ? "bg-primary border-primary" : "bg-card border-border"
              }`}>
                <Briefcase className={`w-2.5 h-2.5 ${expanded === i ? "text-primary-foreground" : "text-muted-foreground"}`} />
              </div>

              <div
                className="ios-card px-4 py-3 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">{exp.duration}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                        expanded === i ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-2 space-y-1"
                    >
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {r}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkTimeline;
