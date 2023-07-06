import './Email.css';

function CampoEmail({textoBotao, type, placeholder}) {
    return (
        <div className='inputEmail'>
            <input type={type} placeholder={placeholder} />
            <button>{textoBotao}</button>
        </div>
    )
}

export default CampoEmail