import Cards from '../Cards';
import './Ofertas.css';

function Ofertas({cards}) {
    return (
    <section className='ofertas container'>
        <h3>Conheça nossas</h3>
        <h2>ofertas</h2>
        <ul className='produtos'>
            {cards.map(card => <Cards key={card.nome} nome={card.nome} preco={card.preco} imagem={card.imagem} />)}
        </ul>
    </section>
    )
}

export default Ofertas