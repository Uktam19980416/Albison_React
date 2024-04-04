// import { Outlet } from 'react-router-dom'
import ProductsSale from './ProductsSale'
import Filter from './Filter'
// import Ads from '../../../helpers/Ads'

function Sales() {
  return (
    <>
      <Filter />
      {/* <Ads stat="xit" /> */}
      <ProductsSale />
    </>
  )
}

export default Sales
