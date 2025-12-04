import SocialButton from "@/components/social-button";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

export default function Socials() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h2 className="text-2xl underline text-center">CONNECT</h2>
      <div className="flex flex-col gap-4 items-center">
        <SocialButton
          href="https://www.linkedin.com/in/jameschubbuck/"
          label="LinkedIn"
          icon={Linkedin}
        />
        <SocialButton
          href="https://github.com/jameschubbuck"
          label="GitHub"
          icon={Github}
        />
        <SocialButton
          href="mailto:contact@jameschubbuck.com"
          label="Email"
          icon={Mail}
        />
      </div>
    </div>
  );
}
