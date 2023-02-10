import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Material from './Components/Material/Material';
import Signin from './Components/Signin/Signin';
import State from './Components/States/State';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Forgot from './Components/Material/Forgot';
import AlbumLayout from './Components/Material/AlbumLayout';
import Checkout from './Components/Checkout';
function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' exact={true} element={<Material/>}/>
      <Route path="/signin" exact={true} element={<Signin/>}/>
      <Route path='signup' exact={true} element={<Material/>}/>
      <Route path="forget" exact={true} element={<Forgot/>}/>
    </Routes>
    </BrowserRouter> */}
    <Checkout/>
    </>
  );
}

export default App;
