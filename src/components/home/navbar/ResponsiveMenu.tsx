import React from 'react'
import { NavLink } from 'react-router-dom'
import { Auth } from '../../../contexts/AuthContext'
const ResponsiveMenu: React.FC = () => {
  const { darkMode } = Auth()
  const activeLink = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? '#FFD634' : '#000',
      textDecoration: isActive ? 'underline' : 'none',
    }
  }
  return (
    <>
      <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
        <nav
          className={
            darkMode ? 'dark-mode max-[1381px]:hidden' : 'max-[1381px]:hidden'
          }
        >
          <ul className="flex justify-between items-center text-center">
            <label
              htmlFor="forCategory"
              className="flex gap-3 bg-[#FFD634] text-center items-center py-3 px-4 w-1/5"
            >
              <i className="fa-solid fa-bars text-white text-2xl cursor-pointer"></i>
              <p className="text-[16px] font-normal">Каталог товаров</p>
            </label>
            <li className="list-none">
              <NavLink
                to="about"
                style={activeLink}
                className="text-sm font-normal"
              >
                О компании
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to="feedback"
                style={activeLink}
                className="text-sm font-normal"
              >
                Отзывы
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to="gallery"
                style={activeLink}
                className="text-sm font-normal"
              >
                Наши работы
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to="delivery"
                style={activeLink}
                className="text-sm font-normal"
              >
                Доставка
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                to="contact"
                style={activeLink}
                className="text-sm font-normal"
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        <input type="checkbox" className="hidden" id="forCategory" />
        <div className="hidden categoryDropdown">
          <ul className="flex flex-col bg-[#F6F6F6] px-5 w-1/5 -z-10 ul">
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
        </div>
      </div>

      <input type="checkbox" className="hidden" id="menu-toggle" />
      <nav
        className={
          darkMode
            ? 'dark-mode fixed -left-full top-0 w-full h-dvh toggled-bar flex flex-col transition-all'
            : 'fixed -left-full top-0 w-full h-dvh toggled-bar flex flex-col bg-white transition-all'
        }
      >
        <div className="flex justify-between items-center bg-orange-400 py-4 px-4">
          <h1 className="text-white text-lg uppercase">Top Menu</h1>
          <label htmlFor="menu-toggle">
            <i className="fa-solid fa-xmark text-2xl text-white cursor-pointer"></i>
          </label>
        </div>
        <div className={darkMode ? 'dark-mode' : ''}>
          <ul className="flex flex-col justify-between gap-5">
            <li className="list-none px-4">
              <a href="./aboutCompany.html" className="text-sm font-normal">
                О компании
              </a>
            </li>
            <li className="list-none px-4">
              <a href="./feedback.html" className="text-sm font-normal">
                Отзывы
              </a>
            </li>
            <li className="list-none px-4">
              <a href="./gallery.html" className="text-sm font-normal">
                Наши работы
              </a>
            </li>
            <li className="list-none px-4">
              <a href="./delivery.html" className="text-sm font-normal">
                Доставка
              </a>
            </li>
            <li className="list-none px-4">
              <a href="./contacts.html" className="text-sm font-normal">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default ResponsiveMenu
