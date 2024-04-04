import footerLogo from '../../../assets/img/footer-logo.png'
import visa from '../../../assets/img/VISA.png'
import jcb from '../../../assets/img/JCB.png'
import maestro from '../../../assets/img/MAESTRO.png'
import mastercard from '../../../assets/img/MASTERCARD.png'
import yandex from '../../../assets/img/yandex 1.png'
import mir from '../../../assets/img/МИР.png'
import FooterResponsive from './FooterResponsive'
function Footer() {
  return (
    <>
      <footer className="bg-[#1F1F1F] py-6 max-md:hidden">
        <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
          <div className="flex justify-between items-center max-xl:flex-col">
            <div className="flex gap-[88px] items-center">
              <div className="flex flex-col items-center">
                <div className="text-center">
                  <img src={footerLogo} alt="Logo" />
                </div>
                <p className="text-sm font-normal text-white text-center">
                  Логотип вашего магазина
                </p>
              </div>
              <div>
                <p className="text-lg font-normal text-white">Наш адрес:</p>
                <p className="text-lg font-normal text-white">
                  Москва, ул. Новокосимская д.7
                </p>
              </div>
            </div>
            <div className="flex gap-[88px] items-center max-xl:hidden">
              <div>
                <p className="text-lg font-normal text-white">График работы:</p>
                <p className="text-lg font-normal text-white">
                  Ежедневно с <span className="text-[#FF7A1B]">9:00</span> до{' '}
                  <span className="text-[#FF7A1B]">21:00</span>
                </p>
              </div>
              <div>
                <button className="btn bg-[#FF7A1B] text-white text-[16px] font-normal btn-wide hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 bg-[#bbb] h-[1px] opacity-50" />

          <div className="flex justify-between items-start max-xl:flex-col max-xl:items-center max-xl:gap-5">
            <div className="flex gap-16 items-start">
              <nav>
                <p className="text-[16px] font-normal text-white">
                  Для покупателей:
                </p>
                <ul className="flex flex-col gap-4 mt-4">
                  <li className="list-none">
                    <a
                      href="./delivery.html"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Доставка
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Гарантия
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="./feedback.html"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Отзывы
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="./gallery.html"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Наши работы
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <p className="text-[16px] font-normal text-white">
                  О компании:
                </p>
                <ul className="flex flex-col gap-4 mt-4">
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      О Нас
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="./delivery.html"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Доставка и оплата
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="./gallery.html"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Наши работы
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="./contacts.html"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Контакты
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Гарантия
                    </a>
                  </li>
                </ul>
              </nav>
              <nav>
                <p className="text-[16px] font-normal text-white">Категории:</p>
                <ul className="flex flex-col gap-4 mt-4">
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Беседки
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Бани
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Площадки
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
                    >
                      Дома
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      href="#"
                      className="text-sm font-normal text-white opacity-75"
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
              </nav>
            </div>
            <div className="flex items-start gap-[86px]">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-normal text-white">
                  Для регионов(звонок бесплатный)
                </p>
                <p className="text-2xl font-light text-white">
                  8 (800){' '}
                  <span className="font-semibold text-[#FF7A1B]">
                    800-00-00
                  </span>
                </p>
                <p className="text-sm font-normal text-white">
                  Email:{' '}
                  <a href="mailto:youremail@mailbox.ru">youremail@mailbox.ru</a>
                </p>
                <p className="text-[16px] font-normal text-white">
                  Мы в соц.сетях:
                </p>
                <div className="flex gap-4">
                  <p className="w-[32px] h-[32px] rounded-full text-white border-[1px] border-white flex justify-center items-center cursor-pointer hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                    <i className="fa-brands fa-whatsapp"></i>
                  </p>
                  <p className="w-[32px] h-[32px] rounded-full text-white border-[1px] border-white flex justify-center items-center cursor-pointer hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                    <i className="fa-brands fa-youtube"></i>
                  </p>
                  <p className="w-[32px] h-[32px] rounded-full text-white border-[1px] border-white flex justify-center items-center cursor-pointer hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                    <i className="fa-brands fa-instagram"></i>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-normal text-white">
                  Для Москвы и Московской области
                </p>
                <p className="text-2xl font-light text-white">
                  8 (495){' '}
                  <span className="font-semibold text-[#FF7A1B]">
                    700-00-00
                  </span>
                </p>
                <p className="text-sm font-normal text-white">
                  <a href="#">Сообщить об ошибке на сайте</a>
                </p>
                <p className="text-sm font-semibold text-white">
                  ООО <span className="font-light">"Фаза Групп"</span>
                </p>
                <p className="text-sm font-semibold text-white">
                  ИНН: <span className="font-light">7751140879</span>
                </p>
                <p className="text-sm font-semibold text-white">
                  ОГРН: <span className="font-light">1187746273461</span>
                </p>
              </div>
            </div>
          </div>
          <hr className="my-6 bg-[#bbb] h-[1px] opacity-50" />

          <div className="flex justify-between items-center max-xl:flex-col max-xl:gap-5">
            <div className="flex flex-col gap-1 max-xl:flex-row">
              <a
                href="./policy.html"
                className="text-lg font-normal text-white opacity-75 underline"
              >
                Публичная оферта
              </a>
              <p className="text-sm font-normal text-white opacity-75">
                2013-2021 - Товары для дач,
              </p>
              <p className="text-sm font-normal text-white opacity-75">
                деревянные конструкции под любые нужды
              </p>
            </div>
            <div className="flex justify-between items-center gap-14">
              <p className="text-sm font-normal text-white opacity-75">
                Принимаем к оплате:
              </p>
              <div className="flex gap-6 items-center">
                <img src={visa} alt="Visa" />
                <img src={jcb} alt="JCB" />
                <img src={maestro} alt="Maestro" />
                <img src={mastercard} alt="Mastercard" />
                <img src={yandex} alt="Yandex" />
                <img src={mir} alt="MIR" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterResponsive />
    </>
  )
}

export default Footer
