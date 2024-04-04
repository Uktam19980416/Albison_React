import { Auth } from '../../contexts/AuthContext'
function Category() {
  const darkMode = Auth().darkMode
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <main className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
        <div className="flex gap-7 items-start">
          <aside className="w-1/5 max-md:hidden">
            <input type="checkbox" className="hidden" id="forCategory" />
            <ul className="categoryDropdown flex flex-col bg-[#F6F6F6] px-5 max-[1381px]:hidden">
              <li className="list-none flex justify-between py-2 items-center">
                <div className="flex gap-5">
                  <i className="fa-solid fa-landmark-flag"></i>
                  <a href="#" className="text-sm font-normal block">
                    Беседки
                  </a>
                </div>
                <div className="dropdown dropdown-right dropdown-end">
                  <div tabIndex={0} role="button" className="m-1" title="Next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none flex justify-between py-2 items-center">
                <div className="flex gap-5">
                  <i className="fa-solid fa-landmark-flag"></i>
                  <a href="#" className="text-sm font-normal block">
                    Бани
                  </a>
                </div>
                <div className="dropdown dropdown-right dropdown-end">
                  <div tabIndex={0} role="button" className="m-1" title="Next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none flex justify-between py-2 items-center">
                <div className="flex gap-5">
                  <i className="fa-solid fa-landmark-flag"></i>
                  <a href="#" className="text-sm font-normal block">
                    Площадки
                  </a>
                </div>
                <div className="dropdown dropdown-right dropdown-end">
                  <div tabIndex={0} role="button" className="m-1" title="Next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none flex justify-between py-2 items-center">
                <div className="flex gap-5">
                  <i className="fa-solid fa-landmark-flag"></i>
                  <a href="#" className="text-sm font-normal block">
                    Дома
                  </a>
                </div>
                <div className="dropdown dropdown-right dropdown-end">
                  <div tabIndex={0} role="button" className="m-1" title="Next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none flex justify-between py-2 items-center">
                <div className="flex gap-5">
                  <i className="fa-solid fa-landmark-flag"></i>
                  <a href="#" className="text-sm font-normal block">
                    Перголы
                  </a>
                </div>
                <div className="dropdown dropdown-right dropdown-end">
                  <div tabIndex={0} role="button" className="m-1" title="Next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none flex justify-between py-2 items-center">
                <div className="flex gap-5">
                  <i className="fa-solid fa-landmark-flag"></i>
                  <a href="#" className="text-sm font-normal block">
                    Бренды
                  </a>
                </div>
                <div className="dropdown dropdown-right dropdown-end">
                  <div tabIndex={0} role="button" className="m-1" title="Next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <section className="filter">
              <div className="flex justify-between p-5 items-center">
                <p className="text-lg font-semibold">Фильтры</p>
                <p className="text-xs font-normal text-[#bbb] cursor-pointer max-[1100px]:hidden">
                  Очистить
                  <span className="text-[#FF7A1B] w-[10px] h-[10px] text-lg">
                    &times;
                  </span>
                </p>
                <p className="text-[#FF7A1B] text-lg hidden max-[1100px]:block">
                  &times;
                </p>
              </div>
              <hr className="bg-[#E8E8E8] h-[3px]" />
              <p className="text-[16px] font-semibold p-5">Срок доставки</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <input
                    id="expire"
                    type="radio"
                    name="radio-1"
                    className="radio checked:radio-warning"
                  />
                  <label
                    htmlFor="expire"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Доступен самовывоз
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(192)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="deliver"
                    type="radio"
                    name="radio-1"
                    className="radio checked:radio-warning"
                  />
                  <label
                    htmlFor="deliver"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Доставка до 3х дней
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(11)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="preorder"
                    type="radio"
                    name="radio-1"
                    className="radio checked:radio-warning"
                  />
                  <label
                    htmlFor="preorder"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Под заказ
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(122)</p>
                </div>
              </div>
              <hr className="bg-[#E8E8E8] h-[3px] my-6" />
              <p className="text-[16px] font-semibold px-5 pb-5">
                Стоимость, руб.
              </p>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className="text-sm font-normal border-[1px] border-[#E8E8E8] border-solid py-3 w-1/3 text-center focus:outline-none focus:border-[#FFD634]"
                  placeholder="от"
                />
                <input
                  type="text"
                  className="text-sm font-normal border-[1px] border-[#E8E8E8] border-solid py-3 w-1/3 text-center focus:outline-none focus:border-[#FFD634]"
                  placeholder="до"
                />
              </div>
              <div className="w-full mt-4">
                <input
                  type="range"
                  min="1000"
                  max="300000"
                  step="1000"
                  defaultValue={1000}
                  title="range"
                  className="w-full range range-warning"
                />
              </div>
              <hr className="bg-[#E8E8E8] h-[3px] my-6" />
              <p className="text-[16px] font-semibold px-5 pb-5">Бренд</p>
              <input
                type="text"
                placeholder="Поиск ..."
                className="input input-bordered w-full max-w-xs"
              />
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex items-center gap-3">
                  <input
                    id="timberFort"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="timberFort"
                    className="text-sm font-normal cursor-pointer"
                  >
                    TimberFort
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(192)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="besedorf"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="besedorf"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Besedorf
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(11)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="kamin"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="kamin"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Kamin 24
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(1922)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="lympa"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="lympa"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Lympa
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(192)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="timberFort2"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="timberFort2"
                    className="text-sm font-normal cursor-pointer"
                  >
                    TimberFort
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(122)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="besedorf2"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="besedorf2"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Besedorf
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(12)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="kamin3"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="kamin3"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Kamin 24
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(1212)</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="lympa4"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="lympa4"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Lympa
                  </label>
                  <p className="text-sm font-normal text-[#bbb]">(1322)</p>
                </div>
                <p className="text-sm font-normal text-[#FF7A1B] cursor-pointer">
                  Показать все ...
                </p>
              </div>
              <hr className="bg-[#E8E8E8] h-[3px] my-6" />
              <p className="text-[16px] font-semibold px-5 pb-5">
                Расположение
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <input
                    id="timberFort"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="timberFort"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Пристенно-угловое
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="besedorf"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="besedorf"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Пристенное
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id="kamin"
                    type="checkbox"
                    name="checkbox-1"
                    className="checkbox [--chkbg:theme(colors.orange.400)] [--chkfg:white]"
                  />
                  <label
                    htmlFor="kamin"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Центральностоящее
                  </label>
                </div>
              </div>
              <hr className="bg-[#E8E8E8] h-[3px] my-6" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-[16px] font-semibold">Скидка</p>
                  <label htmlFor="">
                    <input
                      title="Toggle me"
                      type="checkbox"
                      className="toggle checked:[--tglbg:orange] checked:bg-white border-[1px] border-solid border-[#bbb]"
                    />
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[16px] font-semibold">
                    Бесплатная доставка
                  </p>
                  <label htmlFor="">
                    <input
                      title="Toggle me"
                      type="checkbox"
                      className="toggle checked:[--tglbg:orange] checked:bg-white border-[1px] border-solid border-[#bbb]"
                      defaultChecked
                    />
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[16px] font-semibold">Гарантия 5+ лет</p>
                  <label htmlFor="">
                    <input
                      title="Toggle me"
                      type="checkbox"
                      className="toggle checked:[--tglbg:orange] checked:bg-white border-[1px] border-solid border-[#bbb]"
                      defaultChecked
                    />
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[16px] font-semibold">Рассрочка</p>
                  <label htmlFor="">
                    <input
                      title="Toggle me"
                      type="checkbox"
                      className="toggle checked:[--tglbg:orange] checked:bg-white border-[1px] border-solid border-[#bbb]"
                    />
                  </label>
                </div>
              </div>
            </section>
          </aside>
          <article className="pt-7 w-4/5 max-md:w-full">
            <div className="grid grid-cols-3 gap-5 max-md:hidden">
              <div className="w-full">
                <img
                  className="w-full h-auto object-cover rounded-[5px]"
                  src="./build/img/category/cattop1.png"
                  alt="CatTop1"
                />
              </div>
              <div className="w-full">
                <img
                  className="w-full h-auto object-cover rounded-[5px]"
                  src="./build/img/category/cattop2.png"
                  alt="CatTop1"
                />
              </div>
              <div className="w-full">
                <img
                  className="w-full h-auto object-cover rounded-[5px]"
                  src="./build/img/category/cattop3.png"
                  alt="CatTop1"
                />
              </div>
            </div>
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
            <div className="flex items-center gap-5">
              <p className="text-[32px] font-normal w-[25%] max-lg:w-full">
                Беседки для дачи
              </p>
              <hr className="w-[75%] h-[2px] bg-[#E8E8E8] block max-lg:hidden" />
            </div>
            <div className="forMob hidden max-md:block relative">
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="./build/img/category/catmob.png"
                    className="w-full"
                    alt="img"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a
                      href="#slide4"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide2"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="./build/img/category/catmob.png"
                    className="w-full"
                    alt="img"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a
                      href="#slide1"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide3"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="./build/img/category/catmob.png"
                    className="w-full"
                    alt="img"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a
                      href="#slide2"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide4"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="./build/img/category/catmob.png"
                    className="w-full"
                    alt="img"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a
                      href="#slide3"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide1"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-[#FFD634] items-center py-3 px-4 w-full md:hidden max-md:mt-6">
              <i className="fa-solid fa-bars text-white text-2xl cursor-pointer text-[26px]"></i>
              <p className="text-[26px] font-normal text-center w-full">
                Каталог товаров
              </p>
            </div>
            <div className="flex justify-center py-5 md:hidden">
              <p className="text-[32px] font-normal">Подкатегории</p>
            </div>
            <div className="mt-5">
              <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-1">
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal max-[400px]:hidden">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal max-[400px]:hidden">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal max-[400px]:hidden">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rouded-[5px] flex items-center gap-2 pl-5 max-sm:justify-center">
                  <p className="text-lg font-semibold max-lg:font-normal max-[400px]:hidden">
                    Ярмарочные домики
                  </p>
                  <div className="w-full hidden 2xl:block">
                    <img src="./build/img/category/mini.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full text-center mt-6">
                <button
                  type="button"
                  className="btn bg-[#FF7A1B] text-white w-1/4 max-sm:w-1/3 text-sm font-normal hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]"
                >
                  Показать еще
                </button>
              </div>
            </div>
            <p className="text-xl max-md:text-[20px] font-normal hidden max-lg:block max-lg:text-center mt-5">
              Узкие категории:
            </p>
            <nav className="flex py-6 items-center gap-5">
              <p className="text-lg font-normal max-lg:hidden">
                Узкие категории:
              </p>
              <ul className="flex items-center gap-2 carousel carousel-center rounded-box">
                <li className="list-none border-[1px] border-dashed border-[#bbb] rounded-md py-[10px] px-[15px] carousel-item">
                  <a href="#" className="text-xs font-light">
                    Белые беседки для дачи
                  </a>
                </li>
                <li className="list-none border-[1px] border-dashed border-[#bbb] rounded-md py-[10px] px-[15px] carousel-item">
                  <a href="#" className="text-xs font-light">
                    Каменные беседки
                  </a>
                </li>
                <li className="list-none border-[1px] border-dashed border-[#bbb] rounded-md py-[10px] px-[15px] carousel-item">
                  <a href="#" className="text-xs font-light">
                    Хай-тек беседки
                  </a>
                </li>
                <li className="list-none border-[1px] border-dashed border-[#bbb] rounded-md py-[10px] px-[15px] carousel-item">
                  <a href="#" className="text-xs font-light">
                    Ярмарочные домики
                  </a>
                </li>
                <li className="list-none border-[1px] border-dashed border-[#bbb] rounded-md py-[10px] px-[15px] carousel-item">
                  <a href="#" className="text-xs font-light">
                    Торговые павильоны
                  </a>
                </li>
                <li className="list-none border-[1px] border-dashed border-[#bbb] rounded-md py-[10px] px-[15px] carousel-item">
                  <a href="#" className="text-xs font-light">
                    Пример категории
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex justify-center py-5">
              <p className="text-[32px] font-normal">Хиты продаж</p>
            </div>

            <nav className="bg-[#F9F8F3] hidden max-md:block">
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

            <div className="border-[1px] border-solid border-[#FF7A1B] max-md:border-none rounded-[11px] p-4 bg-[#F9F8F3] max-md:p-0">
              <div className="carousel w-full">
                <div
                  id="slider1"
                  className="carousel-item relative w-full grid grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1 bg-white"
                >
                  <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                    <div className="rounded-[5px] w-full">
                      <img
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a
                      href="#slider2"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❮
                    </a>
                    <a
                      href="#slider2"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slider2"
                  className="carousel-item relative w-full grid grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1"
                >
                  <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]">
                    <div className="rounded-[5px] w-full">
                      <img
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                        src="./build/img/xit.png"
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
                      <p className="text-[13px] font-light">
                        12.3 x 14.6 x 4.3 м.
                      </p>
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
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a
                      href="#slider1"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❮
                    </a>
                    <a
                      href="#slider1"
                      className="btn bg-transparent border-none text-4xl text-white opacity-50"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between max-lg:hidden my-5">
              <div className="flex items-center gap-10 w-[70%]">
                <div className="">
                  <p>Сортировать:</p>
                </div>
                <div className="bg-[#F9F8F3]">
                  <ul className="flex items-center">
                    <li className="list-none px-12 py-5 border-b-2 border-[orange] bg-white cursor-pointer max-lg:px-0 max-2xl:w-[16%] max-lg:text-center">
                      <a
                        href="#"
                        className="text-lg font-normal text-black max-lg:text-sm  max-[400px]:text-[10px]"
                      >
                        Все
                      </a>
                    </li>
                    <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-2xl:w-[16%] max-lg:text-center">
                      <a
                        href="#"
                        className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
                      >
                        Цене
                      </a>
                    </li>
                    <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-2xl:w-[16%] max-lg:text-center">
                      <a
                        href="#"
                        className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
                      >
                        Ширине
                      </a>
                    </li>
                    <li className="list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-2xl:w-[16%] max-lg:text-center">
                      <a
                        href="#"
                        className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
                      >
                        Высоте
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-1 w-[20%] justify-end">
                <p className="text-[20px] font-normal text-[#FF7A1B]">2 610</p>
                <p className="text-[16px] font-normal text-[#BBBBBB]">
                  товаров
                </p>
              </div>
            </div>

            <div className="mt-5 border-[1px] border-solid border-[#bbb] max-md:border-none rounded-[11px] p-4 bg-[#F9F8F3] max-md:p-0">
              <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1">
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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
                <div className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8] bg-white">
                  <div className="rounded-[5px] w-full">
                    <img
                      src="./build/img/xit.png"
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
                    <p className="text-[13px] font-light">
                      12.3 x 14.6 x 4.3 м.
                    </p>
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

            <div className="flex justify-between items-center max-md:justify-center my-5">
              <div className="flex items-center gap-2">
                <div className="join">
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] indeterminate:bg-[#FF7A1B]"
                    type="radio"
                    name="options"
                    aria-label="1"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] appearance-none"
                    type="radio"
                    name="options"
                    aria-label="2"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C]"
                    type="radio"
                    name="options"
                    aria-label="3"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] max-lg:hidden"
                    type="radio"
                    name="options"
                    aria-label="4"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] max-lg:hidden"
                    type="radio"
                    name="options"
                    aria-label="5"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] max-xl:hidden"
                    type="radio"
                    name="options"
                    aria-label="6"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] max-xl:hidden"
                    type="radio"
                    name="options"
                    aria-label="7"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] max-2xl:hidden"
                    type="radio"
                    name="options"
                    aria-label="8"
                  />
                  <input
                    className="join-item btn btn-square bg-white text-[16px] font-normal text-[#7C7C7C] max-2xl:hidden"
                    type="radio"
                    name="options"
                    aria-label="9"
                  />
                </div>
                <div className="join">
                  <button
                    type="button"
                    className="join-item btn text-[16px] font-normal text-[#FF7A1B]"
                  >
                    Дальше
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 max-md:hidden">
                <p className="text-[16px] font-light">Перейти на страницу:</p>
                <input
                  title="Next"
                  type="text"
                  className="input input-bordered w-full max-w-24 block"
                />
                <button
                  type="button"
                  className="join-item btn text-[16px] font-normal text-[#FF7A1B]"
                >
                  Дальше
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

export default Category
