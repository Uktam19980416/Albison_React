import AboutUs from './home/aboutUs/AboutUs'
import Category from './home/categories/Category'
import Feedback from './home/feedback/Feedback'
import News from './home/news/News'
import SendMail from './home/sendMail/SendMail'
import Slider from './home/Slider/Slider'
import Sales from './home/xitSale/Sales'
import Sales2 from './home/xitSale2/Sales'
import { Auth } from '../contexts/AuthContext'

function Main() {
  const darkMode = Auth().darkMode
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Slider />
      <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] mt-10">
        <Category />
        <Sales />
        <Sales2 />

        <div className="py-5 flex justify-between max-md:justify-center items-center">
          <h1 className="text-[32px] font-normal">Отзывы наших клиентов</h1>
        </div>
      </div>
      <Feedback />
      <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%] mt-10">
        <h1 className="text-[32px] font-normal max-md:text-center">
          Немного о нас
        </h1>
        <AboutUs />
        <News />
      </div>
      <SendMail />
      
    </div>
  )
}

export default Main
