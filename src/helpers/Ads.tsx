// import salePic from '../../../assets/img/xit.png'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

type Price = {
  old: number
  new: number
  sale: number
}

interface Products {
  id: number
  articul: number
  title: string
  size: string
  area: string
  capacity: number
  guarantee: number
  price: Price
  image: string
  status: string
  filter: string
}

interface AdsProps {
  stat: string
}

const Ads: React.FC<AdsProps> = ({ stat }) => {
  const [products, setProducts] = useState<Products[] | null>(null)
  const { category } = useParams<{ category: string }>()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Products[] }>('data.json')
        if (category) {
          setProducts(
            response.data.products.filter((product) => {
              return product.filter === category
            })
          )
          return
        }
        setProducts(response.data.products)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts()
  }, [category])
  return (
    <>
      <div className="mt-5">
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[400px]:grid-cols-1">
          {products?.map(
            (product) =>
              product.status === stat && (
                <div
                  className="flex flex-col gap-2 py-5 px-3 border-[1px] border-[#E8E8E8]"
                  key={product.id}
                >
                  <div className="rounded-[5px] w-full">
                    <img
                      src={product.image}
                      alt="Xit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-light opa">Articul:</p>
                    <p className="text-xs font-light opa">
                      {product.articul.toString().padStart(6, '0')}
                    </p>
                  </div>
                  <h1 className="text-lg font-normal">{product.title}</h1>
                  <div className="flex justify-between">
                    <p className="text-[13px] font-light">
                      <i className="fa-solid fa-up-right-and-down-left-from-center text-[#FF7A1B]"></i>
                      <span>Размеры:</span>
                    </p>
                    <p className="text-[13px] font-light">{product.size}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[13px] font-light">
                      <i className="fa-regular fa-square text-[#FF7A1B]"></i>
                      <span>Площадь:</span>
                    </p>
                    <p className="text-[13px] font-light">{product.area}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[13px] font-light">
                      <i className="fa-solid fa-user text-[#FF7A1B]"></i>
                      <span>Вместимость:</span>
                    </p>
                    <p className="text-[13px] font-light">
                      {product.capacity} чел.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[13px] font-light">
                      <i className="fa-solid fa-circle-check text-[#FF7A1B]"></i>
                      <span>Гарантия:</span>
                    </p>
                    <p className="text-[13px] font-light">
                      {product.guarantee} лет
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p>
                        <span className="text-[#bbb] text-sm max-sm:text-xs font-normal line-through">
                          {product.price.old} ₽
                        </span>
                        <span className="bg-[#FFD634] text-xs max-sm:text-[10px] font-normal p-1 rounded-md">
                          -{product.price.sale}%
                        </span>
                      </p>
                      <p className="text-[#FF3838] text-[22px] max-sm:text-lg font-semibold">
                        {product.price.new} ₽
                      </p>
                    </div>
                    <div className="w-1/3">
                      <button className="bg-[#FF7A1B] text-white text-[16px] font-normal rounded-md w-full py-3 hover:transition-all hover:border-[1px] hover:bg-white hover:text-[#FF7A1B] hover:border-[#FF7A1B]">
                        Купить
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  )
}

export default Ads
