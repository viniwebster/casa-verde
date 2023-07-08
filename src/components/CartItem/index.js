import './CartItem.css';
import { AiFillDelete } from 'react-icons/ai';

function CartItem({img, nomeProduto, preco, deleteItem, id}) {
    return(
        <li className='item-comprado'>
        <div className='item-nome'>
            <img src={img} size={25} alt='foto do produto' />
            <span> {nomeProduto} </span>
        </div> 
            
            <div className='preco__container'>
                <span> {preco} </span>
                <AiFillDelete onClick={ () => deleteItem(id)}/>
            </div>
        </li>
    )
}

export default CartItem