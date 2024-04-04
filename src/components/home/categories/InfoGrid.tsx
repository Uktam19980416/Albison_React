import besedka from '../../../assets/img/Беседка.png'
import banya from '../../../assets/img/Баня.png'
import gorka from '../../../assets/img/Горка.png'
import perg from '../../../assets/img/Perg.png'
import house from '../../../assets/img/House.png'
import star from '../../../assets/img/Star.png'
import { Link } from 'react-router-dom'

function InfoGrid() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-6 gap-4 max-md:hidden">
        <Link
          to="category"
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
        </Link>

        <Link
          to="category"
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
        </Link>

        <Link
          to="category"
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
        </Link>

        <Link
          to="category"
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
        </Link>

        <Link
          to="category"
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
        </Link>

        <Link
          to="category"
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
            <img src={star} alt="Perg" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default InfoGrid
