import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Offers from './pages/Offers';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import ElectronicsStore from './pages/ElectronicsStore';
import FashionStore from './pages/FashionStore';
import BooksStore from './pages/BooksStore';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="weverse-app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            {/* Sub-stores routes */}
            <Route path="/electronics" element={<ElectronicsStore />} />
            <Route path="/fashion" element={<FashionStore />} />
            <Route path="/books" element={<BooksStore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 