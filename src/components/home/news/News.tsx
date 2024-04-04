import news1 from '../../../assets/img/news1.png'
import news2 from '../../../assets/img/news2.png'
import news3 from '../../../assets/img/news3.png'
function News() {
  return (
    <>
      <div className="py-10">
        <h1 className="text-[32px] font-normal max-md:text-center">
          Статьи, новости и обзоры
        </h1>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1 mt-10">
          <div className="flex flex-col gap-3">
            <div className="w-full">
              <img className="w-full h-full object-cover" src={news1} alt="" />
            </div>
            <p className="text-xl font-semibold text-[#FF7A1B]">
              Как выбрать беседку для дачи
            </p>
            <p className="text-xs font-normal text-[#bbb]">19 сентября 2021</p>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="#" className="text-sm font-light text-[#FF7A1B] underline">
              Читать далее {'>'}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full">
              <img className="w-full h-full object-cover" src={news2} alt="" />
            </div>
            <p className="text-xl font-semibold text-[#FF7A1B]">
              Как выбрать беседку для дачи
            </p>
            <p className="text-xs font-normal text-[#bbb]">19 сентября 2021</p>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="#" className="text-sm font-light text-[#FF7A1B] underline">
              Читать далее {'>'}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full">
              <img className="w-full h-full object-cover" src={news3} alt="" />
            </div>
            <p className="text-xl font-semibold text-[#FF7A1B]">
              Как выбрать беседку для дачи
            </p>
            <p className="text-xs font-normal text-[#bbb]">19 сентября 2021</p>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="#" className="text-sm font-light text-[#FF7A1B] underline">
              Читать далее {'>'}
            </a>
          </div>
          <div className="flex flex-col gap-3 max-[400px]:hidden">
            <div className="w-full">
              <img className="w-full h-full object-cover" src={news2} alt="" />
            </div>
            <p className="text-xl font-semibold text-[#FF7A1B]">
              Как выбрать беседку для дачи
            </p>
            <p className="text-xs font-normal text-[#bbb]">19 сентября 2021</p>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="#" className="text-sm font-light text-[#FF7A1B] underline">
              Читать далее {'>'}
            </a>
          </div>
          <div className="flex flex-col gap-3 max-md:hidden">
            <div className="w-full">
              <img className="w-full h-full object-cover" src={news1} alt="" />
            </div>
            <p className="text-xl font-semibold text-[#FF7A1B]">
              Как выбрать беседку для дачи
            </p>
            <p className="text-xs font-normal text-[#bbb]">19 сентября 2021</p>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="#" className="text-sm font-light text-[#FF7A1B] underline">
              Читать далее {'>'}
            </a>
          </div>
          <div className="flex flex-col gap-3 max-md:hidden">
            <div className="w-full">
              <img className="w-full h-full object-cover" src={news3} alt="" />
            </div>
            <p className="text-xl font-semibold text-[#FF7A1B]">
              Как выбрать беседку для дачи
            </p>
            <p className="text-xs font-normal text-[#bbb]">19 сентября 2021</p>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
              congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
              nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
              eu. Nisi pellentesque.
            </p>
            <a href="#" className="text-sm font-light text-[#FF7A1B] underline">
              Читать далее {'>'}
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="btn bg-[#FF7A1B] text-white text-[22px] max-md:text-[16px] w-1/2 md:hidden">
            Больше статей
          </button>
        </div>
      </div>
    </>
  )
}

export default News
