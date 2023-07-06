import './App.css';
import Banner from './components/Banner';
import CardInfos from './components/Infos';
import Ofertas from './components/Ofertas';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner 
      titulo={'Melhores plantas'} 
      descricao={'Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca'} placeholder={'Insira seu email'} type={'email'}/>
      <CardInfos subtitulo={'Como conseguir'} titulo={'minha planta'}/>
      <Ofertas />
    </div>
  );
}

export default App;
