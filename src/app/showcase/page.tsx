import LanguageProficiency from 'components/LanguageProficiency';
import Projects from 'components/Projects';
import TechnicalSkills from 'components/TechnicalSkills';

function ShowcasePage() {
  return (
    <div className="flex flex-col gap-y-8">
      <TechnicalSkills />
      <Projects />
      <LanguageProficiency />
    </div>
  );
}

export default ShowcasePage;
