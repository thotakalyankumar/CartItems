import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'
import Home from './components/Home'
import CartContext from './context/CartContext'

import './App.css'

const shopData = [
  {
    id: 1,
    cost: 250,
    imageUrl:
      'https://res.cloudinary.com/dtayp31ut/image/upload/v1672938992/oil_image_fm4coc.jpg',
    quantity: 0,
  },
  {
    id: 2,
    cost: 225,
    imageUrl:
      'https://res.cloudinary.com/dtayp31ut/image/upload/v1672940167/watch_orxhaz.jpg',
    quantity: 0,
  },

  {
    id: 3,
    cost: 320,
    imageUrl:
      'https://res.cloudinary.com/dtayp31ut/image/upload/v1672940204/headphones_e4h66y.jpg',
    quantity: 0,
  },
]

class App extends Component {
  state = {
    cartList: [...shopData],
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    console.log(cartList)
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity >= 0) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  render() {
    const {cartList} = this.state
    const updatedData = cartList
    console.log(updatedData)

    return (
      <CartContext.Provider
        value={{
          cartList,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
