import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
{/*       <Route path="/aulas" Component={Aulas} />
      <Route path="/voluntariado" Component={Voluntariado} />
      <Route path="/inicio" Component={Inicio} />
      <Route path="/juridico" Component={Juridico} />
      <Route path="/psico-social" Component={PsicoSocial} />
      <Route path="/usuario" Component={Usuario} /> */}
    </Router>
  );
}

export default App;