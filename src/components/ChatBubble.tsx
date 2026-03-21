import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChatBubbleProps {
  children: ReactNode;
  side?: "left" | "right";
  delay?: number;
  className?: string;
  id?: string;
}

const ChatBubble = ({ children, side = "left", delay = 0, className = "", id }: ChatBubbleProps) => {
  const isRight = side === "right";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex ${isRight ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 text-[15px] leading-relaxed ${
          isRight
            ? "bg-bubble-sent text-bubble-sent-foreground rounded-2xl rounded-br-md"
            : "bg-bubble-received text-bubble-received-foreground rounded-2xl rounded-bl-md"
        } ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default ChatBubble;
