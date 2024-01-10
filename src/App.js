import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import About from './components/about/About';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
    <div className='App'> 
   <Navbar></Navbar>
   <Home></Home>
   <About></About>
<Footer></Footer>   
    </div>
    </>
  );
}

export default App;
