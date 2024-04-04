function SendMail() {
  return (
    <>
      <div className="bg-[#F9F8F3] py-11">
        <div className="container max-w-[1996px] w-[80%] mx-auto max-xl:w-[90%] max-lg:w-[95%]">
          <div className="flex justify-between items-center w-full gap-4 max-2xl:flex-col max-2xl:text-center">
            <p className="w-1/2 text-2xl font-normal max-md:w-[85%]">
              Хотите быть в курсе выгодных предложений, акций и новинок?
            </p>
            <input
              type="text"
              placeholder="Имя"
              className="input input-bordered max-w-xs block max-md:w-[85%] max-2xl:w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered max-w-xs block max-md:w-[85%] max-2xl:w-full"
            />
            <button className="btn bg-[#FF7A1B] text-white text-[16px] font-normal btn-wide hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SendMail