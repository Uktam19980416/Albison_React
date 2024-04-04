import { MouseEventHandler } from 'react'
import { Auth } from '../../contexts/AuthContext'
function Feedback() {
  const darkMode = Auth().darkMode
  const showCallModal = (
    modalId: string
  ): MouseEventHandler<HTMLButtonElement> | undefined => {
    return () => {
      const modal = document.getElementById(modalId) as HTMLDialogElement
      modal?.showModal()
    }
  }
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
          <h2 className="text-[32px] font-normal max-md:text-center">
            Отзывы наших клиентов
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

        <section className="max-md:mb-5 max-md:mt-16 md:hidden">
          <h2 className="text-[28px] font-normal max-md:text-center">
            Общий рейтинг
          </h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <section className="mt-7">
          <div className="flex justify-between items-center gap-5 max-lg:flex-col">
            <div className="flex items-center justify-between w-[40%] max-lg:w-full gap-5">
              <div className="flex flex-col gap-3 max-[450px]:gap-0">
                <p className="text-[26px] max-[450px]:text-lg font-normal">
                  Общий рейтинг:
                </p>
                <div className="flex gap-4 max-[450px]:gap-1">
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                </div>
                <button
                  onClick={showCallModal('my_modal_2')}
                  className="btn bg-[#FF7A1B] text-white my-5"
                  role="button"
                  title="Оставить отзыв"
                  tabIndex={1}
                >
                  Оставить отзыв
                </button>
              </div>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box p-12">
                  <div className="flex flex-col justify-between items-center gap-2">
                    <h3 className="font-normal text-[32px] text-center">
                      Оставить отзыв
                    </h3>
                    <p className="text-sm font-light text-[#6d6d6d] text-center">
                      Оставьте, пожалуйста, честный отзыв о нас
                    </p>
                    <input
                      type="text"
                      placeholder="ФИО *"
                      className="input input-bordered w-full"
                    />
                    <input
                      type="text"
                      placeholder="Телефон *"
                      className="input input-bordered w-full"
                    />
                    <textarea
                      placeholder="Ваш отзыв"
                      className="textarea textarea-bordered textarea-lg w-full"
                    ></textarea>
                    {/* <!-- <div className="flex items-center gap-3">
                    <input type="checkbox" className="checkbox checkbox-md" />
                    <p className="text-[11px] font-light">Согласен с <span className="text-[#FF7A1B] underline">обработкой персональных данных</span></p>
                  </div> --> */}
                  </div>
                  <div className="flex flex-col gap-2 mt-5">
                    <div className="flex items-center justify-between">
                      <p>Качество:</p>
                      <div className="flex gap-2">
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Сроки:</p>
                      <div className="flex gap-2">
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Доставка:</p>
                      <div className="flex gap-2">
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Сервис:</p>
                      <div className="flex gap-2">
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star text-[#FFD634]"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between mt-5">
                    <button className="rounded-md text-lg font-normal text-white bg-[#52C12A] w-1/2 py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#52C12A] hover:border-[#52C12A]">
                      Опубликовать
                    </button>
                    <p className="text-[#2B150D] text-sm font-light">
                      Прикрепить фотографию
                    </p>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <div className="border-[10px] border-[#52C12A] rounded-full p-5">
                <p className="text-[80px] max-[450px]:text-[50px] font-light">
                  4,8
                </p>
              </div>
            </div>
            <div className="w-[60%] max-lg:w-full px-[70px] max-md:px-6 py-[50px] max-md:py-9 shadow shadow-stone-500">
              <div className="flex justify-between items-center">
                <p className="text-[22px] max-[450px]:text-lg font-light">
                  Качество:
                </p>
                <div className="flex items-center gap-4 max-[450px]:gap-1">
                  <span className="text-[#2b1500] block text-[22px] max-[450px]:text-lg">
                    (5,0)
                  </span>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[22px] font-light max-[450px]:text-lg">
                  Сроки:
                </p>
                <div className="flex items-center gap-4 max-[450px]:gap-1">
                  <span className="text-[#2b1500] block text-[22px] max-[450px]:text-lg">
                    (4,0)
                  </span>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-regular fa-star text-[#d1d1d1] text-2xl max-[450px]:text-lg"></i>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[22px] max-[450px]:text-lg font-light">
                  Доставка:
                </p>
                <div className="flex items-center gap-4 max-[450px]:gap-1">
                  <span className="text-[#2b1500] block text-[22px] max-[450px]:text-lg">
                    (5,0)
                  </span>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[22px] max-[450px]:text-lg font-light">
                  Сервис:
                </p>
                <div className="flex items-center gap-4 max-[450px]:gap-1">
                  <span className="text-[#2b1500] block text-[22px] max-[450px]:text-lg">
                    (5,0)
                  </span>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                  <i className="fa-solid fa-star text-[#FFD634] text-2xl max-[450px]:text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-10">
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1 mt-10">
              <div className="flex flex-col gap-3">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/news1.png"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold text-[#FF7A1B]">
                  Как выбрать беседку для дачи
                </p>
                <p className="text-xs font-normal text-[#bbb]">
                  19 сентября 2021
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a
                  href="#"
                  className="text-sm font-light text-[#FF7A1B] underline"
                >
                  Читать далее {'>'}
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/news2.png"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold text-[#FF7A1B]">
                  Как выбрать беседку для дачи
                </p>
                <p className="text-xs font-normal text-[#bbb]">
                  19 сентября 2021
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a
                  href="#"
                  className="text-sm font-light text-[#FF7A1B] underline"
                >
                  Читать далее {'>'}
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/news3.png"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold text-[#FF7A1B]">
                  Как выбрать беседку для дачи
                </p>
                <p className="text-xs font-normal text-[#bbb]">
                  19 сентября 2021
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a
                  href="#"
                  className="text-sm font-light text-[#FF7A1B] underline"
                >
                  Читать далее {'>'}
                </a>
              </div>
              <div className="flex flex-col gap-3 max-[400px]:hidden">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/news2.png"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold text-[#FF7A1B]">
                  Как выбрать беседку для дачи
                </p>
                <p className="text-xs font-normal text-[#bbb]">
                  19 сентября 2021
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a
                  href="#"
                  className="text-sm font-light text-[#FF7A1B] underline"
                >
                  Читать далее {'>'}
                </a>
              </div>
              <div className="flex flex-col gap-3 max-md:hidden">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/news3.png"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold text-[#FF7A1B]">
                  Как выбрать беседку для дачи
                </p>
                <p className="text-xs font-normal text-[#bbb]">
                  19 сентября 2021
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a
                  href="#"
                  className="text-sm font-light text-[#FF7A1B] underline"
                >
                  Читать далее {'>'}
                </a>
              </div>
              <div className="flex flex-col gap-3 max-md:hidden">
                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="./build/img/news1.png"
                    alt=""
                  />
                </div>
                <p className="text-xl font-semibold text-[#FF7A1B]">
                  Как выбрать беседку для дачи
                </p>
                <p className="text-xs font-normal text-[#bbb]">
                  19 сентября 2021
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris
                  adipiscing congue tortor bibendum condimentum sociis lorem.
                  Nibh ut ornare nec est pharetra, tortor egestas quam non.
                  Aenean felis sed mauris eu. Nisi pellentesque.
                </p>
                <a
                  href="#"
                  className="text-sm font-light text-[#FF7A1B] underline"
                >
                  Читать далее {'>'}
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8 max-md:w-full">
              <button className="btn bg-[#FF7A1B] text-white text-[22px] max-md:text-[16px] w-1/2 md:hidden max-[500px]:w-full">
                Показать еще
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Feedback