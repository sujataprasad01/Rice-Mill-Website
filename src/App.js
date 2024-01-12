import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Export from './components/Export/Export';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (

    <div className='App'> 
    <Router>
    <Navbar></Navbar>
    {/* <Home></Home> */}
    <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/export' element={<Export />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
    <Footer></Footer> 
   </Router>
    </div>
  );
}

export default App;
