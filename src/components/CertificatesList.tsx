import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2026",
    detail: "Professional-level certification covering distributed systems, scalability, and cloud architecture best practices.",
  },
  {
    name: "AWS Basic Crash Course",
    issuer: "KodeKloud",
    date: "2026",
    detail: "Basic crash course covering AWS services, architecture, and best practices.",
  },
  {
    name: "MIT PHP Bootcamp",
    issuer: "MIT",
    date: "2024",
    detail: "PHP bootcamp covering core concepts, web development, and database management.",
  }
];

interface CertificatesListProps {
  delay?: number;
}

const CertificatesList = ({ delay = 0 }: CertificatesListProps) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex justify-start mb-3"
    >
      <div className="max-w-[85%] sm:max-w-[75%] w-full ios-card-lg overflow-hidden divide-y divide-border">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 * i }}
            className="cursor-pointer"
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-accent/50 transition-colors">
              <Award className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-card-foreground truncate">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                  expanded === i ? "rotate-180" : ""
                }`}
              />
            </div>
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-3.5 text-xs text-muted-foreground leading-relaxed pl-12">
                    {cert.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificatesList;
