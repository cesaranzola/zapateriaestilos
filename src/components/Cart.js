import React from 'react';
import { useCart } from '../CartContext';
import './Cart.css';

function Cart() {
    const { cartItems, removeItemFromCart } = useCart();

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={`/images/${item.src}`} alt={item.name} />
                            <div className="item-info">
                                <h4>{item.name}</h4>
                                <button onClick={() => removeItemFromCart(item)}>
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
