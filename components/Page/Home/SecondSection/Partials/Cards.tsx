import Image from "next/image";
import { FC } from "react";

const mockCards = [
  [
    {
      img: "https://turbosmurfs.gg/storage/products/c20f5275b11127a02eac1ba75ef3a3e2.jpg",
      title: "40,000 Mavi Öz Derecesiz Smurf - EUW",
      price: "14,99",
      blueEssence: "40,000+",
      region: "Avrupa Batı",
      rank: "Fresh Derecesiz",
    },
    {
      img: "https://turbosmurfs.gg/storage/products/c20f5275b11127a02eac1ba75ef3a3e2.jpg",
      title: "50,000 Mavi Öz Derecesiz Smurf - EUW",
      price: "24,99",
      blueEssence: "50,000+",
      region: "Avrupa Batı",
      rank: "Fresh Derecesiz",
    },
    {
      img: "https://turbosmurfs.gg/storage/products/c20f5275b11127a02eac1ba75ef3a3e2.jpg",
      title: "60,000 Mavi Öz Derecesiz Smurf - EUW",
      price: "34,99",
      blueEssence: "60,000+",
      region: "Avrupa Batı",
      rank: "Fresh Derecesiz",
    },
  ],
  [
    {
      img: "https://turbosmurfs.gg/storage/products/e0ae212a474f6f082d616f707cb67efd.jpg",
      title: "40,000 Mavi Öz Derecesiz Smurf - TR",
      price: "14,99",
      blueEssence: "40,000+",
      region: "Türkiye",
      rank: "Fresh Derecesiz",
    },
    {
      img: "https://turbosmurfs.gg/storage/products/98833fc161eec943040ddeec465c6d38.jpg",
      title: "50,000 Mavi Öz Derecesiz Smurf - TR",
      price: "24,99",
      blueEssence: "50,000+",
      region: "Türkiye",
      rank: "Fresh Derecesiz",
    },
    {
      img: "https://turbosmurfs.gg/storage/products/b1421c9718f272d7c43d1cbe00c21427.jpg",
      title: "60,000 Mavi Öz Derecesiz Smurf - TR",
      price: "34,99",
      blueEssence: "60,000+",
      region: "Türkiye",
      rank: "Fresh Derecesiz",
    },
  ],
];

type CardsProps = {
  region: number;
};

const Cards: FC<CardsProps> = ({ region }) => {
  return (
    <div
      key={region}
      className="grid opening-anim mx-auto grid-cols-3 mt-20 gap-10 max-w-4xl"
    >
      {mockCards[region].map((card, index) => (
        <div
          key={index}
          className="p-5 group hover:-translate-y-2 duration-300 transition rounded-xl card-shadow bg-[#242635] relative"
        >
          <div className="absolute top-8 right-8 z-10 rounded-full px-4 py-2 bg-[#ffc107] text-xs font-bold">
            {" "}
            🔥 Çok Popüler
          </div>
          <div className="aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">
            <Image
              src={card.img}
              alt="card"
              fill
              className="group-hover:scale-105 transition duration-300"
            />
          </div>
          <p className="text-center text-sm font-black py-4">{card.title}</p>
          <button className="flex gap-1 items-center w-full justify-center bg-[#43b6f9] rounded-full px-4 py-2 mb-4 hover:opacity-80 transition duration-300">
            <svg
              viewBox="0 -13.5 155 155"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white h-5 w-5"
            >
              <path d="M143.67 32.11c-4.709 0-18.892-.057-20.619-.056l-3.837-3.366c-3.011-2.64-6.043-5.954-9.064-8.623a396.762 396.762 0 0 0-4.266-3.702c-4.935-4.245-10.037-8.635-14.286-13.734A5.345 5.345 0 0 0 86.413.877 3.937 3.937 0 0 0 83.25 3.01a4.06 4.06 0 0 0 .46 3.857 7.1 7.1 0 0 0 1.12 1.29l.087.085c3.491 3.421 6.984 6.84 10.477 10.26 4.204 4.117 8.41 8.89 12.612 13.01.376.37.745.765 1.127 1.182L46.458 35.12c.125-.147.223-.256.323-.355l8.523-8.401A29783.98 29783.98 0 0 0 72.206 9.69c.855-.803 1.615-1.7 2.265-2.676 1.03-1.641.94-3.294-.245-4.533a3.375 3.375 0 0 0-4.188-.591c-.853.4-1.662.892-2.412 1.463a496.828 496.828 0 0 1-3.224 2.586c-3.176 2.537-6.46 5.16-9.55 7.907-5.651 5.02-11.246 10.285-16.657 15.379l-1.17 1.1c-1.15 1.084-2.193 2.905-3.4 4.255-.54.604-6.058.69-6.058.69-4.93.085-10.048.173-15.166.266-.31.006-.623.007-.935.007a19.04 19.04 0 0 0-2.85.147C5.03 36.236 1.353 38.184.9 41.932c-.38 3.14 1.055 5.135 5.074 7.089a.66.66 0 0 1 .048.044c.456 2.294.906 4.595 1.35 6.902 1.035 5.325 2.1 10.83 3.282 16.233.853 3.903 1.796 7.851 2.71 11.67 1.19 4.97 2.42 10.107 3.455 15.194a84.453 84.453 0 0 0 5.316 17.004c2.363 5.439 6.608 8.522 12.622 9.164 7.084.758 14.011 1.444 20.881 1.491 1.386.01 2.773.015 4.16.015 11.153 0 22.23-.308 31.903-.604 6.694-.205 13.741-.652 21.534-1.365 10.049-.918 16.677-5.764 20.265-14.815 3.401-8.579 5.474-17.627 7.479-26.376l.727-3.162c1.777-7.679 3.457-15.513 5.083-23.09.695-3.242 1.394-6.485 2.096-9.728 3.556-1.504 5.531-4.54 5.575-8.583.052-4.402-3.252-6.906-10.789-6.906ZM15.198 49.517c.027-.02.051-.038.076-.053 1.257-.01 2.516-.03 3.774-.05 3.15-.05 6.404-.1 9.593.007 29.255.978 59.084.214 87.931-.525 7.462-.192 15.168-.39 22.787-.555l-.425 1.968a175.366 175.366 0 0 1-1.194 5.308l-1.451 5.899c-3.052 12.405-6.207 25.226-9.386 37.82a39.245 39.245 0 0 1-5.002 11.824c-1.546 2.401-3.501 3.741-5.977 4.095-.831.119-1.662.24-2.494.363-4.413.646-8.976 1.312-13.469 1.526-10.738.506-20.531.732-29.94.691-6.62-.029-13.356-.357-19.87-.674-2.117-.103-4.232-.202-6.348-.299-2.137-.094-4.312-.283-6.417-.466-.875-.076-1.748-.15-2.62-.222-2.786-.222-4.312-1.575-4.947-4.397-1.426-6.318-2.96-12.721-4.442-18.913-.553-2.312-1.104-4.624-1.655-6.936l-2.263-9.523c-2.096-8.82-4.19-17.64-6.278-26.46a1.546 1.546 0 0 1 .017-.428Z" />
              <path d="M35.767 71.413A6434.118 6434.118 0 0 0 43.49 96.82a13.7 13.7 0 0 0 1.092 2.6c.875 1.588 2.132 2.448 3.496 2.448.382-.002.76-.066 1.122-.191 2.19-.74 2.412-2.712 2.448-4.502V97.1l-.017-.075c-.044-.205-.084-.441-.13-.698a13.42 13.42 0 0 0-.549-2.301 5223.764 5223.764 0 0 0-8.761-23.98l-.697-1.898a6.775 6.775 0 0 0-.679-1.322 3.08 3.08 0 0 0-3.593-1.489c-1.496.417-2.217 1.6-2.028 3.33.107.932.3 1.851.575 2.747Zm62.709 27.839c.43.16.883.244 1.341.248a3.654 3.654 0 0 0 2.954-1.64 11.108 11.108 0 0 0 1.521-2.823 2137.882 2137.882 0 0 0 8.204-23.128 6.5 6.5 0 0 0 .28-3.314c-.176-.88-.943-2.225-1.923-2.468-1.137-.28-2.477.319-3.176.702a3.465 3.465 0 0 0-1.266 1.856l-.062.156a4097.38 4097.38 0 0 0-9.19 22.752c-.304.808-.56 1.634-.763 2.474-.09.34-.177.674-.27.99l-.035.117.01.122c.135 1.548.436 3.256 2.375 3.956ZM70.125 78.919l.054.647c0 .863-.004 1.727-.013 2.59-.016 2.575-.032 5.237.047 7.858.083 1.93.33 3.851.74 5.74a3.167 3.167 0 0 0 3.252 2.702c.13 0 .267-.006.404-.018a3.367 3.367 0 0 0 3.174-3.212 19.55 19.55 0 0 0 .167-3.117c-.275-7.015-.525-13.346-.854-19.772-.13-2.553-.412-5.13-.687-7.622l-.011-.098a2.765 2.765 0 0 0-2.852-2.654 2.822 2.822 0 0 0-3.058 2.425 21.022 21.022 0 0 0-.349 3.783c-.03 2.573-.025 5.185-.02 7.716l.006 3.032Z" />
            </svg>
            Satın Al
          </button>
          <ul className="mt-5 text-sm font-medium">
            <li className="flex gap-3 items-center">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#43b6f9]"
              >
                <path d="M11 9h4a1 1 0 0 0 0-2h-2V6a1 1 0 0 0-2 0v1a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2H9a1 1 0 0 0 0 2h2v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2Zm8-7H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
              </svg>
              <p className="text-[#6f7d95]">Price</p>
              <p>{card.price}₺</p>
            </li>

            <li className="flex gap-3 mt-4 items-center">
              <svg
                className="h-5 w-5 fill-[#43b6f9]"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6h4l3 8.6L0 6zm16 0h-4l-3 8.6L16 6zm-8 9L5 6h6l-3 9zM4 5H0l2-3 2 3zm12 0h-4l2-3 2 3zm-6 0H6l2-3 2 3zM3.34 2H7L5 5 3.34 2zM9 2h4l-2 3-2-3z" />
              </svg>
              <p className="text-[#6f7d95]">Mavi Öz</p>
              <p>{card.blueEssence}</p>
            </li>

            <li className="flex gap-3 mt-4 items-center">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-[#43b6f9]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 20.945v-1.238l-1.854-1.853A.5.5 0 0 1 9 17.5v-2.793l-.854-.853A.5.5 0 0 1 8 13.5v-1a.5.5 0 0 1 .5-.5h5a1.5 1.5 0 0 1 1.5 1.5v1a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 1.5 1.5.5.5 0 0 0 .5.5h1.984A9.004 9.004 0 0 0 15 3.512V4.5A2.5 2.5 0 0 1 12.5 7h-1a.5.5 0 0 0-.5.5v1A1.5 1.5 0 0 1 9.5 10H8v.5a.5.5 0 0 1-.146.354l-1 1a.5.5 0 0 1-.708 0l-2.69-2.69A9.001 9.001 0 0 0 11 20.945ZM12 21a8.978 8.978 0 0 0 6.708-3H17.5a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1-1.5-1.5v-1a.5.5 0 0 0-.5-.5H9v.293l.854.853A.5.5 0 0 1 10 14.5v2.793l1.854 1.853A.5.5 0 0 1 12 19.5V21Zm-.41.992a.503.503 0 0 1-.231-.012C6.135 21.65 2 17.307 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-.137 0-.273-.003-.41-.008ZM3.86 8.154l2.64 2.639.5-.5V9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-1A1.5 1.5 0 0 1 11.5 6h1A1.5 1.5 0 0 0 14 4.5V3.223a9.001 9.001 0 0 0-10.14 4.93Z" />
              </svg>
              <p className="text-[#6f7d95]">Bölge</p>
              <p>{card.region}</p>
            </li>

            <li className="flex gap-3 mt-4 items-center">
              <svg
                viewBox="-2 -4 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#43b6f9]"
              >
                <path d="M2.776 5.106 3.648 11h12.736l.867-5.98-3.493 3.02-3.755-4.827-3.909 4.811-3.318-2.918zm10.038-1.537-.078.067.141.014 1.167 1.499 1.437-1.242.14.014-.062-.082 2.413-2.086a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898L4.35 3.827l-.05.06.109-.008 1.444 1.27 1.212-1.493.109-.009-.06-.052L9.245.976a1 1 0 0 1 1.565.017l2.005 2.576zM2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
              <p className="text-[#6f7d95]">Derece</p>
              <p>{card.rank}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cards;
