import write from '../../../assets/img/write 1.png'
function Info() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-md:grid-cols-2 max-[400px]:grid-cols-1">
      <div className="flex gap-3 items-center max-[400px]:flex-col max-[400px]:w-2/3 max-[400px]:mx-auto max-[400px]:text-center">
        <div className="rounded-full bg-[#F9F8F3] p-8">
          <img src={write} alt="Write" />
        </div>
        <p className="text-sm font-normal text-[#2D170C] max-lg:text-xs">
          Изготовливаем конструкции по вашему дизайн-проекту
        </p>
      </div>
      <div className="flex gap-3 items-center max-[400px]:flex-col max-[400px]:w-2/3 max-[400px]:mx-auto max-[400px]:text-center">
        <div className="rounded-full bg-[#F9F8F3] p-8">
          <img src={write} alt="Write" />
        </div>
        <p className="text-sm font-normal text-[#2D170C] max-lg:text-xs">
          Изготовили более 2 400 деревянных конструкций
        </p>
      </div>
      <div className="flex gap-3 items-center max-[400px]:flex-col max-[400px]:w-2/3 max-[400px]:mx-auto max-[400px]:text-center">
        <div className="rounded-full bg-[#F9F8F3] p-8">
          <img src={write} alt="Write" />
        </div>
        <p className="text-sm font-normal text-[#2D170C] max-lg:text-xs">
          Собственное производство площадью 6 000 м2
        </p>
      </div>
      <div className="flex gap-3 items-center max-xl:hidden">
        <div className="rounded-full bg-[#F9F8F3] p-8">
          <img src={write} alt="Write" />
        </div>
        <p className="text-sm font-normal text-[#2D170C] max-lg:text-xs">
          Производим изделия из дерева с 1998 года
        </p>
      </div>
      <div className="flex gap-3 items-center max-[400px]:flex-col max-[400px]:w-2/3 max-[400px]:mx-auto max-[400px]:text-center">
        <div className="rounded-full bg-[#F9F8F3] p-8">
          <img src={write} alt="Write" />
        </div>
        <p className="text-sm font-normal text-[#2D170C] max-lg:text-xs">
          Гарантия от 3х лет на все конструкции
        </p>
      </div>
    </div>
    </>
  )
}

export default Info