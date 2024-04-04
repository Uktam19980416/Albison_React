import visa from '../../../assets/img/VISA.png'
import jcb from '../../../assets/img/JCB.png'
import maestro from '../../../assets/img/MAESTRO.png'
import mastercard from '../../../assets/img/MASTERCARD.png'
import mobLogo from '../../../assets/img/mob-logo.png'
import yandex from '../../../assets/img/yandex 1.png'

function FooterResponsive() {
  return (
    <>
      <footer className="bg-[#1F1F1F] py-6 hidden max-md:block">
        <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <img src={mobLogo} alt="Logo" />
            </div>
            <p className="text-xl font-normal text-white text-center">
              Логотип вашего магазина
            </p>
          </div>
          <hr className="my-6 bg-[#bbb] h-[3px] opacity-20" />

          <div className="flex justify-evenly items-center max-[400px]:flex-col max-[400px]:text-center max-[400px]:gap-5">
            <nav>
              <p className="text-xl font-normal text-white px-6">
                Для покупателей:
              </p>
              <hr className="my-3 bg-[#bbb] h-[3px] opacity-20" />
              <ul className="flex flex-col gap-4 mt-4 px-6">
                <li className="list-none">
                  <a
                    href="./delivery.html"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Доставка
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Гарантия
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="./feedback.html"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Отзывы
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="./gallery.html"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Наши работы
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <p className="text-xl font-normal text-white px-6">О компании:</p>
              <hr className="my-3 bg-[#bbb] h-[3px] opacity-20" />
              <ul className="flex flex-col gap-4 mt-4 px-6">
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    О Нас
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="./delivery.html"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Доставка и оплата
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="./gallery.html"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Наши работы
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="./contacts.html"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Контакты
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Гарантия
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <nav className="mt-14">
            <p className="text-xl font-normal text-white text-center">
              Категории:
            </p>
            <hr className="my-3 bg-[#bbb] h-[3px] opacity-20" />
            <div className="flex justify-around items-center">
              <ul className="flex flex-col gap-4 mt-4">
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Беседки
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Бани
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Площадки
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-4 mt-4">
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Дома
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="#"
                    className="text-lg font-normal text-white opacity-75"
                  >
                    Перголы
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="#"
                    className="text-sm font-normal text-white opacity-75"
                  >
                    Бренды
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <hr className="my-6 bg-[#bbb] h-[3px] opacity-20" />

          <h2 className="text-[32px] font-normal text-white text-center px-10">
            Контакты
          </h2>

          <div className="w-[90%] mx-auto">
            <hr className="my-6 bg-[#bbb] h-[3px] opacity-20" />
            <div>
              <p className="text-lg font-normal text-white">Наш адрес:</p>
              <p className="text-[25px] font-normal text-white">
                Москва, ул. Новокосимская д.7
              </p>
            </div>
            <br />
            <div>
              <p className="text-lg font-normal text-white">График работы:</p>
              <p className="text-[25px] font-normal text-white">
                Ежедневно с <span className="text-[#FF7A1B]">9:00</span> до{' '}
                <span className="text-[#FF7A1B]">21:00</span>
              </p>
            </div>
            <hr className="my-6 bg-[#bbb] h-[3px] opacity-20" />
            <div className="flex justify-between max-[400px]:flex-col">
              <div>
                <p className="text-lg font-normal text-white">
                  Для регионов(звонок бесплатный)
                </p>
                <p className="text-2xl font-light text-white">
                  8 (800){' '}
                  <span className="font-semibold text-[#FF7A1B]">
                    800-00-00
                  </span>
                </p>
              </div>
              <div>
                <p className="text-lg font-normal text-white">
                  Для регионов(звонок бесплатный)
                </p>
                <p className="text-2xl font-light text-white">
                  8 (800){' '}
                  <span className="font-semibold text-[#FF7A1B]">
                    800-00-00
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mt-4">
              <button
                type="button"
                className="cursor-pointer rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]"
              >
                Заказать звонок
              </button>
            </div>
            <hr className="my-6 bg-[#bbb] h-[3px] opacity-20" />
            <div className="flex flex-col items-center gap-3">
              <p className="text-lg font-normal text-white text-center">
                Email: <br />
                <a href="mailto:youremail@mailbox.ru" className="text-2xl">
                  youremail@mailbox.ru
                </a>
              </p>
              <p className="text-lg font-normal text-white">Мы в соц.сетях:</p>
              <div className="flex gap-4">
                <p className="w-[56px] h-[56px] rounded-full text-white border-[1px] border-white flex justify-center items-center cursor-pointer hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                  <i className="fa-brands fa-whatsapp text-[32px]"></i>
                </p>
                <p className="w-[56px] h-[56px] rounded-full text-white border-[1px] border-white flex justify-center items-center cursor-pointer hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                  <i className="fa-brands fa-youtube text-[32px]"></i>
                </p>
                <p className="w-[56px] h-[56px] rounded-full text-white border-[1px] border-white flex justify-center items-center cursor-pointer hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                  <i className="fa-brands fa-instagram text-[32px]"></i>
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 bg-[#bbb] h-[3px] opacity-20" />

          <div className="flex flex-col justify-between items-center gap-8">
            <p className="text-sm font-normal text-white opacity-75">
              Принимаем к оплате:
            </p>
            <div className="flex gap-6 items-center flex-wrap justify-center">
              <img className="w-[100px]" src={visa} alt="Visa" />
              <img className="w-[100px]" src={jcb} alt="JCB" />
              <img className="w-[100px]" src={maestro} alt="Maestro" />
              <img className="w-[100px]" src={mastercard} alt="Mastercard" />
              <img className="w-[100px]" src={yandex} alt="Yandex" />
            </div>
          </div>

          <div className="flex flex-col items-center mt-12">
            <p className="text-lg font-semibold text-white">
              ООО <span className="font-normal">"Фаза Групп"</span>
            </p>
            <p className="text-lg font-semibold text-white">
              ИНН: <span className="font-normal">7751140879</span>
            </p>
            <p className="text-lg font-semibold text-white">
              ОГРН: <span className="font-normal">1187746273461</span>
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-7 items-center justify-center text-center">
            <a
              href="./policy.html"
              className="text-lg font-normal text-white opacity-75 underline"
            >
              Публичная оферта
            </a>
            <p className="text-lg font-normal text-white opacity-75">
              2013-2021 - Товары для дач,
            </p>
            <p className="text-lg font-normal text-white opacity-75">
              деревянные конструкции под любые нужды
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterResponsive
