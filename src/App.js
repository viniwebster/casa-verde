import './App.css';
import Banner from './components/Banner';
import CardInfos from './components/Infos';
import Ofertas from './components/Ofertas';
import Header from './components/header';

function App() {

  const cardItens = [
    {
      nome: 'Ajuga reptans',
      preco: 20.00,
      imagem: 'assets/produto-01.png'
    },
    {
      nome: 'Cordyline fruticosa',
      preco: 20.00,
      imagem: 'assets/produto-02.png'
    },
    {
      nome: 'Crassula ovata',
      preco: 20.00,
      imagem: 'assets/produto-03.png'
    },
    {
      nome: 'Cyperus rotundus',
      preco: 20.00,
      imagem: 'assets/produto-04.png'
    },
    {
      nome: 'Delairea odorata',
      preco: 20.00,
      imagem: 'assets/produto-05.png'
    },
    {
      nome: 'Datura metel',
      preco: 20.00,
      imagem: 'assets/produto-06.png'
    }
  ]


  return (
    <div className="App">
      <Header />
      <Banner 
      titulo={'Melhores plantas'} 
      descricao={'Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca'} placeholder={'Insira seu email'} type={'email'}/>
      <CardInfos subtitulo={'Como conseguir'} titulo={'minha planta'}/>
      <Ofertas cards={cardItens} />
    </div>
  );
}

export default App;
