import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import ProductList from './pages/productList/ProductList';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
