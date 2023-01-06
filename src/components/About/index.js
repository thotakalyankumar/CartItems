import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import '../Home/index.css'
import CartContext from '../../context/CartContext'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartDetails} = props
      const {id, imageUrl, quantity, cost} = cartDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }
      const totalPrice = cost * quantity

      return (
        <li key={id} className="card">
          <div className="details-container">
            <p className="title">Product Name</p>
            <p className="product">Perfume</p>
            <p className="title">Price</p>
            <p className="product">Rs. {totalPrice}</p>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickDecrement}
              >
                <BsDashSquare background-color="#52606D" size={18} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                value={id}
                onClick={onClickIncrement}
              >
                <BsPlusSquare background-color="#52606D" size={18} />
              </button>
            </div>
          </div>
          <div className="image-container">
            <img alt="Image1" className="image" src={imageUrl} />
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)
export default CartItem
