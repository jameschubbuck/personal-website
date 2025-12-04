import { FancyButton } from "@/components/fancy-button";
import React from "react";

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function SocialButton({
  href,
  label,
  icon: Icon,
}: SocialButtonProps) {
  return (
    <FancyButton href={href} aria-label={label}>
      <span className="relative z-10 flex items-center gap-2">
        <Icon className="w-5 h-5" />
        <span className="leading-none duration-300 pt-0.5">{label}</span>
      </span>
    </FancyButton>
  );
}
