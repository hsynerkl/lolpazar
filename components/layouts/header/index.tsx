import { useLogin } from "context/Login";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { handleToggleModal } = useLogin();
  return (
    <header className="h-20 font-semibold flex items-center bg-[#1c1f2c]">
      <div className="container flex justify-between">
        <Image
          src={"https://turbosmurfs.gg/logos/logo_white_color.svg"}
          alt="logo"
          width={216}
          height={35}
        />
        <ul className="flex gap-5 text-white items-center">
          <li>
            <Link
              href="/"
              className="text-transparent hover:text-white transition-colors duration-300 bg-gradient-to-r from-[#CC75FF] bg-clip-text to-[#34D5FB]"
            >
              Lol Unranked Hesap
            </Link>
          </li>

          <li className="flex gap-2">
            🎁
            <Link
              href="/"
              className="text-transparent hover:text-white transition-colors duration-300 bg-gradient-to-r from-[#34D5FB] bg-clip-text to-[#CC75FF]"
            >
              Ücretsiz Unranked Hesap
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="text-transparent hover:text-white transition-colors duration-300 bg-gradient-to-r from-[#CC75FF] bg-clip-text to-[#34D5FB]"
            >
              Lol Hesap Boost
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="text-transparent hover:text-white transition-colors duration-300 bg-gradient-to-r from-[#34D5FB] bg-clip-text to-[#CC75FF]"
            >
              Discord
            </Link>
          </li>
        </ul>
        <div
          className="flex items-center bg-gradient-to-r from-[#CC75FF] to-[#34D5FB] px-4 rounded-full cursor-pointer hover:opacity-80 duration-300 transition"
          onClick={handleToggleModal}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
          >
            <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
