import Socials from "@/components/socials";
import Projects from "@/components/projects";
import TerminalAnimation from "@/components/terminal-animation";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-black font-sans gap-8 p-8 justify-center">
      <h1 className="text-4xl w-full max-w-[500px] text-justify after:content-[''] after:inline-block after:w-full">
        ABOUT (JAMES CHUBUCK)
      </h1>

      <div className="w-full max-w-[500px] flex flex-col gap-4">
        <TerminalAnimation />

        <div className="flex justify-between pt-10">
          <Socials />
          <Projects />
        </div>
      </div>
    </div>
  );
}
