import AboutMe from 'components/AboutMe';
import CP from 'components/CP';
import Education from 'components/Education';
import IndustryExperience from 'components/IndustryExperience';
import LanguageProficiency from 'components/LanguageProficiency';
import MentorshipExperience from 'components/MentorshipExperience';
import Projects from 'components/Projects';
import ResearchExperience from 'components/ResearchExperience';
import TechnicalSkills from 'components/TechnicalSkills';
import VolunteeringExperience from 'components/VolunteeringExperience';

function Home() {
  return (
    <div className="flex flex-col gap-y-12">
      <AboutMe />
      <Education />
      <IndustryExperience />
      <ResearchExperience />
      <MentorshipExperience />
      <VolunteeringExperience />
      <TechnicalSkills />
      <Projects />
      <CP />
      <LanguageProficiency />
    </div>
  );
}
export default Home;
