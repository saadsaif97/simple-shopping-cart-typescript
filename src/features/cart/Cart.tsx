import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import {
  cartProduct,
  cartSelector,
  increaseItem,
  decreaseItem,
  removeItem,
  emptyTheCart,
} from './cartSlice'
import clsses from './cart.module.css'
import { useNavigate } from 'react-router'

const Cart = () => {
  const cart: cartProduct[] = useSelector(cartSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let total: number = 0
  cart.map(
    (item) => (total += (item.quantity ? item.quantity : 1) * item.price)
  )

  if (cart.length === 0) {
    return <h3>No item in cart</h3>
  }

  return (
    <div>
      <h1>Cart</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {total > 0 && (
          <h2>
            <span style={{ fontWeight: 'lighter' }}>Total:</span>{' '}
            <strong>${total.toFixed(2)}</strong>
          </h2>
        )}

        <button
          className='primary-btn'
          onClick={() => {
            dispatch(emptyTheCart())
            Swal.fire(
              'Order Placed!',
              `Thanks for your dummy order! <br/>
              Total: $${total.toFixed(2)}
              `,
              'success'
            )
            navigate('/')
          }}
        >
          Checkout
        </button>
      </div>

      {cart.map((item, index) => (
        <div key={index} className={clsses.cart_card}>
          <h5
            className={clsses.delete_icon}
            onClick={() => dispatch(removeItem(item))}
          >
            X
          </h5>
          <div className={clsses.cart_item_details}>
            <h4>{item.title.slice(0, 30)}...</h4>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <button
                className='secondary-btn'
                onClick={() => dispatch(increaseItem(item))}
              >
                +
              </button>
              <p style={{ margin: '0 10px' }}>{item.quantity}</p>
              <button
                className='secondary-btn'
                style={{ marginRight: 'auto' }}
                onClick={() => dispatch(decreaseItem(item))}
              >
                -
              </button>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ fontFamily: 'monospace' }}>
                ${item.price} X {item.quantity} = $
                {item.price * (item.quantity ? item.quantity : 1)}
              </p>
            </div>
          </div>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  )
}

export default Cart
