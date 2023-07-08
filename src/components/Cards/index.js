import './Cards.css';

function Cards({nome, preco, imagem, add}) {

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
                    <button onClick={() => add({nome, preco, imagem})}>Comprar</button>
                    <img src='assets/seta.svg' alt='seta' />
                </div>
            </div>
        </li>
    )
}

export default Cards