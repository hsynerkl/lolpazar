import { FC } from "react";
import Image from "next/image";

type SecondaryFormProps = {
  handleGoBack: () => void;
  handleBlueEssence: (blueEssence: string, value: number) => void;
};

const SecondaryForm: FC<SecondaryFormProps> = ({
  handleGoBack,
  handleBlueEssence,
}) => {
  return (
    <div className="opening-anim">
      <div className="flex flex-col items-center py-6">
        <p className="pb-6 text-lg">
          <span className="text-transparent bg-gradient-to-r from-[#CC75FF] bg-clip-text to-[#34D5FB] font-semibold">
            Mavi Öz
          </span>{" "}
          Miktarı Seçiniz
        </p>

        <div className="grid grid-cols-3 mx-4 gap-3">
          <div
            className="flex gap-2 flex-col items-center bg-[#131721] px-4 py-3 rounded-xl cursor-pointer hover:scale-105 duration-300 transition"
            onClick={() => {
              handleBlueEssence("40.000", 2);
            }}
          >
            <div className="flex ">
              <Image
                src="https://i.imgur.com/qNrFYqp.png"
                width={30}
                height={25}
                alt="blue-essence"
              />
              <p className="font-bold">40,000</p>
            </div>
            <p className="text-xs text-white text-center text-opacity-30">
              <span className="text-[#3fbdf9]">14.99₺</span>'den başlayan
              fiyatlarla.
            </p>
          </div>

          <div
            className="flex gap-2 flex-col items-center bg-[#131721] px-4 py-3 rounded-xl cursor-pointer hover:scale-105 duration-300 transition"
            onClick={() => {
              handleBlueEssence("50.000", 2);
            }}
          >
            <div className="flex">
              <Image
                src="https://i.imgur.com/qNrFYqp.png"
                width={30}
                height={25}
                alt="blue-essence"
              />
              <p className="font-bold">50,000</p>
            </div>
            <p className="text-xs text-center text-white text-opacity-30">
              <span className="text-[#3fbdf9]">24.99₺</span>'den başlayan
              fiyatlarla.
            </p>
          </div>

          <div
            className="flex gap-2 flex-col items-center bg-[#131721] px-4 py-3 rounded-xl cursor-pointer hover:scale-105 duration-300 transition"
            onClick={() => {
              handleBlueEssence("60.000", 2);
            }}
          >
            <div className="flex">
              <Image
                src="https://i.imgur.com/qNrFYqp.png"
                width={30}
                height={25}
                alt="blue-essence"
              />
              <p className="font-bold">60,000</p>
            </div>
            <p className="text-xs text-center text-white text-opacity-30">
              <span className="text-[#3fbdf9]">34.99₺</span>'den başlayan
              fiyatlarla.
            </p>
          </div>
        </div>
      </div>
      <div
        className="m-6 rounded-full flex items-center gap-1 bg-[#43b6f9] w-fit px-3 text-xs py-2 hover:opacity-80 cursor-pointer transition duration-300"
        onClick={handleGoBack}
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-white"
        >
          <path d="M34 256 210 80l21.21 21.2L91.4 241H478v30H91.4l139.85 139.84L210 432Z" />
        </svg>
        Geri dön
      </div>
    </div>
  );
};

export default SecondaryForm;
