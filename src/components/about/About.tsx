import { Auth } from '../../contexts/AuthContext'

function About() {
  const darkMode = Auth().darkMode
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <main>
        <section className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
          <div className="text-sm breadcrumbs py-5 max-md:hidden">
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
          <h2 className="text-[32px] font-normal">О компаниии</h2>
          <div className="flex gap-3 bg-[#FFD634] items-center py-3 px-4 w-full md:hidden max-md:mt-6">
            <i className="fa-solid fa-bars text-white text-2xl cursor-pointer text-[26px]"></i>
            <p className="text-[26px] font-normal text-center w-full">
              Каталог товаров
            </p>
          </div>
        </section>

        <section className="bg-[#FFD634] my-8 py-9">
          <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
            <div className="flex gap-20 items-center px-11 max-md:flex-col">
              <div className="flex flex-col gap-4 w-1/2 max-md:w-full">
                <p className="text-[28px] font-normal">
                  Наша компания основана в 1998 году.
                </p>
                <div className="w-1/5 h-[2px] bg-[#FF7A1B] max-md:w-full"></div>
                <p className="text-lg font-light max-md:text-[20px]">
                  Более чем за 20 лет мы набирались опыта в своём деле и
                  наладили производство большого масштаба. В день основания
                  нашей компании мы поставили перед собой задачи: добиться
                  высочайшего качества нашей продукции, работать только с лучшим
                  деревом и расширить производство.
                </p>
              </div>
              <div className="w-1/2 relative -top-11 shadow-[-10px_10px_5px_white] max-md:w-full max-md:shadow-[10px_10px_5px_white]">
                <img src="./build/img/about/about.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <article className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] px-11">
          <section>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-11">
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/about2.1.png"
                    alt="About Page"
                  />
                </div>
                <p className="text-lg max-sm:text-xl font-normal">
                  На сегодняшний момент ежедневно на нашем производстве работают
                  более 50 высоко квалифицированных сотрудников.
                </p>
                <p className="text-[16px] font-light">
                  Дружная команда инженеров, наладчиков и мастеров высокого
                  класса с большим вниманием и любовью относятся к своей работе.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/about2.2.png"
                    alt="About Page"
                  />
                </div>
                <p className="text-lg max-sm:text-xl font-normal">
                  На сегодняшний момент ежедневно на нашем производстве работают
                  более 50 высоко квалифицированных сотрудников.
                </p>
                <p className="text-[16px] font-light">
                  Дружная команда инженеров, наладчиков и мастеров высокого
                  класса с большим вниманием и любовью относятся к своей работе.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/about2.3.png"
                    alt="About Page"
                  />
                </div>
                <p className="text-lg max-sm:text-xl font-normal">
                  На сегодняшний момент ежедневно на нашем производстве работают
                  более 50 высоко квалифицированных сотрудников.
                </p>
                <p className="text-[16px] font-light">
                  Дружная команда инженеров, наладчиков и мастеров высокого
                  класса с большим вниманием и любовью относятся к своей работе.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/about2.4.png"
                    alt="About Page"
                  />
                </div>
                <p className="text-lg max-sm:text-xl font-normal">
                  На сегодняшний момент ежедневно на нашем производстве работают
                  более 50 высоко квалифицированных сотрудников.
                </p>
                <p className="text-[16px] font-light">
                  Дружная команда инженеров, наладчиков и мастеров высокого
                  класса с большим вниманием и любовью относятся к своей работе.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/about2.1.png"
                    alt="About Page"
                  />
                </div>
                <p className="text-lg max-sm:text-xl font-normal">
                  На сегодняшний момент ежедневно на нашем производстве работают
                  более 50 высоко квалифицированных сотрудников.
                </p>
                <p className="text-[16px] font-light">
                  Дружная команда инженеров, наладчиков и мастеров высокого
                  класса с большим вниманием и любовью относятся к своей работе.
                </p>
              </div>
            </div>
          </section>

          <section className="my-8 max-md:text-center">
            <h2 className="text-[28px] font-normal">Примеры наших изделий</h2>
            <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
          </section>

          <section>
            <div className="grid grid-cols-3 gap-[14px] max-md:grid-cols-2 max-sm:grid-cols-1">
              <img src="./build/img/about/about3.1.png" alt="About" />
              <img src="./build/img/about/about3.2.png" alt="About" />
              <img src="./build/img/about/about3.3.png" alt="About" />
              <img src="./build/img/about/about3.4.png" alt="About" />
              <img src="./build/img/about/about3.5.png" alt="About" />
              <img src="./build/img/about/about3.6.png" alt="About" />
            </div>

            <div className="w-full my-5">
              <button
                className="btn hidden w-full max-sm:block text-white bg-[#FF7A1B]"
                role="button"
                title="Посмотреть все работы"
                type="button"
              >
                Посмотреть все работы
              </button>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
              <div className="flex flex-col gap-5 max-md:items-center max-md:text-center">
                <div className="w-[142px]">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/pngwing.com.png"
                    alt="Pingwing"
                  />
                </div>
                <p className="text-xl font-normal">Широкий ассортимент</p>
                <p className="text-[16px] font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus amet, cursus feugiat montes, tincidunt aenean faucibus.
                  Nunc curabitur pretium pellentesque velit id.
                </p>
              </div>
              <div className="flex flex-col gap-5 max-md:items-center max-md:text-center">
                <div className="w-[142px]">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/pngwing.com.png"
                    alt="Pingwing"
                  />
                </div>
                <p className="text-xl font-normal">Широкий ассортимент</p>
                <p className="text-[16px] font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus amet, cursus feugiat montes, tincidunt aenean faucibus.
                  Nunc curabitur pretium pellentesque velit id.
                </p>
              </div>
              <div className="flex flex-col gap-5 max-md:items-center max-md:text-center">
                <div className="w-[142px]">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/pngwing.com.png"
                    alt="Pingwing"
                  />
                </div>
                <p className="text-xl font-normal">Широкий ассортимент</p>
                <p className="text-[16px] font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus amet, cursus feugiat montes, tincidunt aenean faucibus.
                  Nunc curabitur pretium pellentesque velit id.
                </p>
              </div>
              <div className="flex flex-col gap-5 max-md:items-center max-md:text-center">
                <div className="w-[142px]">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/about/pngwing.com.png"
                    alt="Pingwing"
                  />
                </div>
                <p className="text-xl font-normal">Широкий ассортимент</p>
                <p className="text-[16px] font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Luctus amet, cursus feugiat montes, tincidunt aenean faucibus.
                  Nunc curabitur pretium pellentesque velit id.
                </p>
              </div>
            </div>
          </section>

          <section className="my-8 max-md:text-center">
            <h2 className="text-[28px] font-normal">Отзывы наших клиентов</h2>
            <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
          </section>
        </article>

        <section className="bg-[#FFD634] my-8 py-9">
          <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] px-9">
            <div className="carousel w-full max-lg:hidden">
              <div id="slide1" className="carousel-item relative w-full">
                <div className="flex max-lg:flex-col justify-between gap-5 items-center">
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                  </div>
                  <div className="bg-white px-6 py-7">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[#FF7A1B] font-normal text-lg">
                          Алексей С.А.
                        </p>
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      sapiente saepe facilis ea magni error repellat veritatis.
                      Eius vero incidunt ipsam temporibus.
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      Voluptates corrupti iste explicabo aspernatur ut earum,
                      unde reiciendis quisquam praesentium quia, optio tenetur
                      nam! Officia fugiat culpa quibusdam? Cum tenetur soluta
                      voluptatibus eum beatae quaerat possimus pariatur rem
                      consequatur, itaque debitis rerum! Voluptatum, corrupti?
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      «Цена хорошая, все соответствует ожиданиям. Подбирала
                      перголу для своего участка. Также мне хотелось бы отметить
                      вежливость работников компании, все подробно рассказали. Я
                      считаю этот магазин отличным. И наверняка буду покупать
                      снова или советовать коллегам.»
                    </p>
                    <a
                      href="#"
                      className="text-[#FF7A1B] font-normal text-sm underline"
                    >
                      Читать полностью
                    </a>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <div className="flex max-lg:flex-col justify-between gap-5 items-center">
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                  </div>
                  <div className="bg-white px-6 py-7">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[#FF7A1B] font-normal text-lg">
                          Алексей С.А.
                        </p>
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      sapiente saepe facilis ea magni error repellat veritatis.
                      Eius vero incidunt ipsam temporibus.
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      Voluptates corrupti iste explicabo aspernatur ut earum,
                      unde reiciendis quisquam praesentium quia, optio tenetur
                      nam! Officia fugiat culpa quibusdam? Cum tenetur soluta
                      voluptatibus eum beatae quaerat possimus pariatur rem
                      consequatur, itaque debitis rerum! Voluptatum, corrupti?
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      «Цена хорошая, все соответствует ожиданиям. Подбирала
                      перголу для своего участка. Также мне хотелось бы отметить
                      вежливость работников компании, все подробно рассказали. Я
                      считаю этот магазин отличным. И наверняка буду покупать
                      снова или советовать коллегам.»
                    </p>
                    <a
                      href="#"
                      className="text-[#FF7A1B] font-normal text-sm underline"
                    >
                      Читать полностью
                    </a>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <div className="flex max-lg:flex-col justify-between gap-5 items-center">
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                  </div>
                  <div className="bg-white px-6 py-7">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[#FF7A1B] font-normal text-lg">
                          Алексей С.А.
                        </p>
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      sapiente saepe facilis ea magni error repellat veritatis.
                      Eius vero incidunt ipsam temporibus.
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      Voluptates corrupti iste explicabo aspernatur ut earum,
                      unde reiciendis quisquam praesentium quia, optio tenetur
                      nam! Officia fugiat culpa quibusdam? Cum tenetur soluta
                      voluptatibus eum beatae quaerat possimus pariatur rem
                      consequatur, itaque debitis rerum! Voluptatum, corrupti?
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      «Цена хорошая, все соответствует ожиданиям. Подбирала
                      перголу для своего участка. Также мне хотелось бы отметить
                      вежливость работников компании, все подробно рассказали. Я
                      считаю этот магазин отличным. И наверняка буду покупать
                      снова или советовать коллегам.»
                    </p>
                    <a
                      href="#"
                      className="text-[#FF7A1B] font-normal text-sm underline"
                    >
                      Читать полностью
                    </a>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <div className="flex max-lg:flex-col justify-between gap-5 items-center">
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                  </div>
                  <div className="bg-white px-6 py-7">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[#FF7A1B] font-normal text-lg">
                          Алексей С.А.
                        </p>
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      sapiente saepe facilis ea magni error repellat veritatis.
                      Eius vero incidunt ipsam temporibus.
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      Voluptates corrupti iste explicabo aspernatur ut earum,
                      unde reiciendis quisquam praesentium quia, optio tenetur
                      nam! Officia fugiat culpa quibusdam? Cum tenetur soluta
                      voluptatibus eum beatae quaerat possimus pariatur rem
                      consequatur, itaque debitis rerum! Voluptatum, corrupti?
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
                        <p className="text-sm font-light text-[#bbb]">
                          28 июня 2021
                        </p>
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
                      «Цена хорошая, все соответствует ожиданиям. Подбирала
                      перголу для своего участка. Также мне хотелось бы отметить
                      вежливость работников компании, все подробно рассказали. Я
                      считаю этот магазин отличным. И наверняка буду покупать
                      снова или советовать коллегам.»
                    </p>
                    <a
                      href="#"
                      className="text-[#FF7A1B] font-normal text-sm underline"
                    >
                      Читать полностью
                    </a>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box w-full lg:hidden">
              <div className="carousel-item w-full">
                <div className="bg-white px-6 py-7">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FF7A1B] font-normal text-lg">
                        Алексей С.А.
                      </p>
                      <p className="text-sm font-light text-[#bbb]">
                        28 июня 2021
                      </p>
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
                    sapiente saepe facilis ea magni error repellat veritatis.
                    Eius vero incidunt ipsam temporibus.
                  </p>
                  <a
                    href="#"
                    className="text-[#FF7A1B] font-normal text-sm underline"
                  >
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className="carousel-item w-full">
                <div className="bg-white px-6 py-7">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FF7A1B] font-normal text-lg">
                        Алексей С.А.
                      </p>
                      <p className="text-sm font-light text-[#bbb]">
                        28 июня 2021
                      </p>
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
                    sapiente saepe facilis ea magni error repellat veritatis.
                    Eius vero incidunt ipsam temporibus.
                  </p>
                  <a
                    href="#"
                    className="text-[#FF7A1B] font-normal text-sm underline"
                  >
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className="carousel-item w-full">
                <div className="bg-white px-6 py-7">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FF7A1B] font-normal text-lg">
                        Алексей С.А.
                      </p>
                      <p className="text-sm font-light text-[#bbb]">
                        28 июня 2021
                      </p>
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
                    sapiente saepe facilis ea magni error repellat veritatis.
                    Eius vero incidunt ipsam temporibus.
                  </p>
                  <a
                    href="#"
                    className="text-[#FF7A1B] font-normal text-sm underline"
                  >
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className="carousel-item w-full">
                <div className="bg-white px-6 py-7">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FF7A1B] font-normal text-lg">
                        Алексей С.А.
                      </p>
                      <p className="text-sm font-light text-[#bbb]">
                        28 июня 2021
                      </p>
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
                    sapiente saepe facilis ea magni error repellat veritatis.
                    Eius vero incidunt ipsam temporibus.
                  </p>
                  <a
                    href="#"
                    className="text-[#FF7A1B] font-normal text-sm underline"
                  >
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className="carousel-item w-full">
                <div className="bg-white px-6 py-7">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FF7A1B] font-normal text-lg">
                        Алексей С.А.
                      </p>
                      <p className="text-sm font-light text-[#bbb]">
                        28 июня 2021
                      </p>
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
                    sapiente saepe facilis ea magni error repellat veritatis.
                    Eius vero incidunt ipsam temporibus.
                  </p>
                  <a
                    href="#"
                    className="text-[#FF7A1B] font-normal text-sm underline"
                  >
                    Читать полностью
                  </a>
                </div>
              </div>
              <div className="carousel-item w-full">
                <div className="bg-white px-6 py-7">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#FF7A1B] font-normal text-lg">
                        Алексей С.А.
                      </p>
                      <p className="text-sm font-light text-[#bbb]">
                        28 июня 2021
                      </p>
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
                    sapiente saepe facilis ea magni error repellat veritatis.
                    Eius vero incidunt ipsam temporibus.
                  </p>
                  <a
                    href="#"
                    className="text-[#FF7A1B] font-normal text-sm underline"
                  >
                    Читать полностью
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] px-9">
          <div className="flex justify-between items-center gap-16 max-md:flex-col">
            <div className="flex flex-col gap-5">
              <h2 className="text-[28px] font-normal max-md:text-center max-md:text-[32px]">
                Реквизиты нашей компании
              </h2>
              <div className="flex justify-between items-center gap-5 max-sm:flex-col">
                <div>
                  <p className="text-16px font-semibold">
                    ООО <span className="font-normal">"ДАНИЛОВ КОММЕРЦИЯ"</span>
                  </p>
                  <p className="text-16px font-semibold">
                    Юридический адрес:{' '}
                    <span className="font-normal">
                      Москва, ул. Новокасимская д.7
                    </span>
                  </p>
                  <p className="text-16px font-semibold">
                    ИНН: <span className="font-normal">5190086002</span>
                  </p>
                  <p className="text-16px font-semibold">
                    ОГРН/ОГРНИП:{' '}
                    <span className="font-normal">1215100000906</span>
                  </p>
                </div>
                <div>
                  <p className="text-16px font-semibold">КПП: 519001001</p>
                  <p className="text-16px font-semibold">
                    Расчетный счёт:{' '}
                    <span className="font-normal">
                      0000 0000 0000 0000 в ПАО БАНК
                    </span>
                  </p>
                  <p className="text-16px font-semibold">
                    Корр./счёт:{' '}
                    <span className="font-normal">0000 0000 0000 0000</span>
                  </p>
                  <p className="text-16px font-semibold">
                    БИК: <span className="font-normal">1215100000906</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1990800449266!2d69.34949929999999!3d41.348026399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef56043309185%3A0x77b52dd73cccde47!2sExadel!5e0!3m2!1suz!2s!4v1704121134533!5m2!1suz!2s"
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
