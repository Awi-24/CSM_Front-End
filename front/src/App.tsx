import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Desenvolvimento from './pages/desenvolvimento/Desenvolvimento';
import Landing from './pages/landing/Landing';
import Voluntariado from './pages/engajamento/Engajamento';
import Juridico from './pages/juridico/Juridico';


function App() {
  return (
    <Router>
      <div className='sticky top-0 z-50 w-full'>
      <Navbar  />
      </div>
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