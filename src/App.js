import './App.css';
import Home from './Components/Home.js/Home';
import Navs from './Components/Navs.js/Nav';
import Header from "./Components/Home.js/Header"
import Footer from './Components/Footer.js/Footer';

function App() {
  return (
      <fragment>
        <Navs/>
        <Header/>
        <Home/>
        <Footer/>
      </fragment>
  );
}

export default App;
