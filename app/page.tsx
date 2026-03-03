import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Features from "./components/sections/Features";
import Trust from "./components/sections/Trust";
import Founding from "./components/sections/Founding";
import Waitlist from "./components/sections/Waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <Trust />
      <Founding />
      <Waitlist />
    </>
  );
}
