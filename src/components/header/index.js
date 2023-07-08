import './Header.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../Cart';

function Header({compras, deleteItem}) {
    return(
        <header className='header container'>
        <a href='#logo'><img src='assets/logo.svg' alt='Logo Casa Verde'/> </a>  
            <nav>
            <RxHamburgerMenu className='menu__hamburger' size={40}/>
                <ul className='nav'>         
                    <li key={1}><a href='#comofaver'>Como fazer </a></li>
                    <li key={2}><a href='#ofertas'>Ofertas</a></li>
                    <li key={3}><a href='#depoimentos'> Depoimentos</a></li>
                    <li key={4}><a href='#videos'>Videos</a></li>
                    <li className='carrinho'>
                        <AiOutlineShoppingCart  size={25}/>
                        <Cart compras={compras} deleteItem={deleteItem}/>             
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header