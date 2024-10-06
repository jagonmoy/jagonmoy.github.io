import IndustryExperience from 'components/IndustryExperience';
import ResearchExperience from 'components/ResearchExperience';

function ExperiencePage() {
  return (
    <div className="flex flex-col gap-y-8">
      <IndustryExperience />
      <ResearchExperience />
    </div>
  );
}

export default ExperiencePage;
