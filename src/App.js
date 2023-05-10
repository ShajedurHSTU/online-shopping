
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProductContextProvider from './Global/ProductContextProvider';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import CartContextProvider from './Global/CartContextProvider';
import MenuBar from './components/MenuBar/MenuBar';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      
      <ProductContextProvider>
        <CartContextProvider>
        <Router>
          <NavBar></NavBar>
            <Banner></Banner>
            <MenuBar></MenuBar>
          <Routes>
            <Route  path='/'  element={< Products/>} />
            <Route  path='/cart' element={<Cart />} />
            <Route  path='*' element={< NotFound/>} />
          </Routes>
        </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
