import QuickBuy from "../../../common/QuikBuy";

const FirstSection = () => {
  return (
    <section className="bg-[#242635] text-white">
      <div className="container">
        <div className="flex justify-center py-12">
          <div className="bg-[#1c1f2c] rounded-md px-4 py-2 flex gap-2">
            ✨
            <p className="text-transparent bg-gradient-to-r from-[#34D5FB] bg-clip-text to-[#CC75FF]">
              50.000'den fazla oyuncu tarafından tercih edilen.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-5xl">
              <span className="text-transparent font-bold bg-gradient-to-r from-[#34D5FB] bg-clip-text to-[#CC75FF]">
                League of Legends
              </span>{" "}
              Unranked Hesap Satın Alın
            </p>
            <p className="text-xl text-[#6f7d95]">
              Bir Lol smurf hesabı satın almak mı istiyorsunuz? Bir sonraki
              dereceli yolculuğunuza Turbosmurfs derecesiz lig hesabıyla
              başlayın.
            </p>
          </div>
          <QuickBuy />
        </div>
      </div>
      <div className="bg-[#35b5fd] mt-32 font-black italic overflow-hidden">
        <div className="scroll-text-anim flex h-10 items-center [&>p]:whitespace-nowrap [&>p]:ml-1">
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
          <p>SEZON 13'E TURBOSMURFS ILE BAŞLA! - </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
