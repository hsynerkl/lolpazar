import { FC } from "react";
import Image from "next/image";

type ThirdFormProps = {
  handleGoBack: () => void;
  formState: {
    value: number;
    region: string;
    blueEssence: string;
  };
};

const ThirdForm: FC<ThirdFormProps> = ({ handleGoBack, formState }) => {
  console.log(formState);

  return (
    <div className="opening-anim">
      <div className="flex flex-col items-center py-6">
        <p className="text-transparent text-lg bg-gradient-to-r from-[#CC75FF] bg-clip-text to-[#34D5FB] font-semibold">
          Özetiniz
        </p>
        <p className="text-xs text-[#6f7d95] pb-10">
          Sıralama yolculuğunuzda size bol şans diliyoruz.
        </p>

        <div className="grid grid-cols-2 gap-10">
          <Image
            src="https://turbosmurfs.gg/storage/products/b1421c9718f272d7c43d1cbe00c21427.jpg"
            alt="summary"
            className="ml-5"
            width={256}
            height={233}
          />
          <div>
            <p className="text-center">Hesap Detayları</p>
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

export default ThirdForm;
