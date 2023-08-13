import ProfileAndBio from "./components/ProfileAndBio";
import SummaryAndTechonologies from "./components/SummaryAndTechnologies";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-6">
  {/* Left Column */}
  <ProfileAndBio />
  {/* Right Column */}
  <SummaryAndTechonologies />
</div>
  );
};

export default Introduction;
