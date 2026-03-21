import ChatHeader from "@/components/ChatHeader";
import ChatBubble from "@/components/ChatBubble";
import SocialLinks from "@/components/SocialLinks";
import CertificatesList from "@/components/CertificatesList";
import WorkTimeline from "@/components/WorkTimeline";
import FakeChatInput from "@/components/FakeChatInput";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

const SectionLabel = ({ children, id }: { children: string; id?: string }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex justify-center my-4"
  >
    <button
      onClick={() => {
        if (id) {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full hover:bg-accent transition-colors cursor-pointer"
    >
      {children}
    </button>
  </motion.div>
);

const choices = [
  { label: "What's your tech stack?", section: "tech" },
  { label: "How can I reach you?", section: "links" },
  { label: "Show me your achievements 🏆", section: "certificates" },
  { label: "Previously your work experiences", section: "experience" },
  { label: "Impressive! Let's connect 🤝", section: "connect" },
];

const Index = () => {
  const [step, setStep] = useState(0); // 0 = only intro shown, waiting for first choice
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  }, []);

  const handleChoice = (choiceIndex: number) => {
    if (choiceIndex === step) {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [step, scrollToBottom]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ChatHeader />

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6 pb-24">
        {/* Introduction - always visible */}
        <SectionLabel id="intro">Today</SectionLabel>

        <ChatBubble side="left" delay={0.3}>
          <p className="font-semibold text-base">Hey there! 👋</p>
        </ChatBubble>

        <ChatBubble side="left" delay={0.8}>
          <p>
            I'm <strong>Thura Sitt Naing</strong>, a web developer based in Myanmar
          </p>
        </ChatBubble>

        {/* Step 0: User sends "What's your tech stack?" */}
        {step >= 1 && (
          <>
            <ChatBubble side="right" delay={0}>
              <p>{choices[0].label}</p>
            </ChatBubble>

            <ChatBubble side="left" delay={0.3} id="tech">
              <p>Here are some of the technologies I use:</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["PHP", "Laravel","CodeIgniter", "React", "Node.js", "Tailwind", "TypeScript","Express","MySQL","MongoDB", "AWS", "Docker", "Linux","Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-bubble-sent-foreground/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ChatBubble>
          </>
        )}

        {/* Step 1: User sends "How can I reach you?" */}
        {step >= 2 && (
          <>
            <ChatBubble side="right" delay={0}>
              <p>{choices[1].label}</p>
            </ChatBubble>

            <SectionLabel id="links">Links</SectionLabel>
            <SocialLinks delay={0.2} />
          </>
        )}

        {/* Step 2: User sends "Show me your achievements" */}
        {step >= 3 && (
          <>
            <ChatBubble side="right" delay={0}>
              <p>{choices[2].label}</p>
            </ChatBubble>

            <SectionLabel id="certificates">Certificates</SectionLabel>

            <ChatBubble side="left" delay={0.2}>
              <p>Here are some of my certifications 🏆</p>
            </ChatBubble>

            <CertificatesList delay={0.3} />
          </>
        )}

        {/* Step 3: User sends "Previously your work experiences" */}
        {step >= 4 && (
          <>
            <ChatBubble side="right" delay={0}>
              <p>{choices[3].label}</p>
            </ChatBubble>

            <SectionLabel id="experience">Experience</SectionLabel>

            <ChatBubble side="left" delay={0.2}>
              <p>And here's my journey so far 🚀</p>
            </ChatBubble>

            <WorkTimeline delay={0.3} />
          </>
        )}

        {/* Step 4: User sends "Impressive! Let's connect" */}
        {step >= 5 && (
          <>
            <ChatBubble side="right" delay={0}>
              <p>{choices[4].label}</p>
            </ChatBubble>

            <ChatBubble side="left" delay={0.3}>
              <p>Absolutely! Feel free to reach out anytime. I'm always open to new opportunities and collaborations. ✨</p>
            </ChatBubble>
          </>
        )}

        <div ref={bottomRef} />
      </main>

      <FakeChatInput
        currentChoice={step < choices.length ? choices[step].label : undefined}
        onSend={() => handleChoice(step)}
      />
    </div>
  );
};

export default Index;
