import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Desenvolvimento from './pages/desenvolvimento/Desenvolvimento';
import Landing from './pages/landing/Landing';
import Juridico from './pages/juridico/Juridico';
import Aulas from './pages/desenvolvimento/Aulas';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';
import Engajamento from './pages/engajamento/Engajamento';
import Assistencia from './pages/assistencia/Assistencia';
import Admin from './pages/admin/Admin';
import Usuario from './pages/usuario/Usuario';
import psicossocial from './pages/psicossocial/psicossocial';


function App() {
  return (
    <Router>
      <div className='sticky top-0 z-50 w-full'>
      <Navbar  />
      </div>
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/desenvolvimento' Component={Desenvolvimento}/>
        <Route path='/engajamento' Component={Engajamento}/>
        <Route path="/engajamento" Component ={Engajamento}/>
        <Route path="/juridico" Component={Juridico}/>
        <Route path="/assistencia" Component={Assistencia}/>
        <Route path="/desenvolvimento/aulas" Component={Aulas}/>
        <Route path='/conta/login' Component={Login}/>
        <Route path='/conta/registro' Component={Registro}/>  
        <Route path='/conta/admin' Component={Admin}/>   
        <Route path='/conta/usuario' Component={Usuario}/>
        <Route path='/psicossocial' Component={psicossocial}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;