import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Material from './Components/Material/Material';
import Signin from './Components/Signin/Signin';
import State from './Components/States/State';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Forgot from './Components/Material/Forgot';
import Checkout from './Components/Checktout/Checkout';
import Trans from "./Components/Effect/Trans"
import Appbar from "./Components/Task/Navbar"
import Main from "./Components/Task/Main"
import Banner from "./Components/Task/Banner"
import Banner2 from './Components/Task/Banner2';
import { HashLink as Link } from 'react-router-hash-link';
function App() {
  return (
  <BrowserRouter>
    <Appbar/>
    <Main/>
    <Banner/>
    <Banner2/>
  </BrowserRouter>
  );
}

export default App;
