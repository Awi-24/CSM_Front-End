import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Aulas from './components/Aulas';

function App() {
  return (
    <Router>
      <Navbar />
      <Aulas />
{/*   <Route path="/aulas" Component={Aulas} />
      <Route path="/voluntariado" Component={Voluntariado} />
      <Route path="/inicio" Component={Inicio} />
      <Route path="/juridico" Component={Juridico} />
      <Route path="/psico-social" Component={PsicoSocial} />
      <Route path="/usuario" Component={Usuario} /> */}
      <Footer />
    </Router>
  );
}

export default App;