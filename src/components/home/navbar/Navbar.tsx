import { MouseEventHandler } from 'react'
import myImage from '../../../assets/img/logo.png'
import ResponsiveMenu from './ResponsiveMenu'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Auth } from '../../../contexts/AuthContext'

type UserInfo = {
  username: string
  password: string
}

const Navbar: React.FC = () => {
  const { user, isLoggedIn, login, logout, darkMode, toggleDarkMode } = Auth()

  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: '',
    password: '',
  })
  // const navigate = useNavigate()
  const location = useLocation()
  const redirect = location.state?.path || '/'

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const userTag = {
        username: userInfo.username,
        password: userInfo.password,
      }
      await login(userTag)
      localStorage.setItem('user', JSON.stringify(userTag))
      redirect(redirect, { replace: true })
    } catch (error) {
      console.log(error)
    }
    // toggleModal()
  }

  const handleLogout = () => {
    logout()
    localStorage.removeItem('user')
  }
  // useEffect(() => {
  //   if (user) {
  //     setUserInfo(user)
  //   }
  // }, [user])

  const setUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      username: e.target.value,
    })
  }

  const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    })
  }

  const showCallModal = (
    modalId: string
  ): MouseEventHandler<HTMLButtonElement> | undefined => {
    return () => {
      const modal = document.getElementById(modalId) as HTMLDialogElement
      modal?.showModal()
    }
  }

  const [search, setSearch] = useState('')
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className="bg-[#2B150D] py-4 max-sm:hidden">
        <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
          <div className="flex justify-between max-[1450px]:flex-col max-[1450px]:justify-between items-center">
            <div className="flex gap-12">
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-location-dot text-[#FFD634]"></i>
                <span className="text-white text-[13px] font-semibold">
                  Ваш город:
                </span>
                <select className="bg-transparent text-[13px] text-white font-semibold">
                  <option value="1">Константинополь</option>
                </select>
              </div>
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-location-dot text-[#FFD634]"></i>
                <span className="text-white text-[13px] font-semibold">
                  Наш офис:
                </span>
                <select className="bg-transparent text-[13px] text-white font-semibold">
                  <option value="1">Москва, ул. Новокосимская д.7</option>
                </select>
              </div>
            </div>
            <nav>
              <ul className="flex gap-[74px]">
                <li className="list-none">
                  <NavLink
                    to="articles"
                    className="text-white text-[13px] font-normal hover:text-[#FF7A1B]"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="list-none">
                  <a
                    href="3"
                    className="text-white text-[13px] font-normal hover:text-[#FF7A1B]"
                  >
                    Оплата
                  </a>
                </li>
                <li className="list-none">
                  <a
                    href="3"
                    className="text-white text-[13px] font-normal hover:text-[#FF7A1B]"
                  >
                    Гарантия
                  </a>
                </li>
                <li className="list-none flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="toggle toggle-warning block"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  {darkMode ? (
                    <i className="fa-solid fa-moon text-[#FFD634]"></i>
                  ) : (
                    <i className="fa-solid fa-sun text-[#FFD634]"></i>
                  )}
                </li>
                <li className="list-none">
                  {!isLoggedIn ? (
                    <button
                      className="text-white text-[13px] font-normal hover:text-[#FF7A1B]"
                      onClick={showCallModal('my_modal_5')}
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      className="text-white text-[13px] font-normal hover:text-[#FF7A1B]"
                      onClick={handleLogout}
                    >
                      {user?.username}(Logout)
                    </button>
                  )}
                  <dialog id="my_modal_5" className="modal">
                    <form
                      onSubmit={handleLogin}
                      className="modal-box flex flex-col justify-between items-center gap-2"
                    >
                      <h3 className="font-normal text-[32px] text-center">
                        Login
                      </h3>
                      <input
                        type="text"
                        placeholder="Name *"
                        className="input input-bordered w-full"
                        value={userInfo.username}
                        onChange={setUsername}
                      />
                      <input
                        type="Password"
                        placeholder="Password *"
                        className="input input-bordered w-full"
                        value={userInfo.password}
                        onChange={setPassword}
                      />
                      <div className="flex items-center gap-3">
                        <p className="text-[11px] font-light">
                          <span className="text-[#FF7A1B] underline">
                            Forgot Password?
                          </span>
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]"
                      >
                        Submit
                      </button>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div
        className={
          darkMode
            ? 'dark-mode py-4 text-white'
            : 'bg-[#F9F8F3] py-4 text-[#2B150D]'
        }
      >
        <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] max-sm:w-full">
          <div className="flex justify-between items-center max-[1380px]:hidden">
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-center">
                <img src={myImage} alt="Logo" />
              </div>
              <p className="font-normal text-sm text-center">
                Логотип вашего магазина
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <ul className="flex gap-10 max-2xl:gap-5 max-[960px]:gap-0">
                <li className="list-none">
                  <i className="fa-solid fa-check text-[#FFD634]"></i>
                  <a href="#" className="text-[13px] font-normal">
                    Лучшие цены
                  </a>
                </li>
                <li className="list-none">
                  <i className="fa-solid fa-check text-[#FFD634]"></i>
                  <a href="./delivery.html" className="text-[13px] font-normal">
                    Бесплатная доставка
                  </a>
                </li>
                <li className="list-none">
                  <i className="fa-solid fa-check text-[#FFD634]"></i>
                  <a href="#" className="text-[13px] font-normal">
                    Гарантия от 3х лет
                  </a>
                </li>
                <li className="list-none">
                  <i className="fa-solid fa-check text-[#FFD634]"></i>
                  <a href="#" className="text-[13px] font-normal">
                    Более 1 000 товаров
                  </a>
                </li>
              </ul>
              <div className="w-full flex items-center">
                <input
                  className="w-[80%] border-[1px] border-[#E8E8E8] rounded-[5px] py-2 px-4 focus:outline-none focus:border-[#FFD634]"
                  type="text"
                  placeholder="Поиск по каталогу..."
                />
                <button className="w-[20%] bg-[#FFD634] text-black text-[16px] font-normal py-2 rounded-[5px] hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#ffd634] hover:border-[#ffd634]">
                  Поиск
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <i className="fa-regular fa-clock text-[#FFD634]"></i>
              <div className="">
                <p className="text-[13px] font-normal">
                  Ежедневно с 9:00 до 21:00
                </p>
                <p className="text-lg font-light">
                  8 (800) <span className="font-semibold">800-00-00</span>
                </p>
                <p className="text-lg font-light">
                  8 (495) <span className="font-semibold">700-00-00</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 justify-center">
                <i className="fa-regular fa-envelope text-[#FFD634]"></i>
                <a
                  href="mailto:youremail@mailbox.ru"
                  className="text-[13px] font-normal"
                >
                  youremail@mailbox.ru
                </a>
              </div>
              <div className="w-full">
                <button
                  className="rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]"
                  onClick={showCallModal('my_modal_2')}
                >
                  Заказать звонок
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box flex flex-col justify-between items-center gap-2">
                    <h3 className="font-normal text-[32px] text-center text-[#3e3f3e]">
                      Мы вам перезвоним
                    </h3>
                    <p className="text-sm font-light text-[#6d6d6d] text-center">
                      Заполните, пожалуйста, поля ниже, чтобы мы могли связаться
                      с вами. Добавьте комментарий, чтобы менеджер оперативно
                      ответил на все ваши вопросы
                    </p>
                    <input
                      type="text"
                      placeholder="Имя *"
                      className="input input-bordered w-full"
                    />
                    <input
                      type="text"
                      placeholder="Телефон *"
                      className="input input-bordered w-full"
                    />
                    <textarea
                      placeholder="Ваш комментарий"
                      className="textarea textarea-bordered textarea-lg w-full"
                    ></textarea>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="checkbox checkbox-md" />
                      <p className="text-[11px] font-light text-[#3e3f3e]">
                        Согласен с{' '}
                        <span className="text-[#FF7A1B] underline">
                          обработкой персональных данных
                        </span>
                      </p>
                    </div>
                    <button className="rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                      Заказать звонок
                    </button>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 min-[1381px]:hidden max-sm:bg-[#2B150D]">
            <div className="flex justify-between items-center max-sm:gap-5 max-sm:w-[95%]">
              <div className="flex gap-6 items-center justify-center max-sm:w-[10%] max-sm:pl-7 max-sm:justify-start">
                <label htmlFor="menu-toggle" className="cursor-pointer">
                  <i className="fa-solid fa-bars-staggered text-2xl max-sm:text-white"></i>
                </label>
                <div className="max-sm:hidden">
                  <div className="w-full flex justify-center">
                    <img src={myImage} alt="Logo" />
                  </div>
                  <p className="text-black font-normal text-sm text-center">
                    Логотип вашего магазина
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-5">
                <div className="flex gap-2 max-sm:hidden">
                  <i className="fa-regular fa-clock text-[#FFD634]"></i>
                  <div className="">
                    <p className="text-[13px] font-normal">
                      Ежедневно с 9:00 до 21:00
                    </p>
                    <p className="text-[#2B150D] text-lg font-light">
                      8 (800) <span className="font-semibold">800-00-00</span>
                    </p>
                    <p className="text-[#2B150D] text-lg font-light">
                      8 (495) <span className="font-semibold">700-00-00</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col max-sm:hidden">
                  <div className="flex gap-2 justify-center">
                    <i className="fa-regular fa-envelope text-[#FFD634]"></i>
                    <a
                      href="mailto:youremail@mailbox.ru"
                      className="text-[13px] font-normal"
                    >
                      youremail@mailbox.ru
                    </a>
                  </div>
                  <div className="w-full">
                    <button
                      className="rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]"
                      onClick={showCallModal('my_modal_4')}
                    >
                      Заказать звонок
                    </button>
                  </div>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box flex flex-col justify-between items-center gap-2">
                      <h3 className="font-normal text-[32px] text-center">
                        Мы вам перезвоним
                      </h3>
                      <p className="text-sm font-light text-[#6d6d6d] text-center">
                        Заполните, пожалуйста, поля ниже, чтобы мы могли
                        связаться с вами. Добавьте комментарий, чтобы менеджер
                        оперативно ответил на все ваши вопросы
                      </p>
                      <input
                        type="text"
                        placeholder="Имя *"
                        className="input input-bordered w-full"
                      />
                      <input
                        type="text"
                        placeholder="Телефон *"
                        className="input input-bordered w-full"
                      />
                      <textarea
                        placeholder="Ваш комментарий"
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
                      <button className="rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                        Заказать звонок
                      </button>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              </div>
              <div className="sm:hidden py-2 max-sm:w-[80%]">
                <input
                  className="w-[80%] border-[1px] border-[#E8E8E8] rounded-[5px] py-2 px-4 focus:outline-none focus:border-[#FFD634] max-sm:w-[100%]"
                  type="text"
                  placeholder="Поиск по каталогу..."
                />
              </div>
              <button
                className="sm:hidden max-sm:w-[5%] max-sm:flex max-sm:justify-end"
                onClick={showCallModal('my_modal_3')}
              >
                <i className="fa-solid fa-phone text-white text-xl"></i>
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box flex flex-col justify-between items-center gap-2">
                  <h3 className="font-normal text-[32px] text-center">
                    Мы вам перезвоним
                  </h3>
                  <p className="text-sm font-light text-[#6d6d6d] text-center">
                    Заполните, пожалуйста, поля ниже, чтобы мы могли связаться с
                    вами. Добавьте комментарий, чтобы менеджер оперативно
                    ответил на все ваши вопросы
                  </p>
                  <input
                    type="text"
                    placeholder="Имя *"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Телефон *"
                    className="input input-bordered w-full"
                  />
                  <textarea
                    placeholder="Ваш комментарий"
                    className="textarea textarea-bordered textarea-lg w-full"
                  ></textarea>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="checkbox checkbox-md" />
                    <p className="text-[11px] font-light">
                      Согласен с{' '}
                      <span className="text-[#FF7A1B] underline">
                        обработкой персональных данных
                      </span>
                    </p>
                  </div>
                  <button className="rounded-md text-lg font-normal text-white bg-[#FF7A1B] w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                    Заказать звонок
                  </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>

            <div className="w-full flex items-center max-sm:hidden">
              <input
                className="w-[80%] border-[1px] border-[#E8E8E8] rounded-[5px] py-2 px-4 focus:outline-none focus:border-[#FFD634]"
                type="text"
                value={search}
                placeholder="Поиск по каталогу..."
                onChange={handleSearch}
              />
              <button className="w-[20%] bg-[#FFD634] text-black text-[16px] font-normal py-2 rounded-[5px] hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#ffd634] hover:border-[#ffd634]">
                Поиск {search}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu />
    </div>
  )
}

export default Navbar
