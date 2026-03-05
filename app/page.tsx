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
import ClaimClub from "./components/sections/.ClaimClub";
import ClaimOrganisation from "./components/sections/.ClaimOrganisation";
import ClaimEntity from "./components/sections/ClaimEntity";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
      <Problem />
      <Features />
      <Communities />
      <Trust />
      <SuburbLeaderboard />
      <Founding />
      <ClaimEntity
        id="claim-club"
        title="Claim your Club"
        label="Club Founder"
        entityName="Club"
        apiRoute="/api/claim-club"
        background="bg-[#344E41]"
        formLeft
      />
      <ClaimEntity
        id="claim-organisation"
        title="Claim your Organisation"
        label="Organisation Leader"
        entityName="Organisation"
        apiRoute="/api/claim-organisation"
        background="bg-[#F0F4EC]"
      />
      <Roadmap />
      <Waitlist />
      
    </>
  );
}
