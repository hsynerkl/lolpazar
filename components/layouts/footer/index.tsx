import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#131721] text-[#6f7d95] font-medium">
      <div className="container grid grid-cols-2">
        <div className="max-w-md">
          <div className="aspect-h-1 aspect-w-5 max-w-sm">
            <Image
              src="https://turbosmurfs.gg/logos/logo_white_color.svg"
              fill
              alt="logo"
            />
          </div>
          <p>
            High quality lol smurf accounts for making enemy ragequit at 5 min.
          </p>
          <ul className="flex mt-8 gap-3">
            <li className="h-10 cursor-pointer border hover:bg-white transition duration-300 border-[#1c1f2c] w-10 rounded-full bg-[#1c1f2c] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#43b6f9]"
              >
                <path d="M14 6h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3a5 5 0 0 0-5 5v3H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7h2.22a1 1 0 0 0 1-.76l.5-2a1 1 0 0 0-1-1.24H13V7a1 1 0 0 1 1-1Z" />
              </svg>
            </li>

            <li className="h-10 cursor-pointer border hover:bg-white transition duration-300 border-[#1c1f2c] w-10 rounded-full bg-[#1c1f2c] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-[#43b6f9]"
              >
                <path d="M21.63 6.92a1 1 0 0 0-.83-.2 8.31 8.31 0 0 1-1.1.17 4.49 4.49 0 0 0-8.55.52c-2.73.67-5.4-2.07-5.43-2.1a1 1 0 0 0-1-.27 1 1 0 0 0-.7.8 11.69 11.69 0 0 0 1.51 8.67A7.25 7.25 0 0 1 3 15a1 1 0 0 0-.89 1.46c.19.37 2.07 3.54 9.47 3.54 5.84 0 8-5.2 8.36-8.38A4 4 0 0 0 22 7.7a1 1 0 0 0-.37-.78Z" />
              </svg>
            </li>

            <li className="h-10 cursor-pointer border hover:bg-white transition duration-300 border-[#1c1f2c] w-10 rounded-full bg-[#1c1f2c] flex items-center justify-center">
              <svg
                className="h-5 w-5 fill-[#43b6f9]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43 4.94 4.94 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.78 4.78 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.78 4.78 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.19 3.19 0 0 1-1.15.75 5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3 3.27 3.27 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.06 3.06 0 0 1 .75 1.1 5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33Z" />
              </svg>
            </li>

            <li className="h-10 cursor-pointer border hover:bg-white transition duration-300 border-[#1c1f2c] w-10 rounded-full bg-[#1c1f2c] flex items-center justify-center">
              <svg
                className="h-5 w-5 fill-[#43b6f9]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    d="M12 4c.855 0 1.732.022 2.582.058l1.004.048.961.057.9.061.822.064a3.802 3.802 0 0 1 3.494 3.423l.04.425.075.91c.07.943.122 1.971.122 2.954 0 .983-.052 2.011-.122 2.954l-.075.91c-.013.146-.026.287-.04.425a3.802 3.802 0 0 1-3.495 3.423l-.82.063-.9.062-.962.057-1.004.048A61.59 61.59 0 0 1 12 20a61.59 61.59 0 0 1-2.582-.058l-1.004-.048-.961-.057-.9-.062-.822-.063a3.802 3.802 0 0 1-3.494-3.423l-.04-.425-.075-.91A40.662 40.662 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91c.013-.146.026-.287.04-.425A3.802 3.802 0 0 1 5.73 4.288l.821-.064.9-.061.962-.057 1.004-.048A61.676 61.676 0 0 1 12 4Zm0 2c-.825 0-1.674.022-2.5.056l-.978.047-.939.055-.882.06-.808.063a1.802 1.802 0 0 0-1.666 1.623C4.11 9.113 4 10.618 4 12c0 1.382.11 2.887.227 4.096.085.872.777 1.55 1.666 1.623l.808.062.882.06.939.056.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047.939-.055.882-.06.808-.063a1.802 1.802 0 0 0 1.666-1.623C19.89 14.887 20 13.382 20 12c0-1.382-.11-2.887-.227-4.096a1.802 1.802 0 0 0-1.666-1.623l-.808-.062-.882-.06-.939-.056-.978-.047A60.693 60.693 0 0 0 12 6Zm-2 3.575a.6.6 0 0 1 .819-.559l.081.04 4.2 2.424a.6.6 0 0 1 .085.98l-.085.06-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09v-4.85Z"
                    fill="#43b6f9"
                  />
                </g>
              </svg>
            </li>

            <li className="h-10 cursor-pointer border hover:bg-white transition duration-300 border-[#1c1f2c] w-10 rounded-full bg-[#1c1f2c] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-[#43b6f9]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.822 5.134A4.75 4.75 0 0 1 15.648 2h-.919a4.763 4.763 0 0 0 2.093 3.134Zm-8.5 6.771a2.89 2.89 0 0 0-2.886 2.888c0 1.11.63 2.076 1.55 2.559a2.859 2.859 0 0 1-.548-1.686 2.89 2.89 0 0 1 2.886-2.888c.297 0 .585.05.854.134v-3.51a6.419 6.419 0 0 0-.854-.06c-.051 0-.097.004-.149.004v2.693a2.905 2.905 0 0 0-.853-.134Z" />
                <path d="M19.424 6.676v2.67a8.172 8.172 0 0 1-4.778-1.537v6.989c0 3.487-2.835 6.329-6.324 6.329a6.296 6.296 0 0 1-3.624-1.147A6.312 6.312 0 0 0 9.324 22c3.484 0 6.324-2.837 6.324-6.33V8.683a8.172 8.172 0 0 0 4.779 1.537V6.783a4.7 4.7 0 0 1-1.003-.107Z" />
                <path d="M14.646 14.798V7.809a8.172 8.172 0 0 0 4.778 1.537v-2.67a4.773 4.773 0 0 1-2.602-1.542A4.802 4.802 0 0 1 14.725 2H12.21l-.005 13.777a2.89 2.89 0 0 1-2.881 2.782 2.898 2.898 0 0 1-2.343-1.203 2.899 2.899 0 0 1-1.55-2.558 2.89 2.89 0 0 1 2.886-2.889c.297 0 .585.051.854.135V9.351C5.756 9.425 3 12.23 3 15.67a6.31 6.31 0 0 0 1.698 4.309 6.296 6.296 0 0 0 3.624 1.147c3.484 0 6.324-2.842 6.324-6.33Z" />
              </svg>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ul>
            <li className="text-white font-bold">Turbosmurfs</li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Affiliate Program
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Handleveled Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Free Lol Account
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Find Lol Duo Partner
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Frequently Asked Questions
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Contact Us
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Terms Of Service
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              Privacy Policy
            </li>
          </ul>

          <ul>
            <li className="text-white font-bold">Accounts</li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              EUW Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              EUNE Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              NA Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              TR Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              OCE Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              BR Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              LAS Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              LAN Smurf Accounts
            </li>
            <li className="py-2 transition duration-300 hover:translate-x-1 hover:text-[#43b6f9] cursor-pointer">
              RU Smurf Accounts
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className="text-sm text-center max-w-6xl ">
          Turbosmurfs.gg isn’t endorsed by Riot Games and doesn’t reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing League of Legends. League of Legends and Riot
          Games are trademarks or registered trademarks of Riot Games, Inc.
          League of Legends © Riot Games, Inc. Copyright © 2021. Created with ❤️
          by Astro.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
