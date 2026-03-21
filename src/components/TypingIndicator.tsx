import { motion } from "framer-motion";

interface TypingIndicatorProps {
  delay?: number;
  duration?: number;
}

const TypingIndicator = ({ delay = 0, duration = 1.5 }: TypingIndicatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: duration + 0.5, delay, times: [0, 0.1, 0.8, 1] }}
      className="flex justify-start mb-3"
    >
      <div className="bg-bubble-received rounded-2xl rounded-bl-md px-5 py-3.5 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-muted-foreground/50"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 1,
              delay: delay + i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
