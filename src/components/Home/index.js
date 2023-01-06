import {BiRupee} from 'react-icons/bi'
import Header from '../Header'
import CartItem from '../About'
import CartContext from '../../context/CartContext'

import './index.css'

const Home = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      let Products = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.cost * eachCartItem.quantity
        Products += eachCartItem.quantity
      })

      return (
        <>
          <Header />

          <div className="bg-container">
            <ul className="cards-container">
              {cartList.map(eachItem => (
                <CartItem key={eachItem.id} cartDetails={eachItem} />
              ))}
            </ul>

            <button type="button" className="All-Products-Button">
              Add Products
            </button>
            <div className="Footer-Container">
              <p className="total-Products">
                <span className="number">{Products}</span> Products selected
              </p>
              <p className="price-text">
                Total Price <BiRupee size={15} />
                <span className="number">{total}</span>
              </p>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Home
