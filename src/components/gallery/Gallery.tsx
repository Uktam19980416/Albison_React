import { Auth } from '../../contexts/AuthContext'
function Gallery() {
  const darkMode = Auth().darkMode
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <main className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] mb-10">
        <div className="text-sm breadcrumbs py-5">
          <ul>
            <li>
              <a href="#" className="text-sm text-[#bbb] font-normal">
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#bbb] font-semibold">
                Беседки для дачи
              </a>
            </li>
          </ul>
        </div>

        <section className="max-md:mt-5">
          <h2 className="text-[32px] font-normal">Наши фотографии</h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <section>
          <div className="flex gap-3 bg-[#FFD634] items-center py-3 px-4 w-full md:hidden max-md:mt-6">
            <i className="fa-solid fa-bars text-white text-2xl cursor-pointer text-[26px]"></i>
            <p className="text-[26px] font-normal text-center w-full">
              Каталог товаров
            </p>
          </div>
        </section>

        <section className="max-md:mt-5 md:hidden">
          <h2 className="text-[32px] font-normal max-md:text-center">
            Наши работы
          </h2>
        </section>

        <nav className="bg-[#F9F8F3] mt-5">
          <ul className="flex items-center w-full">
            <li className="list-none px-12 py-5 border-b-2 border-[orange] bg-white cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center">
              <a
                href="#"
                className="text-lg font-normal text-black max-lg:text-sm  max-[400px]:text-[10px]"
              >
                Беседки
              </a>
            </li>
            <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center">
              <a
                href="#"
                className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              >
                Бани
              </a>
            </li>
            <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center">
              <a
                href="#"
                className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              >
                Площадки
              </a>
            </li>
            <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center">
              <a
                href="#"
                className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              >
                Дома
              </a>
            </li>
            <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center">
              <a
                href="#"
                className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              >
                Перголы
              </a>
            </li>
            <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center">
              <a
                href="#"
                className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              >
                Бренды
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-[60px]">
          <div className="grid grid-cols-3 gap-11 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery1.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery2.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery3.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery1.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery2.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery3.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery1.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery2.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery3.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery1.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery2.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery3.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery1.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery2.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-[1px] border-[#E8E8E8]">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/gallery/gallery3.png"
                  alt="Gallery"
                />
              </div>
              <div className="px-7 pb-7">
                <p className="text-lg font-normal">Баня «Деревянное чудо» </p>
                <p className="text-sm font-normal text-[#FF7A1B]">
                  Г. Таганрог, 2019 год
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center mt-8 max-md:w-full">
            <button className="btn bg-[#FF7A1B] text-white text-[22px] max-md:text-[16px] w-1/2 md:w-1/4 max-[500px]:w-full">
              Показать еще
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Gallery
