import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'

import './products.style.css'
import ProductSkeleton from './ProductSkeleton'

export type product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const Products = () => {
  const [products, setProducts] = useState<product[]>([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const arrayForSkeleton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }, [])
  return (
    <div>
      <h1>Products</h1>
      <div className='products-grid'>
        {products.length > 0
          ? products.map((product, index) => (
              <div key={index} className='product-card'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='product-image'
                />
                <h3>{product.title}</h3>
                <h4 className='product-price'>${product.price}</h4>
                <p>{product.description.slice(0, 90)}...</p>
                <div className='product-buttons-div'>
                  <button
                    className='primary-btn'
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add to card
                  </button>
                  <button
                    className='secondary-btn'
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    More details
                  </button>
                </div>
              </div>
            ))
          : arrayForSkeleton.map((i) => <ProductSkeleton key={i} />)}
      </div>
    </div>
  )
}

export default Products
