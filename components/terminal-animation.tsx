import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";

const TerminalAnimation = () => (
  <Terminal className="min-h-[200px]">
    <TypingAnimation delay={1} duration={80}>
      $ whoami
    </TypingAnimation>
    <AnimatedSpan delay={1000}>james.chubbuck</AnimatedSpan>
    <TypingAnimation delay={1200} duration={60}>
      $ !$ --verbose
    </TypingAnimation>
    <AnimatedSpan delay={2300}>
      Inspiring engineer @ Stanford University. Reputedly
    </AnimatedSpan>
    <AnimatedSpan delay={2400}>
      competent programmer and avid open source enthusiast.
    </AnimatedSpan>
  </Terminal>
);

export default TerminalAnimation;
