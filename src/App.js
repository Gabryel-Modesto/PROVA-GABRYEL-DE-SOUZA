
import './App.css';
import Navbarra from './components/Navbarra';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Produtos from './pages/Produtos';
import CadastroProdutos from './pages/CadastroProdutos';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Navbarra />
        <Routes>
           <Route path='/' element={< Login/>} /> 
          <Route path='/Produtos' element={<Produtos />} />
          <Route path='/CadastroProdutos' element={<CadastroProdutos />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
