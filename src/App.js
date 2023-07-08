import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import CardInfos from './components/Infos';
import Ofertas from './components/Ofertas';
import Header from './components/header';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const cardItens = [
    {
      nome: 'Ajuga reptans',
      preco: 20.00,
      imagem: 'assets/produto-01.png',
      id: uuidv4()
    },
    {
      nome: 'Cordyline fruticosa',
      preco: 30.00,
      imagem: 'assets/produto-02.png',
      id: uuidv4()
    },
    {
      nome: 'Crassula ovata',
      preco: 40.00,
      imagem: 'assets/produto-03.png',
      id: uuidv4()
    },
    {
      nome: 'Cyperus rotundus',
      preco: 50.00,
      imagem: 'assets/produto-04.png',
      id: uuidv4()
    },
    {
      nome: 'Delairea odorata',
      preco: 10.00,
      imagem: 'assets/produto-05.png',
      id: uuidv4()
    },
    {
      nome: 'Datura metel',
      preco: 25.00,
      imagem: 'assets/produto-06.png',
      id: uuidv4()
    }
  ]

  const [compras, setCompras] = useState([]);

  function putOnCart(compra) {
      setCompras([...compras, {...compra, id: uuidv4()}]);
      console.log(compras)
  }

  function removeFromCart(id) {
    setCompras(compras.filter(compra => compra.id !== id ))
  }

  return (
    <div className="App">
      <Header products={cardItens} compras={compras} deleteItem={removeFromCart}/>
      <Banner 
      titulo={'Melhores plantas'} 
      descricao={'Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca'} placeholder={'Insira seu email'} type={'email'}/>
      <CardInfos subtitulo={'Como conseguir'} titulo={'minha planta'}/>
      <Ofertas cards={cardItens} addOnCart={putOnCart}/>
    </div>
  );
}

export default App;
