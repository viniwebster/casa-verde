import CampoEmail from '../CampoEmail';
import './Banner.css';

function Banner({titulo, descricao}) {
    return (
        <section className='banner container'>
            <div className='banner__title'>
                <span>Sua casa com as</span>
                <h1>{titulo}</h1>
                <p>{descricao}</p>       
                <CampoEmail type={'email'} placeholder={'Insira seu e-mail'}textoBotao={'Assinar newsletter'}/>
            </div>    
            <img src='assets/imagem-hero.png'/>
        </section>
    )
}

export default Banner