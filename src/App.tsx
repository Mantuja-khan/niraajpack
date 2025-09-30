import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Trading from './pages/Trading';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ProductCategory from './pages/ProductCategory';
import TradingDetail from './pages/TradingDetail';
import ManufacturingDetail from './pages/ManufacturingDetail';

function AppContent() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/manufacturing/:product" element={<ManufacturingDetail />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/trading/:product" element={<TradingDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;