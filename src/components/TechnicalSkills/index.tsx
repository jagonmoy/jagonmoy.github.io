import data from 'data/data.json';
import CIcon from 'icons/C';
import CSSIcon from 'icons/CSS';
import DockerIcon from 'icons/Docker';
import ExpressJsIcon from 'icons/ExpressJs';
import GitIcon from 'icons/Git';
import GitHubIcon from 'icons/GitHub';
import HTMLIcon from 'icons/HTML';
import JavaScriptIcon from 'icons/JavaScript';
import JestIcon from 'icons/Jest';
import JupyterIcon from 'icons/Jupyter';
import LinuxIcon from 'icons/Linux';
import NestJsIcon from 'icons/NestJs';
import NextJsIcon from 'icons/NextJs';
import NodeJsIcon from 'icons/NodeJs';
import NumPyIcon from 'icons/NumPy';
import PandasIcon from 'icons/Pandas';
import PlaywrightIcon from 'icons/Playwright';
import PostGreSQLIcon from 'icons/PostGreSQL';
import PostmanIcon from 'icons/Postman';
import PythonIcon from 'icons/Python';
import ReactIcon from 'icons/React';
import ScikitLearnIcon from 'icons/Scikit-learn';
import SwaggerIcon from 'icons/Swagger';
import TailwindIcon from 'icons/Tailwind';
import TensorFlowIcon from 'icons/TensorFlow';
import TypeScriptIcon from 'icons/TypeScript';

function TechnicalSkills() {
  const { showcase } = data;
  const { technicalSkills } = showcase;

  const languages = [
    {
      icon: <JavaScriptIcon />,
      name: technicalSkills.languages.js,
    },
    {
      icon: <TypeScriptIcon />,
      name: technicalSkills.languages.ts,
    },
    {
      icon: <PythonIcon />,
      name: technicalSkills.languages.python,
    },
    {
      icon: <CIcon />,
      name: technicalSkills.languages.c,
    },
    {
      icon: <HTMLIcon />,
      name: technicalSkills.languages.html,
    },
    {
      icon: <CSSIcon />,
      name: technicalSkills.languages.css,
    },
  ];

  const frameworks = [
    {
      icon: <NextJsIcon />,
      name: technicalSkills.frameworks.next,
    },
    {
      icon: <ReactIcon />,
      name: technicalSkills.frameworks.react,
    },
    {
      icon: <NodeJsIcon />,
      name: technicalSkills.frameworks.node,
    },
    {
      icon: <NestJsIcon />,
      name: technicalSkills.frameworks.nest,
    },
    {
      icon: <ExpressJsIcon />,
      name: technicalSkills.frameworks.express,
    },
    {
      icon: <TailwindIcon />,
      name: technicalSkills.frameworks.tailwind,
    },
    {
      icon: <JestIcon />,
      name: technicalSkills.frameworks.jest,
    },
    {
      icon: <PlaywrightIcon />,
      name: technicalSkills.frameworks.playwright,
    },
    {
      icon: <PostGreSQLIcon />,
      name: technicalSkills.frameworks.postgres,
    },
  ];

  const developerTools = [
    {
      icon: <GitIcon />,
      name: technicalSkills.developerTools.git,
    },
    {
      icon: <GitHubIcon />,
      name: technicalSkills.developerTools.github,
    },
    {
      icon: <LinuxIcon />,
      name: technicalSkills.developerTools.linux,
    },
    {
      icon: <DockerIcon />,
      name: technicalSkills.developerTools.docker,
    },
    {
      icon: <SwaggerIcon />,
      name: technicalSkills.developerTools.swagger,
    },
    {
      icon: <PostmanIcon />,
      name: technicalSkills.developerTools.postman,
    },
    {
      icon: <JupyterIcon />,
      name: technicalSkills.developerTools.jupyter,
    },
  ];

  const mlTools = [
    {
      icon: <TensorFlowIcon />,
      name: technicalSkills.mlTools.tensorflow,
    },
    {
      icon: <NumPyIcon />,
      name: technicalSkills.mlTools.numpy,
    },
    {
      icon: <PandasIcon />,
      name: technicalSkills.mlTools.pandas,
    },
    {
      icon: <ScikitLearnIcon />,
      name: technicalSkills.mlTools.scikit,
    },
  ];

  return (
    <div
      tabIndex={0}
      id="technical-skills"
      className="relaive bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1 className="text-center font-bold text-gray-900 text-2xl lg:text-3xl">
        {technicalSkills.heading}
      </h1>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <span className="text-gray-900 font-bold text-lg lg:text-xl">
            {technicalSkills.languagesHeading}
          </span>
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {languages.map((language) => (
              <div key={language.name} className="flex flex-col items-center gap-y-1">
                <div className="items-center h-10 w-10">{language.icon}</div>
                <span className="text-gray-500 text-md lg:text-lg font-semibold">
                  {language.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <span className="text-gray-900 font-bold text-lg lg:text-xl">
            {technicalSkills.frameworksHeading}
          </span>
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {frameworks.map((framework) => (
              <div key={framework.name} className="flex flex-col items-center gap-y-1">
                <div className="items-center h-10 w-10">{framework.icon}</div>
                <span className="text-gray-500 text-md lg:text-lg font-semibold">
                  {framework.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <span className="text-gray-900 font-bold text-lg lg:text-xl">
            {technicalSkills.developerToolsHeading}
          </span>
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {developerTools.map((tools) => (
              <div key={tools.name} className="flex flex-col items-center gap-y-1">
                <div className="items-center h-10 w-10">{tools.icon}</div>
                <span className="text-gray-500 text-md lg:text-lg font-semibold">{tools.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <span className="text-gray-900 font-bold text-lg lg:text-xl">
            {technicalSkills.mlToolsHeading}
          </span>
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {mlTools.map((tools) => (
              <div key={tools.name} className="flex flex-col items-center gap-y-1">
                <div className="items-center h-10 w-10">{tools.icon}</div>
                <span className="text-gray-500 text-md lg:text-lg font-semibold">{tools.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
