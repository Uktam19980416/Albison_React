import { MouseEventHandler } from "react"
import { Auth } from '../../contexts/AuthContext'
function Delivery() {
  const darkMode = Auth().darkMode
  const showCallModal = (modalId: string): MouseEventHandler<HTMLAnchorElement> | undefined => {
    return () => {
      const modal = document.getElementById(modalId) as HTMLDialogElement
      modal?.showModal()
    }
  } 
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

        <section>
          <h2 className="text-[32px] font-normal">Доставка и оплата</h2>
        </section>

        <div className="flex gap-3 bg-[#FFD634] items-center py-3 px-4 w-full md:hidden max-md:mt-6">
          <i className="fa-solid fa-bars text-white text-2xl cursor-pointer text-[26px]"></i>
          <p className="text-[26px] font-normal text-center w-full">
            Каталог товаров
          </p>
        </div>

        <section className="my-8 max-md:text-center">
          <h2 className="text-[28px] font-normal">
            Доставка по Москве и области
          </h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <section className="py-12 px-16 max-md:px-0">
          <div className="flex justify-between gap-5 max-md:flex-col">
            <div className="flex flex-col gap-12 w-1/2 max-md:w-full">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-normal ml-4">
                  Доставка по Москве
                </h2>
                <div className="bg-[#FFD634] py-2 px-4 w-fit max-md:w-full">
                  <p className="text-lg font-light">
                    Бесплатная доставка при заказе от 30 000 руб
                  </p>
                </div>
                <ul className="ml-8">
                  <li className="list-disc text-[16px] font-normal">
                    Быстрая и удобная доставка,{' '}
                    <span className="font-light">нашей курьерской службой</span>
                  </li>
                  <li className="list-disc text-[16px] font-normal">
                    Срок доставки:{' '}
                    <span className="font-light">
                      от 3 часов с момента подтверждения заказа.
                    </span>
                  </li>
                  <li className="list-disc text-[16px] font-normal">
                    Стоимость доставки:{' '}
                    <span className="font-light">
                      в пределах МКАД : Бесплатно!
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-normal ml-4">
                  Доставка по Московской области{' '}
                </h2>
                <div className="bg-[#FFD634] py-2 px-4 w-fit max-md:w-full">
                  <p className="text-lg font-light">
                    Более 5км от МКАД - от 390 рублей
                  </p>
                </div>
                <ul className="ml-8">
                  <li className="list-disc text-[16px] font-normal">
                    Доставка по МО более 5км от МКАД:{' '}
                    <span className="font-light">
                      390руб., + 15руб. за 1км.
                    </span>
                  </li>
                  <li className="list-disc text-[16px] font-light">
                    {' '}
                    У вас есть возможность вскрыть упаковку и осмотреть товар.
                  </li>
                  <li className="list-disc text-[16px] font-normal">
                    Срок доставки:{' '}
                    <span className="font-light">
                      от 3 часов с момента подтверждения заказа
                    </span>
                  </li>
                  <li className="list-disc text-[16px] font-normal">
                    Время доставки курьером:{' '}
                    <span className="font-light">с 8:00 до 24:00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2 max-md:w-full">
              <h2 className="text-2xl font-normal ml-4">Время доставки</h2>
              <div className="bg-[#FFD634] py-2 px-4 w-fit max-md:w-full">
                <p className="text-lg font-light">
                  Доставка выполняется ежедневно, без выходных
                </p>
              </div>
              <ul className="ml-8">
                <li className="list-disc text-[16px] font-normal">
                  Время доставки согласовывается с менеджером, который
                  обязательно свяжется с Вами сразу после того, как Вы
                  разместите свой заказ!
                </li>
                <li className="list-disc text-[16px] font-light">
                  {' '}
                  Доставка выполняется ежедневно, без выходных.
                </li>
                <li className="list-disc text-[16px] font-normal">
                  Время доставки уточняется менеджером, в зависимости от
                  загруженности курьерской службы.
                </li>
                <li className="list-disc text-[16px] font-normal">
                  {' '}
                  Если необходимо доставить товар по иному адресу, необходимо
                  сообщить адрес менеджеру службы доставки, который свяжется с
                  Вами непосредственно после оформления заказа на сайте.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-8 max-md:text-center">
          <h2 className="text-[28px] font-normal">Доставка по России</h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <section>
          <div className="flex justify-between gap-24 max-lg:flex-col">
            <div className="flex flex-col gap-5">
              <p className="text-[22px] font-normal">
                Стоимость доставки рассчитывается индивидуально!
              </p>
              <p className="text-xl font-light">
                Рассчитать сроки и стоимость доставки может наш менеджер, или
                можете сделать это самостоятельно:
              </p>
              <p className="text-lg font-normal text-[#FF7A1B]">
                Калькулятор стоимости доставки:
              </p>
              <div className="flex items-center justify-between gap-2">
                <div className="py-4 px-7 border-[1px] border-solid border-[#bbb]">
                  <img src="./build/img/delivery/pay1.png" alt="" />
                </div>
                <div className="py-[22px] px-7 border-[1px] border-solid border-[#bbb]">
                  <img src="./build/img/delivery/pay2.png" alt="" />
                </div>
                <div className="py-11 px-7 border-[1px] border-solid border-[#bbb]">
                  <img src="./build/img/delivery/pay3.png" alt="" />
                </div>
              </div>
              <div className="flex items-center justify-between max-sm:flex-col max-sm:text-center max-sm:gap-2">
                <div className="w-[60%]">
                  <p>За более детальной информацией</p>
                  <p>вы можете обратиться к нашим менеджерам.</p>
                </div>
                <div className="w-[40%] max-sm:w-3/4 bg-[#FF7A1B] text-center py-3 rounded-[6px] hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B] cursor-pointer">
                  <a
                    href="#"
                    className="text-[16px] text-white hover:text-[#FF7A1B]"
                    onClick={showCallModal('my_modal_2')}
                  >
                    Задать вопрос Online
                  </a>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box flex flex-col justify-between items-center gap-2">
                      <h3 className="font-normal text-[32px] text-center text-black">
                        Задать вопрос
                      </h3>
                      <p className="text-sm font-light text-[#6d6d6d] text-center">
                        Заполните, пожалуйста, поля ниже, чтобы мы могли
                        связаться с вами.
                      </p>
                      <input
                        type="text"
                        placeholder="Имя *"
                        className="input input-bordered w-full"
                      />
                      <input
                        type="number"
                        placeholder="Телефон *"
                        className="input input-bordered w-full"
                      />
                      <textarea
                        placeholder="Ваш вопрос"
                        className="textarea textarea-bordered textarea-lg w-full"
                      ></textarea>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-md"
                        />
                        <p className="text-[11px] font-light">
                          Согласен с{' '}
                          <span className="text-[#FF7A1B] underline">
                            обработкой персональных данных
                          </span>
                        </p>
                      </div>
                      <div className="w-full flex items-center justify-between mt-5 gap-3">
                        <button className="rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-1/2 py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                          Опубликовать
                        </button>
                        <button className="rounded-md text-lg font-normal text-[#bbb] bg-[#F9F8F3] w-1/2 py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#F9F8F3] hover:border-[#F9F8F3]">
                          Отмена
                        </button>
                      </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-solid border-[#bbb] p-[46px] max-lg:text-center">
              <p className="text-2xl font-normal">Оплата наложенным платежом</p>
              <p className="text-lg font-light">
                осуществляется доставка только «Почтой России» или «EMS Почта
                России».
              </p>

              <hr className="w-full h-[2px] bg-[#E8E8E8] block my-10" />

              <p className="text-2xl font-normal">
                Быстрая экспресс доставка 1-3 дня
              </p>
              <p className="text-lg font-light">
                по России «PONYEXPRESS» оплачивается предоплатой на выставленный
                счет "СБЕРБАНК".
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FFD634] my-20 pl-14 max-md:pl-0">
          <div className="flex justify-between items-center gap-5 max-md:text-center">
            <div className="flex flex-col gap-3 py-10">
              <p className="text-[40px] font-semibold text-[#2B150D] leading-[114%] max-lg:text-4xl max-[400px]:text-3xl">
                Доставляем по всей России транспортными компаниями.
              </p>
              <p className="text-[40px] font-light text-[#2B150D] max-lg:text-[33px] max-[400px]:text-2xl">
                Более 1411 пунктов выдачи
              </p>
              <p className="text-[26px] font-normal text-[#2B150D]">
                Куда нужно доставить товар?
              </p>
              <div className="flex gap-[10px] max-md:gap-4 max-md:justify-center">
                <a
                  href="#"
                  className="text-[16px] font-normal py-3 px-5 bg-white rounded-[6px]"
                >
                  Москва и область
                </a>
                <a
                  href="#"
                  className="text-[16px] font-normal py-3 px-5 bg-white rounded-[6px]"
                >
                  По всей России
                </a>
              </div>
            </div>
            <div className="w-full max-md:hidden">
              <img
                src="./build/img/delivery/map.png"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="my-8 max-md:text-center">
          <h2 className="text-[28px] font-normal">Способы оплаты</h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <section>
          <div className="grid grid-cols-7 gap-3 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[400px]:grid-cols-2 max-[300px]:grid-cols-1">
            <div className="h-[130px] shadow shadow-neutral-600 flex items-center justify-center">
              <img src="./build/img/delivery/wallet.png" alt="" />
            </div>
            <div className="h-[130px] shadow shadow-neutral-600 flex items-center justify-center">
              <img src="./build/img/delivery/visa.png" alt="" />
            </div>
            <div className="h-[130px] shadow shadow-neutral-600 flex items-center justify-center">
              <img src="./build/img/delivery/mastercard.png" alt="" />
            </div>
            <div className="h-[130px] shadow shadow-neutral-600 flex items-center justify-center">
              <img src="./build/img/delivery/yandex.png" alt="" />
            </div>
            <div className="h-[130px] shadow shadow-neutral-600 flex items-center justify-center">
              <img src="./build/img/delivery/sber.png" alt="" />
            </div>
            <div className="h-[130px] shadow shadow-neutral-600 flex items-center justify-center">
              <img src="./build/img/delivery/qiwi.png" alt="" />
            </div>
            <div className="h-[130px] shadow shadow-neutral-600 flex items-center justify-center">
              <img src="./build/img/delivery/webmoney 2.png" alt="" />
            </div>
          </div>
        </section>

        <section className="my-8 max-md:text-center">
          <h2 className="text-[28px] font-normal">Транспортные партнёры</h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <section>
          <div className="grid grid-cols-5 gap-3 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[400px]:grid-cols-2 max-[300px]:grid-cols-1">
            <div className="flex flex-col justify-center items-center">
              <div className="h-[180px] px-5 shadow shadow-neutral-600 flex items-center justify-center">
                <img src="./build/img/delivery/line.png" alt="Line" />
              </div>
              <p className="text-[16px] font-light text-center">
                Деловые линии - <span className="text-sm">dellin.ru</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-[180px] px-5 shadow shadow-neutral-600 flex items-center justify-center">
                <img src="./build/img/delivery/postRussia.png" alt="Line" />
              </div>
              <p className="text-[16px] font-light text-center">
                Деловые линии - <span className="text-sm">dellin.ru</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-[180px] px-5 shadow shadow-neutral-600 flex items-center justify-center">
                <img src="./build/img/delivery/ems.png" alt="Line" />
              </div>
              <p className="text-[16px] font-light text-center">
                Деловые линии - <span className="text-sm">dellin.ru</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-[180px] px-5 shadow shadow-neutral-600 flex items-center justify-center">
                <img src="./build/img/delivery/pony.png" alt="Line" />
              </div>
              <p className="text-[16px] font-light text-center">
                Деловые линии - <span className="text-sm">dellin.ru</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-[180px] px-5 shadow shadow-neutral-600 flex items-center justify-center">
                <img src="./build/img/delivery/pek.png" alt="Line" />
              </div>
              <p className="text-[16px] font-light text-center">
                Деловые линии - <span className="text-sm">dellin.ru</span>
              </p>
            </div>
          </div>
        </section>

        <section className="text-center my-10 w-2/3 mx-auto max-md:hidden">
          <p className="text-[16px] font-light leading-[160%]">
            Высокий уровень сервиса: более 95% киентов довольны сотрудничеством
            с нами. Мы арантируем качество и долговечность поставляемых изделий.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Delivery
