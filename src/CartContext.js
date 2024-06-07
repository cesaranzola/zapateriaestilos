import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor de contexto
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeItemFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter(i => i !== item));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para usar el contexto
export function useCart() {
    return useContext(CartContext);
}
