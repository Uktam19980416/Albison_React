import { Auth } from '../../contexts/AuthContext'

function Contact() {
  const darkMode = Auth().darkMode
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <main className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
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

        <section className="mb-8">
          <h2 className="text-[28px] font-normal">Контакты</h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <div className="flex gap-3 bg-[#FFD634] items-center py-3 px-4 w-full md:hidden max-md:mt-6">
          <i className="fa-solid fa-bars text-white text-2xl cursor-pointer text-[26px]"></i>
          <p className="text-[26px] font-normal text-center w-full">
            Каталог товаров
          </p>
        </div>

        <section className="max-md:mt-5">
          <div className="flex gap-7 max-md:flex-col">
            <div className="flex flex-col gap-4 w-1/2 max-md:w-full max-md:justify-center max-md:items-center">
              <h2 className="text-2xl font-normal">Главный офис</h2>
              <hr className="w-full h-[2px] bg-[#E8E8E8] block md:hidden" />
              <div className="flex items-start gap-4">
                <div>
                  <i className="fa-solid fa-location-dot text-[#FF7A1B]"></i>
                </div>
                <div>
                  <p className="text-lg font-normal leading-[172%]">
                    г. Москва. Малый казенный пер. д. 2/1 стр. 2
                  </p>
                  <p className="text-lg font-light text-[#bbb] leading-[172%]">
                    (10 мин. от метро курская или китай-город)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <i className="fa-solid fa-clock text-[#FF7A1B]"></i>
                </div>
                <div>
                  <p className="text-lg font-normal leading-[172%]">
                    График работы офиса:
                  </p>
                  <p className="text-lg font-light text-[#bbb] leading-[172%]">
                    Пн-Пт с 09:00 до 19:00. Без перерыва
                  </p>
                </div>
              </div>
              <p className="text-[#bbb] text-sm font-normal leading-[130%] ml-8">
                Обращаем Ваше внимание, что по данному адресу нет шоурума.
              </p>
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202845.2009510306!2d-122.20590425182338!3d37.40268918026299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20Kaliforniya%2C%20Amerika%20Qo%E2%80%98shma%20Shtatlari!5e0!3m2!1suz!2s!4v1704189805785!5m2!1suz!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2 max-md:w-full max-md:items-center">
              <h2 className="text-2xl font-normal">Наш склад</h2>
              <hr className="w-full h-[2px] bg-[#E8E8E8] block md:hidden" />
              <div className="flex items-start gap-4">
                <div>
                  <i className="fa-solid fa-location-dot text-[#FF7A1B]"></i>
                </div>
                <div>
                  <p className="text-lg font-normal leading-[172%]">
                    г. Люберцы, ул Гаршина д. 36
                  </p>
                  <p className="text-lg font-light text-[#bbb] leading-[172%]">
                    Как добраться
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div>
                  <i className="fa-solid fa-clock text-[#FF7A1B]"></i>
                </div>
                <div>
                  <p className="text-lg font-normal leading-[172%]">
                    График работы офиса:
                  </p>
                  <p className="text-lg font-light text-[#bbb] leading-[172%]">
                    Пн-Пт с 09:00 до 19:00. Без перерыва
                  </p>
                </div>
              </div>
              <p className="text-[#bbb] text-sm font-normal leading-[130%] ml-8">
                &nbsp;
              </p>
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47956.51287142186!2d69.27360776953125!3d41.302727300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef515ffb8e2db%3A0x411eb527e3721199!2sEPAM%20Uzbekistan!5e0!3m2!1suz!2s!4v1704189910743!5m2!1suz!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-2xl font-normal max-md:text-center max-2xl:text-center">
            Контактный центр
          </h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block md:hidden mt-4" />
          <div className="flex items-center justify-between max-2xl:flex-col">
            <div className="w-1/2 flex flex-col gap-5 max-2xl:gap-10 max-2xl:w-full">
              <div className="flex flex-col max-2xl:gap-2">
                <p className="text-[16px] font-light leading-[172%] mt-5">
                  Ответим на любые ваши вопросы, проконсультируем в выборе и
                  комплектации оборудования и расходных материалов, расскажем о
                  способах оплаты и доставки, уточним наличие на складе.
                </p>
                <p className="text-[16px] font-normal leading-[190%]">
                  График работы менеджеров:{' '}
                  <span className="font-light">09:00 - 23:59</span>
                </p>
                <p className="text-[16px] font-normal leading-[190%]">
                  Приём заказов через сайт:{' '}
                  <span className="font-light">Круглосуточно</span>
                </p>
                <p className="text-[16px] font-normal leading-[190%]">
                  Круглосуточно По поводу приобретения,{' '}
                  <span className="font-light">
                    обращайтесь к менеджеру магазина.
                  </span>
                </p>
              </div>
              <div className="w-full flex gap-5 max-2xl:flex-col">
                <a
                  href="#"
                  className="w-1/3 max-2xl:w-full py-2 bg-[#FFD634] text-center text-[16px] font-normal"
                >
                  Заказать обратный звонок
                </a>
                <a
                  href="#"
                  className="w-1/3 max-2xl:w-full py-2 bg-[#F9F8F3] text-center text-[16px] font-normal"
                >
                  Задать вопрос Online
                </a>
              </div>
              <div className="flex max-2xl:hidden">
                <p className="text-[16px] font-normal leading-[132%] mt-11">
                  Или свяжитесь с нами самостоятельно{' '}
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="507"
                    height="81"
                    viewBox="0 0 507 81"
                    fill="none"
                  >
                    <path
                      d="M506.5 0.5L489.195 1.24403L498.492 15.8582L506.5 0.5ZM0 79C21.0874 79 109.156 82.9087 209.794 76.1404C310.37 69.3761 423.883 51.9334 495.857 9.04745L494.321 6.47027C423.02 48.9559 310.157 66.3837 209.592 73.1471C109.088 79.9065 21.2508 76 0 76L0 79Z"
                      fill="#E8E8E8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="py-[70px] px-[60px] max-sm:py-7 max-sm:px-[22px] flex items-center justify-between shadow shadow-slate-600 w-1/2 max-2xl:mt-5 max-2xl:w-full max-[460px]:flex-col">
              <p className="text-[18px] font-normal leading-[132%] hidden max-[460px]:block opacity-70 mb-5 text-center">
                Или свяжитесь с нами самостоятельно{' '}
              </p>
              <div className="flex flex-col gap-10 max-[460px]:gap-2">
                <div>
                  <p className="text-[28px] max-2xl:text-2xl font-light">
                    8 (800)
                    <span className="font-semibold text-[#FF7A1B]">
                      {' '}
                      800-00-00
                    </span>
                  </p>
                  <p className="text-[16px] font-normal">Москва</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[28px] max-2xl:text-2xl font-light">
                    8 (495)
                    <span className="font-semibold text-[#FF7A1B]">
                      {' '}
                      700-00-00
                    </span>
                  </p>
                  <p className="text-[16px] font-normal">Вся Россия</p>
                </div>
              </div>
              <div className="flex flex-col gap-10 mt-2 max-[460px]:gap-2">
                <div>
                  <p className="text-[28px] max-2xl:text-2xl font-light">
                    8 (800)
                    <span className="font-semibold text-[#FF7A1B]">
                      {' '}
                      800-00-00
                    </span>
                  </p>
                  <p className="text-[16px] font-normal">e-mail</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[28px] max-2xl:text-2xl font-light">
                    8 (495)
                    <span className="font-semibold text-[#FF7A1B]">
                      {' '}
                      700-00-00
                    </span>
                  </p>
                  <p className="text-[16px] font-normal">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact
