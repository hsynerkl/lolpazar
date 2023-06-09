import { useState } from "react";
import FirstForm from "./Partials/FirstForm";
import SecondaryForm from "./Partials/SecondaryForm";
import ThirdForm from "./Partials/ThirdForm";

const QuickBuy = () => {
  const [formState, setFormState] = useState({
    value: 0,
    region: "",
    blueEssence: "",
    price: 0,
  });

  const handleRegion = (region: string, value: number) => {
    setFormState({ ...formState, region: region, value: value });
  };

  const handleBlueEssence = (
    blueEssence: string,
    value: number,
    price: number
  ) => {
    setFormState({
      ...formState,
      blueEssence: blueEssence,
      value: value,
      price: price,
    });
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
        price: 0,
      });
  };

  return (
    <div className="bg-[#1c1f2c] rounded-xl overflow-hidden h-fit">
      <p className="bg-[#141721] text-[#6f7d95] text-xs font-semibold text-center py-1">
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
