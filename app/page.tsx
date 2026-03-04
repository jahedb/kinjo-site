import Hero from "./components/sections/Hero";
import FeatureShowcase from "./components/sections/FeatureShowcase";
import Problem from "./components/sections/Problem";
import Features from "./components/sections/Features";
import Trust from "./components/sections/Trust";
import Founding from "./components/sections/Founding";
import Waitlist from "./components/sections/Waitlist";
import Communities from "./components/sections/Communities";
import Roadmap from "./components/sections/Roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
      <Problem />
      <Features />
      <Communities />
      <Trust />
      <Founding />
      <Roadmap />
      <Waitlist />
      
    </>
  );
}
