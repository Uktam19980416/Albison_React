import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
const Filter: React.FC = () => {
  const [active, setActive] = useState('')
  const toggleStyle = (filter: string) => {
    setActive(filter)
  }
  const styles = (filter: string): string => {
    return active === filter
      ? 'list-none px-12 py-5 border-b-2 border-[orange] bg-white cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center text-black'
      : 'list-none px-12 py-5 hover:border-b-2 hover:border-[orange] hover:bg-white hover:cursor-pointer max-lg:px-0 max-lg:w-[16%] max-lg:text-center'
  }
  return (
    <>
      <div className="py-5 flex justify-between max-md:justify-center items-center">
        <h1 className="text-[32px] font-normal">Хиты продаж</h1>
        <a
          href="#"
          className="text-[16px] font-normal text-[#BBB] max-md:hidden"
        >
          Все товары {'>'}
        </a>
      </div>

      <nav className="bg-[#F9F8F3]">
        <ul className="flex items-center w-full">
          {/* <li className={ styles({ isActive: true }) }> */}
          <li
            className={styles('gazebos')}
            onClick={() => toggleStyle('gazebos')}
          >
            <NavLink
              to="gazebos"
              className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
            >
              Беседки
            </NavLink>
          </li>
          <li className={styles('baths')} onClick={() => toggleStyle('baths')}>
            <NavLink
              to="baths"
              className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
            >
              Бани
            </NavLink>
          </li>
          <li className={styles('site')} onClick={() => toggleStyle('site')}>
            <NavLink
              to="site"
              className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              // onClick={changeStyle}
            >
              Площадки
            </NavLink>
          </li>
          <li className={styles('home')} onClick={() => toggleStyle('home')}>
            <NavLink
              to="home"
              className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              // onClick={changeStyle}
            >
              Дома
            </NavLink>
          </li>
          <li
            className={styles('pergolas')}
            onClick={() => toggleStyle('pergolas')}
          >
            <NavLink
              to="pergolas"
              className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              // onClick={changeStyle}
            >
              Перголы
            </NavLink>
          </li>
          <li
            className={styles('brands')}
            onClick={() => toggleStyle('brands')}
          >
            <NavLink
              to="brands"
              className="text-lg font-light text-[#898989] max-lg:text-sm  max-[400px]:text-[10px]"
              // onClick={changeStyle}
            >
              Бренды
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Filter
