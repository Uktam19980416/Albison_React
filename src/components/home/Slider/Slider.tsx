import ground from '../../../assets/img/ground.png'
import sittingPlace from '../../../assets/img/besedka.png'

function Slider() {
  return (
    <>
      <div className="bg-[#F9F8F3] pt-4">
        <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
          <div
            className="bg-cover bg-no-repeat bg-center flex justify-between items-center pl-[100px] max-sm:pl-5 pr-[60px]"
            style={{ backgroundImage: `url(${ground})` }}
          >
            <div className="flex flex-col gap-5 py-12 w-3/4">
              <h1 className="text-[70px] font-semibold text-white max-lg:text-[60px] max-md:text-[52px] max-[510px]:text-[40px]">
                Беседки под ключ за 7 дней
              </h1>
              <div className="flex gap-3 text-white max-md:hidden">
                <p className="text-2xl font-normal">Выгода до 24%</p>
                <p className="text-2xl font-normal">Сборка за 1 день</p>
              </div>
            </div>
            <div className="max-lg:hidden">
              <img className="" src={sittingPlace} alt="Besedka" />
            </div>
          </div>

          <div className="flex gap-3 bg-[#FFD634] items-center py-3 px-4 w-full md:hidden max-md:mt-6">
            <i className="fa-solid fa-bars text-white text-2xl cursor-pointer text-[26px]"></i>
            <p className="text-[26px] font-normal text-center w-full">
              Каталог товаров
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
