import './Header.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../Cart';

function Header({compras, deleteItem}) {

    function openCart() {
        const cart = document.querySelector('.cart');
            if (cart.style.display === 'none') {
                cart.style.display = 'flex'
            } else {
                cart.style.display = 'none'
            }  

        const menu = document.querySelector('.nav');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none'
        }
    }

    function openMenuMobile() {
        const menu = document.querySelector('.nav');
            if (menu.style.display === 'none') {
                menu.style.display = 'flex'
            } else {
                menu.style.display = 'none'
            }  

            const cart = document.querySelector('.cart');
            if (cart.style.display === 'flex') {
                cart.style.display = 'none'
            }
    }

    return(
        <header className='header container'>
        <a href='#logo'><img src='assets/logo.svg' alt='Logo Casa Verde'/> </a>  
            <nav className='nav-header'>
            <RxHamburgerMenu className='menu__hamburger' onClick={() => openMenuMobile()} size={40}/>
                <ul className='nav'>         
                    <li key={1}><a href='#comofaver'>Como fazer </a></li>
                    <li key={2}><a href='#ofertas'>Ofertas</a></li>
                    <li key={3}><a href='#depoimentos'> Depoimentos</a></li>
                    <li key={4}><a href='#videos'>Videos</a></li>
                </ul>
                <div className='carrinho'>
                        <AiOutlineShoppingCart className='cart-icon' size={25} onClick={ () => openCart()}/>
                        <Cart compras={compras}  deleteItem={deleteItem} />             
                </div>
            </nav>
        </header>
    )
}

export default Header