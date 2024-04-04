import { Auth } from '../../contexts/AuthContext'
function Articles() {
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

        <section>
          <h2 className="text-[32px] font-normal md:hidden">Статьи</h2>
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
          <h2 className="text-[32px] font-normal max-md:text-center max-md:text-[28px]">
            Как выбрать беседку для дачи
          </h2>
          <hr className="w-full h-[2px] bg-[#E8E8E8] block max-md:hidden mt-4" />
        </section>

        <section className="bg-[#F9F8F3] px-[90px] py-[58px] max-md:px-[38px]">
          <div className="flex flex-col gap-10">
            <p className="text-[16px] font-light leading-[181%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              blandit placerat a tempor pellentesque egestas. Lectus est, tortor
              vulputate cras posuere suspendisse pulvinar sit. Placerat
              malesuada volutpat vulputate placerat vitae mi enim. Nisl et
              lacinia commodo nisi. Viverra habitant elementum sagittis felis
              molestie integer. Cursus pulvinar semper praesent ut. Facilisis
              augue feugiat nam leo duis. Nulla lacus non, tristique et ac
              tempor amet. Ultricies maecenas ut pretium massa. Pulvinar
              adipiscing et, pellentesque sollicitudin urna diam facilisi
              tristique. Rhoncus curabitur commodo enim proin vitae non sit vel.
              Sed augue arcu pellentesque turpis massa ornare auctor consequat.
            </p>
            <div className="flex items-center justify-between gap-6 max-md:flex-col">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/article/article1.png"
                  alt=""
                />
              </div>
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/article/article2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p>
                Sem egestas neque, turpis habitant sit platea egestas pulvinar
                eleifend. Pulvinar massa tempus nibh dis dui. Volutpat mauris
                nec, facilisis diam vitae. Sagittis, eros, porttitor varius
                vestibulum ullamcorper adipiscing sit vitae lobortis. In duis
                lorem amet, eget. Integer vestibulum sit libero quisque orci.
                Luctus quis tristique turpis tortor, magna dis nibh lorem risus.
                Quam at risus, varius sit tempus, vel egestas nulla. <br />
                Fringilla quam consequat in blandit. Sit id volutpat integer
                augue consectetur mauris egestas faucibus quis. Porttitor
                scelerisque egestas leo malesuada enim elementum, magna dui
                habitasse. Ullamcorper vestibulum enim, dolor id varius cursus
                at sed. Duis id massa odio vulputate dui. Amet fusce mauris,
                justo neque tincidunt et. Neque, et hendrerit scelerisque dolor
                pulvinar lectus quis id sit. Id tempor adipiscing eget at eget
                vel id. Leo vitae, nec massa senectus est, nulla vulputate.
                Phasellus pretium sed nisl augue cras. In diam imperdiet in
                lorem.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus blandit placerat a tempor pellentesque egestas. Lectus
                est, tortor vulputate cras posuere suspendisse pulvinar sit.
                Placerat malesuada volutpat vulputate placerat vitae mi enim.
                Nisl et lacinia commodo nisi. Viverra habitant elementum
                sagittis felis molestie integer. Cursus pulvinar semper praesent
                ut. Facilisis augue feugiat nam leo duis. Nulla lacus non,
                tristique et ac tempor amet. Ultricies maecenas ut pretium
                massa. Pulvinar adipiscing et, pellentesque sollicitudin urna
                diam facilisi tristique. Rhoncus curabitur commodo enim proin
                vitae non sit vel. Sed augue arcu pellentesque turpis massa
                ornare auctor consequat.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <div className="flex gap-5 items-center">
            <h2 className="text-[32px] font-normal w-1/5 max-md:w-full max-md:text-center">
              Похожие статьи
            </h2>
            <hr className="h-[2px] bg-[#E8E8E8] block max-md:hidden w-4/5" />
          </div>
        </section>

        <section>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1 mt-10">
            <div className="flex flex-col gap-3">
              <div className="w-full">
                <img
                  className="w-full h-full object-cover"
                  src="./build/img/article/about2.1.png"
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
                Дружная команда инженеров, наладчиков и мастеров высокого класса
                с большим вниманием и любовью относятся к своей работе.
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
                  src="./build/img/article/about2.1.png"
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
                Дружная команда инженеров, наладчиков и мастеров высокого класса
                с большим вниманием и любовью относятся к своей работе.
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
                  src="./build/img/article/about2.1.png"
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
                Дружная команда инженеров, наладчиков и мастеров высокого класса
                с большим вниманием и любовью относятся к своей работе.
              </p>
              <a
                href="#"
                className="text-sm font-light text-[#FF7A1B] underline"
              >
                Читать далее {'>'}
              </a>
            </div>
          </div>
        </section>

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
              <img src="./build/img/Беседка.png" alt="House" />
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
              <img src="./build/img/Баня.png" alt="Bathroom" />
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
              <img src="./build/img/Горка.png" alt="Gorka" />
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
              <img src="./build/img/Perg.png" alt="Perg" />
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
              <img src="./build/img/House.png" alt="Gorka" />
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
              <img src="./build/img/Star.png" alt="Perg" />
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
              <img src="./build/img/small/Беседка.png" alt="Bathroom" />
            </div>
          </div>

          <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
            <div className="flex flex-col gap-1">
              <h2 className="text-[26px] max-sm:text-xl font-normal">Дома</h2>
            </div>
            <div>
              <img src="./build/img/small/Star.png" alt="Bathroom" />
            </div>
          </div>

          <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
            <div className="flex flex-col gap-1">
              <h2 className="text-[26px] max-sm:text-xl font-normal">
                Площадки
              </h2>
            </div>
            <div>
              <img src="./build/img/small/Горка.png" alt="Bathroom" />
            </div>
          </div>

          <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
            <div className="flex flex-col gap-1">
              <h2 className="text-[26px] max-sm:text-xl font-normal">
                Перголы
              </h2>
            </div>
            <div>
              <img src="./build/img/small/Perg.png" alt="Bathroom" />
            </div>
          </div>

          <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
            <div className="flex flex-col gap-1">
              <h2 className="text-[26px] max-sm:text-xl font-normal">Бани</h2>
            </div>
            <div>
              <img src="./build/img/small/Баня.png" alt="Bathroom" />
            </div>
          </div>

          <div className="flex justify-between items-center row-span-2 col-span-1 bg-[#FFF7D9] rounded-[6px] px-6 py-[22px]">
            <div className="flex flex-col gap-1">
              <h2 className="text-[26px] max-sm:text-xl font-normal">Бренды</h2>
            </div>
            <div>
              <img src="./build/img/small/Star.png" alt="Bathroom" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Articles
