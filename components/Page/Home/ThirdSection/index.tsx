const ThirdSection = () => {
  return (
    <section className="bg-[#242635] py-20 text-white">
      <div className="container">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex bg-[#1c1f2c] p-5 flex-col rounded-xl items-center">
            <div className="h-20 w-20 rounded-full bg-[#242635] flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-[#CC75FF]"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a1 1 0 0 1 .993.883L13 7v4.586l1.707 1.707a1 1 0 0 1-1.32 1.497l-.094-.083-2-2a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1Z"
                />
              </svg>
            </div>
            <p className="text-center mt-2 font-bold text-lg">
              Anında Teslimat
            </p>
            <p className="text-center font-medium text-sm text-[#6f7d95] max-w-xs">
              Ödeme e-posta yoluyla bize ulaştıktan hemen sonra tüm
              hesaplarımızı teslim ediyoruz.
            </p>
          </div>

          <div className="flex bg-[#1c1f2c] p-5 flex-col rounded-xl items-center">
            <div className="h-20 w-20 rounded-full bg-[#242635] flex justify-center items-center">
              <svg
                className="h-8 w-8 fill-[#CC75FF]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.268 4A2 2 0 0 1 7 3h10a2 2 0 0 1 1.732 1H20a2 2 0 0 1 2 2v3c0 3.223-1.505 5.574-4.219 5.948A7 7 0 0 1 13 17.929V19h1a2 2 0 0 1 2 2H8a2 2 0 0 1 2-2h1v-1.07a7 7 0 0 1-4.781-2.982C3.505 14.574 2 12.223 2 9V6a2 2 0 0 1 2-2h1.268ZM5 6H4v3c0 1.531.39 2.675 1.128 3.338A7.036 7.036 0 0 1 5 11V6Zm14 0v5c0 .458-.044.905-.128 1.338C19.61 11.675 20 10.531 20 9V6h-1ZM7 5v6a5 5 0 0 0 10 0V5H7Z"
                />
              </svg>
            </div>
            <p className="text-center mt-2 font-bold text-lg">
              Dereceliye Hazır
            </p>
            <p className="text-center font-medium text-sm text-[#6f7d95] max-w-xs">
              Lol smurf hesaplarımız, 20'den fazla şampiyon ve taze MMR satın
              almaya yetecek kadar mavi özle gelir.
            </p>
          </div>

          <div className="flex bg-[#1c1f2c] p-5 flex-col rounded-xl items-center">
            <div className="h-20 w-20 rounded-full bg-[#242635] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-8 w-8 fill-[#CC75FF]"
              >
                <path d="m417.687 342.33-89.786-16.314c-3.375-.675-6.877.303-9.53 2.502l-47.453 39.552c-8.634 7.18-21.178 7.18-29.812 0a14.426 14.426 0 0 0-.943-.71l-24.192-16.279c-5.341-3.619-12.567-2.188-16.151 3.153-3.596 5.329-2.188 12.567 3.153 16.151l23.738 15.977c5.318 4.305 11.38 7.11 17.676 8.739v58.717a11.625 11.625 0 0 0 11.636 11.636 11.625 11.625 0 0 0 11.636-11.636v-58.729c6.493-1.676 12.73-4.608 18.176-9.135l43.287-36.084 84.422 15.337c16.582 3.037 28.637 17.489 28.637 34.362v77.521c0 6.423-5.213 11.636-11.636 11.636H81.454c-6.423 0-11.636-5.213-11.636-11.636v-77.521c0-16.873 12.055-31.313 28.66-34.351l89.786-16.314c6.33-1.152 10.519-7.203 9.367-13.521-1.14-6.33-7.215-10.566-13.521-9.367L94.313 342.33c-27.671 5.05-47.767 29.114-47.767 57.239v77.521c0 19.247 15.663 34.909 34.909 34.909h349.091c19.247 0 34.909-15.663 34.909-34.909v-77.521c0-28.125-20.097-52.189-47.768-57.239z" />
                <circle cx="221.091" cy="151.273" r="11.636" />
                <circle cx="290.909" cy="151.273" r="11.636" />
                <path d="M372.364 104.727V93.091C372.364 41.763 330.601 0 279.273 0h-46.545c-51.328 0-93.091 41.763-93.091 93.091v11.636c-19.247 0-34.909 15.663-34.909 34.909v23.273c0 19.247 15.663 34.909 34.909 34.909h7.482c.849 5.667 1.443 9.379 1.513 9.821 2.199 19.491 9.996 37.888 22.563 53.213l2.49 3.037c20.143 24.564 50.141 38.656 82.316 38.656 17.943 0 35.7-4.515 51.351-13.056 5.632-3.084 7.715-10.147 4.631-15.791-3.084-5.62-10.135-7.715-15.791-4.631-12.241 6.668-26.135 10.205-40.192 10.205-25.169 0-48.617-10.985-64.314-30.15l-2.49-3.037c-9.705-11.846-15.744-26.042-17.513-41.6-.093-.547-8.774-55.121-8.774-76.486V93.091c0-38.505 31.313-69.818 69.818-69.818h46.545c38.295 0 69.492 30.999 69.818 69.213-19.281-2.001-37.039-8.972-50.886-20.108.047.105.058.151.105.256-3.712-3.119-9.041-3.793-13.405-1.152-24.401 14.732-55.087 25.1-88.751 30.022-6.353.919-10.764 6.831-9.833 13.196.838 5.783 5.818 9.949 11.497 9.949.559 0 1.129-.035 1.699-.128 33.699-4.911 64.605-15.185 90.391-29.417 16.861 11.671 37.318 18.851 59.183 20.736V128c0 21.364-8.681 75.939-8.855 77.021-.617 5.492-2.025 10.833-3.793 16.07h-46.604c-2.409-6.761-8.809-11.636-16.384-11.636h-34.909c-9.623 0-17.455 7.831-17.455 17.455 0 9.623 7.831 17.455 17.455 17.455h122.183c19.247 0 34.909-15.663 34.909-34.909v-20.713c7.087-6.388 11.636-15.558 11.636-25.833v-23.273c0-19.247-15.663-34.91-34.909-34.91zm-232.728 69.818c-6.423 0-11.636-5.213-11.636-11.636v-23.273c0-6.423 5.213-11.636 11.636-11.636v46.545zm232.728 34.91c0 6.388-5.178 11.578-11.567 11.625 1.094-4.317 2.025-8.634 2.502-12.905.093-.582.721-4.48 1.594-10.356h7.471v11.636zM384 162.909c0 6.423-5.213 11.636-11.636 11.636V128c6.423 0 11.636 5.213 11.636 11.636v23.273z" />
              </svg>
            </div>
            <p className="text-center mt-2 font-bold text-lg">7/24 Destek</p>
            <p className="text-center font-medium text-sm text-[#6f7d95] max-w-xs">
              Günün her saati canlı sohbetimiz aracılığıyla hizmetinizdeyiz,
              istediğiniz zaman bize yazın!
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto pt-20 flex flex-col gap-10">
          <div>
            <p className="text-xs font-medium">Nasıl çalışır</p>
            <p className="text-lg font-bold">
              Derecesiz lol smurf hesapları satın alın
            </p>
            <p className="font-medium text-[#6f7d95] mt-1">
              Ödeme yöntemlerimizden birini kullanarak derecelendirilmemiş smurf
              hesaplarımızdan birini satın aldığınızda, oturum açma kimlik
              bilgilerini e-postanıza alacaksınız. Hesaplarımız her zaman
              doğrulanmamıştır ve bu nedenle bizden bir smurf hesabı satın
              aldığınızda, hesabın yeni ve tek sahibi sizsiniz, bu nedenle
              istediğiniz zaman e-posta ve şifrenizi değiştirebilirsiniz.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium">Smurf Hesaplar</p>
            <p className="text-lg font-bold">
              Neden bir league of legends smurf hesabına sahip olmalısınız?
            </p>
            <p className="font-medium text-[#6f7d95] mt-1">
              Sıralanmamış smurf hesaplarıyla ilgili yaygın bir soru, neden bir
              league of legends smurf hesabına sahip olmanız gerektiğidir. Bunun
              birden çok nedeni var, belki yeni bir şampiyon öğrenmek
              istiyorsunuz, ancak yine de ana hesabınızdaki MMR'yi veya kazanma
              oranını bozmadan dereceli oyunlarda iyi performans gösterme
              baskısına sahipsiniz. Her league of legends pro oyuncusu, zirvede
              oynamadıkları zamanlarda oynadıkları bir smurf hesabına sahiptir,
              bu şekilde analarını çok yüksek eloda tutarlar. Her league of
              legends profesyonel oyuncusunun bir smurf hesabı olduğunu biliyor
              muydunuz? Ana hesaplarında yüksek elolarını bu şekilde koruyorlar,
              çünkü o hesapta sadece zirvede oynadıklarında oynuyorlar.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium">LoL Hesabı</p>
            <p className="text-lg font-bold">lol smurf nasıl alınır</p>
            <p className="font-medium text-[#6f7d95] mt-1">
              Birçoğu bir lol hesabı satın almanın zor olduğuna inanıyor, ama
              aslında öyle değil, sipariş verdikten sonra league of legends
              hesabını e-postana alana kadar sadece birkaç dakika geçiyor. Tek
              yapmanız gereken, satın almaya karar verdiğiniz hesaplardan
              birinde "Şimdi Satın Al"a tıklamak, ödeme yapmak ve ardından
              e-postanızda lig hesabınız olacak, bundan daha zor değil! Yepyeni
              unranked smurf hesabınızda dereceli oyun tırmanışınıza başlamaktan
              sadece birkaç tık uzaktasınız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
