import Hero from "./components/sections/Hero";
import FeatureShowcase from "./components/sections/FeatureShowcase";
import Problem from "./components/sections/Problem";
import Features from "./components/sections/Features";
import Trust from "./components/sections/Trust";
import Founding from "./components/sections/Founding";
import Waitlist from "./components/sections/Waitlist";
import Communities from "./components/sections/Communities";
import Roadmap from "./components/sections/Roadmap";
import SuburbLeaderboard from "./components/sections/SuburbLeaderboard";
import ClaimEntity from "./components/sections/ClaimEntity";
import Security from "./components/sections/Security";
import SectionGlow from "./components/ui/SectionGlow";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionGlow />
      <FeatureShowcase />
      <SectionGlow />
      <Problem />
      <SectionGlow />
      <Features />
      <SectionGlow />
      <Communities />
      <SectionGlow />
      <Trust />
      <SectionGlow />
      <SuburbLeaderboard />
      <SectionGlow />
      <Founding />
      <SectionGlow />
      <ClaimEntity
          id="claim-club"
          title="Claim your club"
          label="Club Founding"
          entityName="Club"
          apiRoute="/api/claim-suburb"
          background="bg-white"
          formLeft
      />
      <SectionGlow />
      <ClaimEntity
        id="claim-organisation"
        title="Claim your Organisation"
        label="Organisation Leader"
        entityName="Organisation"
        apiRoute="/api/claim-suburb"
        background="bg-[#F0F4EC]"
      />
      <SectionGlow />
      <Roadmap />
      <SectionGlow />
      <Waitlist />
      <SectionGlow />
      <Security />
      <SectionGlow />
      
    </>
  );
}
