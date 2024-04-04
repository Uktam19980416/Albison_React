import Info from "./Info"
import InfoGrid from "./InfoGrid"

function Category() {
  return (
    <>
      <Info />
      <div className="py-5">
        <h1 className="text-[32px] font-normal max-md:text-center">Категории</h1>
      </div>
      <InfoGrid />
    </>
  )
}

export default Category