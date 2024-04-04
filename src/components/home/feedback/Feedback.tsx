function Feedback() {
  return (
    <>
      <div className="mt-5 bg-[#F9F8F3] py-10 relative">
        <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] mt-10">
          <div className="flex max-lg:flex-col justify-between gap-5 items-center swiper-container">
            <div className="w-[230px] h-[45px] rounded-full bg-[#fff] flex justify-center items-center cursor-pointer max-lg:absolute max-lg:-left-[100px] max-lg:top-1/2 max-lg:bg-inherit">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="bg-white px-6 py-7">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#FF7A1B] font-normal text-lg">
                    Алексей С.А.
                  </p>
                  <p className="text-sm font-light text-[#bbb]">28 июня 2021</p>
                </div>
                <div>
                  <p className="flex gap-1">
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                  </p>
                  <p className="text-[13px] font-light text-[#2B150D]">
                    Общая оценка: (4,8)
                  </p>
                </div>
              </div>
              <hr className="my-5" />
              <p className="text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur possimus libero culpa facere tempora quas fuga
                reprehenderit quasi tempore, cum enim officiis provident
                sapiente saepe facilis ea magni error repellat veritatis. Eius
                vero incidunt ipsam temporibus.
              </p>
              <a
                href="#"
                className="text-[#FF7A1B] font-normal text-sm underline"
              >
                Читать полностью
              </a>
            </div>
            <div className="bg-white px-6 py-7 max-lg:hidden">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#FF7A1B] font-normal text-lg">
                    Алексей С.А.
                  </p>
                  <p className="text-sm font-light text-[#bbb]">28 июня 2021</p>
                </div>
                <div>
                  <p className="flex gap-1">
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                  </p>
                  <p className="text-[13px] font-light text-[#2B150D]">
                    Общая оценка: (4,8)
                  </p>
                </div>
              </div>
              <hr className="my-5" />
              <p className="text-sm font-light">
                Voluptates corrupti iste explicabo aspernatur ut earum, unde
                reiciendis quisquam praesentium quia, optio tenetur nam! Officia
                fugiat culpa quibusdam? Cum tenetur soluta voluptatibus eum
                beatae quaerat possimus pariatur rem consequatur, itaque debitis
                rerum! Voluptatum, corrupti?
              </p>
              <a
                href="#"
                className="text-[#FF7A1B] font-normal text-sm underline"
              >
                Читать полностью
              </a>
            </div>
            <div className="bg-white px-6 py-7 max-lg:hidden">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#FF7A1B] font-normal text-lg">
                    Алексей С.А.
                  </p>
                  <p className="text-sm font-light text-[#bbb]">28 июня 2021</p>
                </div>
                <div>
                  <p className="flex gap-1">
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                    <i className="fa-solid fa-star text-[#FFD634]"></i>
                  </p>
                  <p className="text-[13px] font-light text-[#2B150D]">
                    Общая оценка: (4,8)
                  </p>
                </div>
              </div>
              <hr className="my-5" />
              <p className="text-sm font-light">
                «Цена хорошая, все соответствует ожиданиям. Подбирала перголу
                для своего участка. Также мне хотелось бы отметить вежливость
                работников компании, все подробно рассказали. Я считаю этот
                магазин отличным. И наверняка буду покупать снова или советовать
                коллегам.»
              </p>
              <a
                href="#"
                className="text-[#FF7A1B] font-normal text-sm underline"
              >
                Читать полностью
              </a>
            </div>
            <div className="w-[230px] h-[45px] rounded-full bg-[#fff] flex justify-center items-center cursor-pointer max-lg:absolute max-lg:right-[15px] max-lg:top-1/2 max-lg:bg-inherit max-lg:w-0">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <a
            href="#"
            className="text-white font-normal text-[16px] max-sm:text-sm py-[10px] bg-[#FF7A1B] rounded-[3px] 
      w-[15%] max-xl:w-[20%] max-lg:w-[25%] max-md:w-[30%] max-sm:w-[50%] text-center hover:transition-all hover:border-[1px] hover:bg-transparent hover:text-[#FF7A1B] hover:border-[#FF7A1B]"
          >
            Открыть все отзывы
          </a>
        </div>
      </div>
    </>
  )
}

export default Feedback
