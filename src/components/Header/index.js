import {AiOutlineArrowLeft} from 'react-icons/ai'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-large-container">
        <AiOutlineArrowLeft color="black" size={30} className="arrow" />
        <p className="shop">Shop</p>
      </div>
    </div>
  </nav>
)

export default Header
