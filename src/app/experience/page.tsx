import IndustryExperience from 'components/IndustryExperience';
import MentorshipExperience from 'components/MentorshipExperience';
import ResearchExperience from 'components/ResearchExperience';

function ExperiencePage() {
  return (
    <div className="flex flex-col gap-y-8">
      <IndustryExperience />
      <ResearchExperience />
      <MentorshipExperience />
    </div>
  );
}

export default ExperiencePage;
