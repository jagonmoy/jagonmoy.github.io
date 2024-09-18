import ProfileAndCover from "@/components/ProfileAndCover";
import SummaryAndTechonologies from "@/components/SummaryAndTechnologies";

const Home = () => {
  return (
    <div className="flex flex-col px-4 py-6 gap-y-8">
    {/* Left Column */}
    <ProfileAndCover />
    {/* Right Column */}
    <SummaryAndTechonologies />
  </div>
  )
}
export default Home; 
