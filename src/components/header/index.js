import './Header.css';

function Header() {
    return(
        <header className='header container'>
        <a href='#logo'><img src='assets/logo.svg' alt='Logo Casa Verde'/> </a>  
            <nav>
                <ul className='nav'>
                    <li key={1}><a href='#comofaver'>Como fazer </a></li> /
                    <li key={2}><a href='#ofertas'>Ofertas</a></li> /
                    <li key={3}><a href='#depoimentos'> Depoimentos</a></li> /
                    <li key={4}><a href='#videos'>Videos</a></li> /
                    <li key={5}><a href='#meu carrinho'>Meu carrinho</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header