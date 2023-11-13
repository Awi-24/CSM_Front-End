import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Desenvolvimento from './pages/desenvolvimento/Desenvolvimento';
import Landing from './pages/landing/Landing';
import Voluntariado from './pages/engajamento/Engajamento';
import Juridico from './pages/juridico/Juridico';
import Aulas from './pages/desenvolvimento/Desenvolvimento';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';
import Engajamento from './pages/engajamento/Engajamento';
import Assistencia from './pages/assistencia/Assistencia';
import Admin from './pages/admin/Admin';
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
        <Route path="/voluntariado" Component ={Voluntariado}/>
        <Route path="/juridico" Component={Juridico}/>
        <Route path="/psicossocial" Component={psicossocial}/>
        <Route path="/assistencia" Component={Assistencia}/>
        <Route path="/aulas" Component={Aulas}/>
        <Route path='/conta/login' Component={Login}/>
        <Route path='/conta/registro' Component={Registro}/>  
        <Route path='/conta/admin' Component={Admin}/>      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;