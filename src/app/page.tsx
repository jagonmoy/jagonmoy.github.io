import ProfileAndCover from "@/components/ProfileAndCover";
import Summary from "@/components/Summary";

const Home = () => {
  return (
    <div className="flex flex-col px-4 py-6 gap-y-8">
    <ProfileAndCover />
    <Summary />
  </div>
  )
}
export default Home; 
