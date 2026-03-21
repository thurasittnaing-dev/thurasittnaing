import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, Download } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/thurasittnaing-dev", color: "text-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/thura-sittnaing/", color: "text-primary" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/thurasittnaing.me/", color: "text-primary" },
  { icon: Mail, label: "Email", href: "mailto:thurasittnaing.personal@gmail.com", color: "text-destructive" },
];

interface SocialLinksProps {
  delay?: number;
}

const SocialLinks = ({ delay = 0 }: SocialLinksProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex justify-start mb-3"
    >
      <div className="max-w-[85%] sm:max-w-[75%] w-full space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.1 * i }}
              className="ios-card flex items-center gap-3 px-4 py-3 hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
            >
              <link.icon className={`w-5 h-5 ${link.color}`} />
              <span className="text-sm font-medium text-card-foreground">{link.label}</span>
            </motion.a>
          ))}
        </div>
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.5 }}
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground rounded-2xl px-4 py-3.5 font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Download CV
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SocialLinks;
