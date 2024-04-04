import aboutRectangle from '../../../assets/img/Rectangle 444.png'

function AboutUs() {
  return (
    <>
      <div className="mt-[60px]">
      <div className="flex gap-16 max-md:flex-col max-md:justify-center max-md:items-center max-md:mt-5">
        <div className="w-1/2 max-md:order-2 max-md:w-full">
          <hr className="my-6 bg-[#FF7A1B] h-[3px] max-md:hidden" />
          <p className="text-[16px] font-light max-md:text-center max-md:px-4 max-md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec senectus duis nibh. In faucibus adipiscing tellus enim, consequat integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis est.
          </p>
          <div className="flex gap-3 mt-6 max-md:bg-[#F9F8F3] max-md:rounded-[5px] max-md:flex-col max-md:px-4">
            <div className="relative -top-5">
              <i className="fa-solid fa-quote-left text-[40px] text-[#FF7A1B]"></i>
            </div>
            <div className="flex flex-col gap-2 max-md:text-center">
              <p className="text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec senectus duis nibh. In faucibus adipiscing tellus enim, consequat integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis est. Venenatis, sagittis, amet ornare donec purus suscipit nam sodales. Varius sit amet nullam dictumst massa consequat odio faucibus.
              </p>
              <p className="text-[16px] font-light opacity-50">
                Никита Данилов, Руководитель компании
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-md:order-1 max-md:w-full shadow-for-img">
          <img 
            src={aboutRectangle} 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs