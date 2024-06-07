import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Home from './components/Home';
import MenShoes from './components/MenShoes';
import WomenShoes from './components/WomenShoes';
import Cart from './components/Cart';
import Header from './components/Header';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men-shoes" element={<MenShoes />} />
                    <Route path="/women-shoes" element={<WomenShoes />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
