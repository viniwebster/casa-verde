import CartItem from '../CartItem';
import './Cart.css';

function Cart({compras, deleteItem}) {
    return(
        <div>
            <ul className='cart'>
                {compras.length === 0 ? 'Your Cart is empty' :  compras.map(compra => <CartItem key={compra.id} id={compra.id} img={compra.imagem} nomeProduto={compra.nome} preco={`R$ ${compra.preco}`}  deleteItem={deleteItem}/>)}                       
            </ul>
        </div>
    )
}

export default Cart 