import './Header.css';

function Header() {
    return(
        <header className='header container'>
        <a href='#logo'><img src='assets/logo.svg' alt='Logo Casa Verde'/> </a>  
            <nav>
                <ul className='nav'>
                    <li><a href='#comofaver'>Como fazer </a></li> /
                    <li><a href='#ofertas'>Ofertas</a></li> /
                    <li><a href='#depoimentos'> Depoimentos</a></li> /
                    <li><a href='#videos'>Videos</a></li> /
                    <li><a href='#meu carrinho'>Meu carrinho</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header