import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FakeChatInputProps {
  currentChoice?: string;
  onSend?: () => void;
}

const FakeChatInput = ({ currentChoice, onSend }: FakeChatInputProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-card/80 border-t border-border">
      <div className="max-w-2xl mx-auto flex items-center gap-2 px-3 py-2">
        <AnimatePresence mode="wait">
          {currentChoice ? (
            <motion.button
              key={currentChoice}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              onClick={onSend}
              className="flex-1 flex items-center justify-between bg-secondary rounded-full px-4 py-2.5 text-sm text-secondary-foreground hover:bg-accent active:scale-[0.98] transition-all cursor-pointer text-left"
            >
              <span className="truncate">{currentChoice}</span>
              <Send className="w-4 h-4 text-primary shrink-0 ml-2" />
            </motion.button>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 bg-secondary rounded-full px-4 py-2.5 text-sm text-muted-foreground text-center"
            >
              End of conversation ✨
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FakeChatInput;
