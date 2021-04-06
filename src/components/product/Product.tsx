import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'
import { useNavigate, useParams } from 'react-router'
import { product } from '../products/Products'
import classes from './product.module.css'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<product>()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProduct(data)
      })
  }, [id])

  if (!product) {
    return <h4>Loading...{id}</h4>
  }

  return (
    <div className={classes.product_card}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <h3 className={classes.price}>Price: ${product.price}</h3>
      <p>{product.description}</p>
      <div className='product-buttons-div'>
        <button className='secondary-btn' onClick={() => navigate('/')}>
          ← Back
        </button>
        <button
          className='primary-btn'
          onClick={() => dispatch(addItem(product))}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
