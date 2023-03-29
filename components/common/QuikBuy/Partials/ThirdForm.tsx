import { FC, useEffect, useState } from "react";
import Image from "next/image";

type ThirdFormProps = {
  handleGoBack: () => void;
  formState: {
    value: number;
    region: string;
    blueEssence: string;
    price: number;
  };
};

const ThirdForm: FC<ThirdFormProps> = ({ handleGoBack, formState }) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (formState.region === "euw") {
      if (formState.blueEssence === "40.000") {
        setImgSrc(
          "https://turbosmurfs.gg/storage/products/c20f5275b11127a02eac1ba75ef3a3e2.jpg"
        );
      } else if (formState.blueEssence === "50.000") {
        setImgSrc(
          "https://turbosmurfs.gg/storage/products/c20f5275b11127a02eac1ba75ef3a3e2.jpg"
        );
      } else if (formState.blueEssence === "60.000") {
        setImgSrc(
          "https://turbosmurfs.gg/storage/products/c20f5275b11127a02eac1ba75ef3a3e2.jpg"
        );
      }
    } else {
      if (formState.blueEssence === "40.000") {
        setImgSrc(
          "https://turbosmurfs.gg/storage/products/e0ae212a474f6f082d616f707cb67efd.jpg"
        );
      } else if (formState.blueEssence === "50.000") {
        setImgSrc(
          "https://turbosmurfs.gg/storage/products/98833fc161eec943040ddeec465c6d38.jpg"
        );
      } else if (formState.blueEssence === "60.000") {
        setImgSrc(
          "https://turbosmurfs.gg/storage/products/b1421c9718f272d7c43d1cbe00c21427.jpg"
        );
      }
    }
  }, [formState]);

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
          <div
            className={`h-[233px] w-[256px] relative rounded-xl overflow-hidden ml-5 ${
              !imgSrc && "flex justify-center items-center"
            }`}
          >
            {imgSrc ? (
              <Image src={imgSrc} alt="summary" fill />
            ) : (
              <div className="w-14 h-14 rounded-full animate-spin border border-dotted border-[#6f7d95]"></div>
            )}
          </div>

          <div className="mr-5 flex flex-col gap-2">
            <p className="text-center">Hesap Detayları</p>

            <div className="flex justify-between">
              <p className="text-[#6f7d95]">Mavi Öz</p>
              <div className="flex items-center">
                <p> {formState.blueEssence} </p>
                <div className="h-4 w-4 relative">
                  <Image
                    src="https://i.imgur.com/qNrFYqp.png"
                    alt="blueessence"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6f7d95]">Bölge</p>
              <p> {formState.region === "euw" ? "Avrupa Batı" : "Türkiye"} </p>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6f7d95]">Garanti</p>
              <p> 30 Gün </p>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6f7d95]">Ücret</p>
              <p> {formState.price}₺ </p>
            </div>
          </div>
        </div>
        <p className="mt-5 px-2 rounded-md font-bold py-1 text-xs bg-[#2f264f] text-[#7239EA]">
          Ücretsiz Teklifler
        </p>
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
