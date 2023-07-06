import './Infos.css';

function CardInfos({titulo, subtitulo}) {

    const lista = [
        "Escolha suas plantas",
        "Faça seu pedido",
        "Aguarde na sua casa"
    ]

    return(
        <div className='card__infos container'>
            <img src='assets/planta-como-conseguir.png' />           
            <div className='card__infos-infos'>
                <h4>{subtitulo}</h4>
                <h3>{titulo}</h3>
                <ul>
                    {lista.map(item =>
                        <div className='info'> 
                            <img src='assets/Ellipse.svg' alt='Elipse'/>
                            <li>{item}</li>                   
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default CardInfos