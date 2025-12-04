import Header from "@/components/header";
import Footer from "@/components/footer";
import Socials from "@/components/socials";
import Projects from "@/components/projects";
import TerminalAnimation from "@/components/terminal-animation";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-black bg-zinc-50">
      {/* Main content grows to take remaining space */}
      <div className="flex flex-col items-center flex-1 bg-zinc-50 dark:bg-black gap-8 p-8 justify-center w-full">
        <Header />
        <div className="w-full max-w-[500px] flex flex-col gap-4">
          <TerminalAnimation />
          <div className="flex justify-between pt-10">
            <Socials />
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
