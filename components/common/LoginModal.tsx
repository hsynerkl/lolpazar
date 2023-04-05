import { useLogin } from "context/Login";
import Image from "next/image";

const LoginModal = () => {
  const { handleToggleModal } = useLogin();
  return (
    <div
      className="fixed inset-0 bg-zinc-900 bg-opacity-40 flex justify-center items-center h-screen text-white z-40"
      onClick={handleToggleModal}
    >
      <div
        className="bg-[#1c1f2c] items-center justify-center flex flex-col fixed shadow-xl rounded-2xl z-50 px-8 py-8 text-sm drop-shadow-lg border border-[#242635]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={"https://turbosmurfs.gg/logos/logo_white_color.svg"}
          alt="logo"
          width={216}
          height={35}
        />
        <button className="bg-[#242635] mt-10 gap-1 text-opacity-50 px-4 py-2 rounded-lg w-64 shadow flex items-center justify-center space-x-2 border border-zinc-500 border-opacity-50 hover:brightness-110">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4"
          >
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
              ></path>
              <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
              ></path>
              <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
              ></path>
              <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
              ></path>
            </g>
          </svg>
          <p className="opacity-50">Continue with Google</p>
        </button>
        <p className="opacity-50 text-center my-8">Or continue with email</p>
        <input
          autoComplete="email"
          placeholder="Email address"
          className="w-full px-3 placeholder:text-opacity-50 py-2 bg-[#242635] focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-lg border border-zinc-600 hover:brightness-110"
          type="email"
        />
        <button className="mt-4 font-medium hover:opacity-75 transition duration-300 bg-gradient-to-r from-[#CC75FF] to-[#34D5FB] w-full py-2 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
