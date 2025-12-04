import { AnchorHTMLAttributes, ReactNode } from "react";

interface FancyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function FancyButton({ children, ...props }: FancyButtonProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="group select-none relative inline-flex items-center overflow-hidden h-10 px-2 pr-4 text-foreground transition-colors duration-300 ease-out hover:text-background rounded-l-md"
      style={{ transitionDelay: "0.2s" }}
      {...props}
    >
      <span
        className="absolute inset-0 -translate-x-full bg-foreground transition-transform duration-150 ease-out group-hover:translate-x-0 rounded-l-md"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)",
          transitionDelay: "0.2s",
        }}
      />
      {children}
    </a>
  );
}
