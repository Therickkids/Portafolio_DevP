import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Items from './pages/items/Items';
import Perfil from './pages/perfil/Perfil';
import Footer from './components/Footer';
import Calculo from './components/Calculo';
import ImageGallery from './components/ImageGallery';
import Main from './pages/main/Main';
import MyComponent from './services/MyComponent';
import Image from './services/Image';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/calculo" element={<Calculo />} />
          <Route path="/imagegallery" element={<ImageGallery />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mycomponent" element={<MyComponent />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
