import QuickBuy from "components/common/QuickBuy";

export default function Home() {
  return (
    <section className="bg-[#242635] min-h-screen text-white">
      <div className="container">
        <div className="flex justify-center py-12">
          <div className="bg-[#1c1f2c] rounded-md px-4 py-2 flex gap-2">
            ✨
            <p className="text-transparent bg-gradient-to-r from-[#34D5FB] bg-clip-text to-[#CC75FF]">
              50.000'den fazla oyuncu tarafından tercih edilen.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="flex justify-center flex-col gap-5">
            <p className="text-5xl">
              <span className="text-transparent font-bold bg-gradient-to-r from-[#34D5FB] bg-clip-text to-[#CC75FF]">
                League of Legends
              </span>{" "}
              Unranked Hesap Satın Alın
            </p>
            <p className="text-xl text-white text-opacity-50">
              Bir Lol smurf hesabı satın almak mı istiyorsunuz? Bir sonraki
              dereceli yolculuğunuza Turbosmurfs derecesiz lig hesabıyla
              başlayın.
            </p>
          </div>
          <QuickBuy />
        </div>
      </div>
    </section>
  );
}
