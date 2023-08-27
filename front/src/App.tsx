import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Desenvolvimento from './pages/desenvolvimento/Desenvolvimento';
import Landing from './pages/landing/Landing';
import Voluntariado from './pages/voluntariado/Voluntariado';
import Juridico from './pages/juridico/Juridico';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/desenvolvimento' Component={Desenvolvimento}/>
        <Route path="/voluntariado" Component ={Voluntariado}/>
        <Route path="/proteção/juridica" Component={Juridico}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;