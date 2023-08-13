import Summary from "./components/Summary";
import Technologies from "./components/Technologies";

const SummaryAndTechonologies = () => {
  return (
    <div className="md:w-1/2 lg:w-3/4 space-y-4">
      <Summary/>
      <Technologies/>
    </div>
  );
};

export default SummaryAndTechonologies;
