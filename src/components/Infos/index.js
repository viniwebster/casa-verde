import './Infos.css';

function CardInfos({titulo, subtitulo}) {

    const lista = [
        "Escolha suas plantas",
        "Faça seu pedido",
        "Aguarde na sua casa"
    ]

    return(
    <section className='container'>
        <div className='card__infos'>
            <img src='assets/planta-como-conseguir.png' alt='planta'/>           
            <div className='card__infos-infos'>
                <h4>{subtitulo}</h4>
                <h3>{titulo}</h3>
                <ul>
                    {lista.map((item, index) =>
                        <div className='info'> 
                            <img src='assets/Ellipse.svg' alt='Elipse'/>
                            <li key={index}>{item}</li>                   
                        </div>
                    )}
                </ul>
            </div>
        </div>
    </section>
    )
}

export default CardInfos