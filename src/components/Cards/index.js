import './Cards.css';

function Cards({nome, preco, imagem}) {

    const background = {
        background: `url(${imagem})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    }

    return (
        <li className='card' style={background}>
            <div className='produto__info'>
                <h4>{nome}</h4>
                <span> R$ {preco} </span>
                <div className='produto__info-button'>
                    <button>Comprar</button>
                    <img src='assets/seta.svg' />
                </div>
            </div>
        </li>
    )
}

export default Cards