import { useState } from "react";
import FirstForm from "./Partials/FirstForm";
import SecondaryForm from "./Partials/SecondaryForm";
import ThirdForm from "./Partials/ThirdForm";

const QuickBuy = () => {
  const [formState, setFormState] = useState({
    value: 0,
    region: "",
    blueEssence: "",
  });

  const handleRegion = (region: string, value: number) => {
    setFormState({ ...formState, region: region, value: value });
  };

  const handleBlueEssence = (blueEssence: string, value: number) => {
    setFormState({ ...formState, blueEssence: blueEssence, value: value });
  };

  const handleGoBack = () => {
    if (formState.value === 1)
      setFormState({
        ...formState,
        value: formState.value - 1,
        region: "",
      });
    else if (formState.value === 2)
      setFormState({
        ...formState,
        value: formState.value - 1,
        blueEssence: "",
      });
  };

  console.log(formState);

  return (
    <div className="bg-[#1c1f2c] rounded-xl overflow-hidden h-fit">
      <p className="bg-[#141721] text-white text-opacity-30 text-xs text-center py-1">
        Hızlı Satın Al
      </p>
      {formState.value === 0 && <FirstForm handleRegion={handleRegion} />}

      {formState.value === 1 && (
        <SecondaryForm
          handleGoBack={handleGoBack}
          handleBlueEssence={handleBlueEssence}
        />
      )}

      {formState.value === 2 && (
        <ThirdForm handleGoBack={handleGoBack} formState={formState} />
      )}
    </div>
  );
};

export default QuickBuy;
