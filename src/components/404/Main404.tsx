import besedka from '../../assets/img/Беседка.png'
import besedkaSmall from '../../assets/img/small/Беседка.png'
import banya from '../../assets/img/Баня.png'
import banyaSmall from '../../assets/img/small/Баня.png'
import gorka from '../../assets/img/Горка.png'
import gorkaSmall from '../../assets/img/small/Горка.png'
import perg from '../../assets/img/Perg.png'
import pergSmall from '../../assets/img/small/Perg.png'
import house from '../../assets/img/House.png'
import starSmall from '../../assets/img/small/Star.png'
import xitPng from '../../assets/img/xit.png'
import { useState } from 'react'
import { Auth } from '../../contexts/AuthContext'

function Main404() {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const handleChange = (): void => {
    setIsChecked(!isChecked)
  }
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
                страница не найдена
              </a>
            </li>
          </ul>
        </div>

        <section className="mb-8 max-md:mt-5">
          <h2 className="text-[45px] font-normal max-md:text-center max-md:text-[32px]">
            Страница не найдена
          </h2>
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

        <section className="mb-8 max-md:mt-5">
          <h2 className="text-[16px] font-normal max-md:text-center max-md:text-lg">
            Страница не найдена, пожалуйста{' '}
            <a href="#" className="text-[#FF7A1B] underline">
              перейдите на главную
            </a>
          </h2>
        </section>

        <section>
          <div className="flex justify-between gap-[60px] max-md:flex-col">
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-[23px]">Почему так бывает?</h2>
                <ul className="pl-5">
                  <li className="list-disc font-light">
                    изменился адрес, а в некоторых источниках он по-прежнему
                    указан по-старому
                  </li>
                  <li className="list-disc font-light">
                    при наборе адреса страницы была допущена опечатка или ошибка
                  </li>
                  <li className="list-disc font-light">
                    на некоторых форумах указаны неправильные, сильно
                    сокращенные ссылки
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[23px]">Рекомендуем:</h2>
                <ul className="pl-5">
                  <li className="list-disc font-light">
                    Рекомендуем: вернуться на главную страницу
                  </li>
                  <li className="list-disc font-light">
                    выбрать одну из категорий:{' '}
                    <span className="text-[#FF7A1B]">
                      Беседки, Бани, Дома, Площадки, Перголы, Бренды
                    </span>
                  </li>
                  <li className="list-disc font-light">
                    позвонить нам по номеру 8 (800) 800-00-00 и наши менеджеры
                    помогут Вам решить любой вопрос, или воспользоваться формой
                    обратной связи
                  </li>
                </ul>
              </div>
              <p className="text-[23px] font-normal">
                Можете так-же воспользоваться нашим поиском
              </p>
              <div className="w-full flex items-center">
                <input
                  className="w-[80%] border-[1px] border-[#E8E8E8] rounded-[5px] py-2 px-4 focus:outline-none focus:border-[#FFD634]"
                  type="text"
                  placeholder="Поиск по каталогу..."
                />
                <button className="w-[20%] bg-[#FFD634] text-black text-[16px] font-normal py-2 rounded-[5px] hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#ffd634] hover:border-[#ffd634]">
                  Поиск
                </button>
              </div>
            </div>
            <div className="p-10 shadow shadow-slate-800 max-md:px-5">
              <h2 className="text-2xl font-normal">Форма обратной связи:</h2>
              <input
                type="text"
                placeholder="Ваше имя *"
                className="input input-bordered w-full mt-2"
              />
              <input
                type="email"
                placeholder="Ваш почтовый ящик *"
                className="input input-bordered w-full mt-2"
              />
              <input
                type="number"
                placeholder="Ваш номер телефона"
                className="input input-bordered w-full mt-2"
              />
              <input
                type="text"
                placeholder="Текст сообщения..."
                className="input input-bordered w-full mt-2"
              />
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full mt-2"
              ></textarea>
              <div className="flex items-center justify-between mt-2 max-md:flex-col">
                <button
                  type="button"
                  className="btn block bg-[#FF7A1B] text-white max-md:w-full"
                >
                  Отправить
                </button>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      defaultChecked={isChecked}
                      onChange={handleChange}
                      className="checkbox checkbox-warning"
                    />
                    <span className="label-text text-sm font-normal ml-2">
                      Согласен с условиями{' '}
                      <span className="text-[#FF7A1B]">соглашения</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-5">
            <h1 className="text-[32px] font-normal max-md:text-center">
              Категории
            </h1>
          </div>

          <div className="grid grid-cols-3 grid-rows-6 gap-4 max-md:hidden">
            <a
              href="./category.html"
              className="flex flex-col justify-between row-span-6 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-[26px] font-semibold">Беседки</h2>
                <div className="flex gap-8">
                  <div className="hidden lg:block">
                    <p className="text-[14px] font-normal">Подкатегория 1</p>
                    <p className="text-[14px] font-normal">Подкатегория 2</p>
                    <p className="text-[14px] font-normal">Подкатегория 3</p>
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-[14px] font-normal">Подкатегория 4</p>
                    <p className="text-[14px] font-normal">Подкатегория 5</p>
                    <p className="text-[14px] font-normal">Подкатегория 6</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto">
                <img src={besedka} alt="House" />
              </div>
            </a>

            <a
              href="./category.html"
              className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] font-semibold">Бани</h2>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 1
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 2
                </p>
              </div>
              <div>
                <img src={banya} alt="Bathroom" />
              </div>
            </a>

            <a
              href="./category.html"
              className="flex justify-between items-center row-span-3 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] font-semibold">Детские площадки</h2>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 1
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 2
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 3
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 4
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 5
                </p>
              </div>
              <div>
                <img src={gorka} alt="Gorka" />
              </div>
            </a>

            <a
              href="./category.html"
              className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] font-semibold">Перголы</h2>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 1
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 2
                </p>
              </div>
              <div>
                <img src={perg} alt="Perg" />
              </div>
            </a>

            <a
              href="./category.html"
              className="flex justify-between items-center row-span-3 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] font-semibold">Дома</h2>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 1
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 2
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 3
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 4
                </p>
              </div>
              <div>
                <img src={house} alt="Gorka" />
              </div>
            </a>

            <a
              href="./category.html"
              className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] font-semibold">Бренды</h2>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 1
                </p>
                <p className="text-[14px] font-normal hidden lg:block">
                  Подкатегория 2
                </p>
              </div>
              <div>
                <img src={perg} alt="Perg" />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:hidden max-[400px]:grid-cols-1">
            <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] max-sm:text-xl font-normal">
                  Беседки
                </h2>
              </div>
              <div>
                <img src={besedkaSmall} alt="Bathroom" />
              </div>
            </div>

            <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] max-sm:text-xl font-normal">Дома</h2>
              </div>
              <div>
                <img src={starSmall} alt="Bathroom" />
              </div>
            </div>

            <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] max-sm:text-xl font-normal">
                  Площадки
                </h2>
              </div>
              <div>
                <img src={gorkaSmall} alt="Bathroom" />
              </div>
            </div>

            <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] max-sm:text-xl font-normal">
                  Перголы
                </h2>
              </div>
              <div>
                <img src={pergSmall} alt="Bathroom" />
              </div>
            </div>

            <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] max-sm:text-xl font-normal">Бани</h2>
              </div>
              <div>
                <img src={banyaSmall} alt="Bathroom" />
              </div>
            </div>

            <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
              <div className="flex flex-col gap-1">
                <h2 className="text-[26px] max-sm:text-xl font-normal">
                  Бренды
                </h2>
              </div>
              <div>
                <img src={starSmall} alt="Bathroom" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-5 flex justify-between max-md:justify-center items-center">
            <h1 className="text-[32px] font-normal">Хиты продаж</h1>
            <a
              href="#"
              className="text-[16px] font-normal text-[#BBB] max-md:hidden"
            >
              Все товары {'>'}
            </a>
          </div>

          <nav className="bg-[#F9F8F3]">
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

          <div className="mt-5">
            <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1">
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 flex justify-between max-md:justify-center items-center">
            <h1 className="text-[32px] font-normal">Акционные модели</h1>
            <a
              href="#"
              className="text-[16px] font-normal text-[#BBB] max-md:hidden"
            >
              Все товары {'>'}
            </a>
          </div>

          <nav className="bg-[#F9F8F3]">
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

          <div className="mt-5">
            <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1">
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                <div className="rounded-[5px] w-full">
                  <img
                    src={xitPng}
                    alt="Xit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-light opa">Articul:</p>
                  <p className="text-xs font-light opa">0000001</p>
                </div>
                <h1 className="text-lg font-normal">
                  Название товара длинное в две строки наверное
                </h1>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                    <span>Размеры:</span>
                  </p>
                  <p className="text-[13px] font-light">12.3 x 14.6 x 4.3 м.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                    <span>Площадь:</span>
                  </p>
                  <p className="text-[13px] font-light">33 м2</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                    <span>Вместимость:</span>
                  </p>
                  <p className="text-[13px] font-light">15 чел.</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] font-light">
                    <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                    <span>Гарантия:</span>
                  </p>
                  <p className="text-[13px] font-light">10 лет</p>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                        6 127 500 ₽
                      </span>
                      <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                        -25%
                      </span>
                    </p>
                    <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                      5 023 900 ₽
                    </p>
                  </div>
                  <div className="w-1/3">
                    <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main404
