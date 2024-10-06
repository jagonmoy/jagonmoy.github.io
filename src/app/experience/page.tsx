import IndustryExperience from 'components/IndustryExperience';
import ResearchExperience from 'components/ResearchExperience';

type ExperiencePageProps = {
  searchParams: {
    type: string;
  };
};

function ExperiencePage({ searchParams }: ExperiencePageProps) {
  const { type } = searchParams;

  return (
    <div className="flex flex-col gap-y-8">
      <IndustryExperience type={type} />
      <ResearchExperience type={type} />
    </div>
  );
}

export default ExperiencePage;
