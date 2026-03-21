import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ChatHeader = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-card/80 border-b border-border"
    >
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            TSN
          </div>
          <div>
            <h1 className="text-sm font-semibold text-card-foreground">Thura Sitt Naing</h1>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="w-4 h-4 text-secondary-foreground" /> : <Moon className="w-4 h-4 text-secondary-foreground" />}
        </button>
      </div>
    </motion.header>
  );
};

export default ChatHeader;
