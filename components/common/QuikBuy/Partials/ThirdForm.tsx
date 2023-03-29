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
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    if (quantity === 99) return;
    setQuantity((prev) => prev + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

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
            <p className="text-center font-semibold">Hesap Detayları</p>

            <div className="flex justify-between">
              <p className="text-[#6f7d95] font-semibold">Mavi Öz</p>
              <div className="flex items-center">
                <p className="font-semibold"> {formState.blueEssence} </p>
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
              <p className="text-[#6f7d95] font-semibold">Bölge</p>
              <p className="font-semibold">
                {formState.region === "euw" ? "Avrupa Batı" : "Türkiye"}{" "}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6f7d95] font-semibold">Garanti</p>
              <p className="font-semibold"> Ömür Boyu </p>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6f7d95] font-semibold">Ücret</p>
              <p className="font-semibold"> {formState.price}₺ </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between m-6">
        <div
          className="rounded-full flex items-center gap-1 font-semibold bg-[#43b6f9] w-fit px-3 text-xs py-2 hover:opacity-80 cursor-pointer transition duration-300"
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

        <div className="flex bg-[#2f303d] items-center ">
          <div
            className="cursor-pointer p-2 border group border-[#6f7d95] h-full flex items-center transition-colors duration-300 hover:bg-[#43b6f9]"
            onClick={handleDecrementQuantity}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-[#43b6f9] group-hover:stroke-white transition-colors duration-300"
            >
              <path d="M19 12H5" strokeWidth={2} />
            </svg>
          </div>

          <div className="py-2 px-4 border-b border-b-[#6f7d95] border-t border-t-[#6f7d95]">
            {quantity}
          </div>

          <div
            className="cursor-pointer p-2 border border-[#6f7d95] h-full flex items-center group transition-colors duration-300 hover:bg-[#43b6f9]"
            onClick={handleIncrementQuantity}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-[#43b6f9] group-hover:stroke-white transition-colors duration-300"
            >
              <path d="M5 12h14m-7-7v14" strokeWidth={2} />
            </svg>
          </div>
        </div>

        <div
          className="rounded-full flex items-center gap-1 font-semibold bg-[#43b6f9] w-fit px-3 text-xs py-2 hover:opacity-80 cursor-pointer transition duration-300"
          onClick={handleGoBack}
        >
          Devam Et (
          {(formState.price * quantity)
            .toFixed(2)
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
          ₺)
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-white rotate-180"
          >
            <path d="M34 256 210 80l21.21 21.2L91.4 241H478v30H91.4l139.85 139.84L210 432Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
