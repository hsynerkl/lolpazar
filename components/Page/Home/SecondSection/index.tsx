import { useState } from "react";
import Cards from "./Partials/Cards";
import Topbar from "./Partials/Topbar";

const SecondSection = () => {
  const [region, setRegion] = useState(0);

  const handleRegion = (region: number) => {
    setRegion(region);
  };

  return (
    <section className="bg-[#1c1f2c] text-white py-20">
      <div className="container">
        <Topbar region={region} handleRegion={handleRegion} />
        <Cards region={region} />
      </div>
    </section>
  );
};

export default SecondSection;
