import { useState } from "react";

const QuickBuy = () => {
  const [region, setRegion] = useState();

  return (
    <div className="bg-[#1c1f2c] rounded-xl overflow-hidden">
      <div className="bg-[#141721] text-white text-opacity-30">
        <p className="text-xs text-center py-1">Hızlı Satın Al</p>
      </div>
    </div>
  );
};

export default QuickBuy;
