import React from 'react';
import { useCart } from '../CartContext'; // Importar el contexto del carrito
import './WomenShoes.css';

function WomenShoes() {
    const { addItemToCart, removeItemFromCart, cartItems } = useCart();

    const images = [
        { src: 'parquet-2152249_1280.jpg', name: 'Parquet Shoes' },
        { src: 'pumps-2364722_1280.jpg', name: 'Pumps Shoes' },
        { src: 'winter-boots-3846863_1280.jpg', name: 'Winter Boots' },
        { src: 'womens-shoes-4745347_1280.jpg', name: 'Women’s Shoes' },
        { src: 'red-2358787_1280.jpg', name: 'Red Shoes' },
        { src: 'ankle-boots-3053473_1280.jpg', name: 'Ankle Boots' },
        { src: 'shoe-2258549_1280.jpg', name: 'Casual Shoe' },
        { src: 'winter-boots-795706_1280.jpg', name: 'Winter Boots' },
        { src: 'womens-shoes-178162_1280.jpg', name: 'Women’s Shoes' }
    ];

    const isInCart = (item) => cartItems.includes(item);

    return (
        <div className="women-shoes-container">
            {images.map((image, index) => (
                <div key={index} className="women-shoe">
                    <img 
                        src={`/images/${image.src}`} 
                        alt={image.name} 
                    />
                    <div className="women-shoe-info">
                        <h4>{image.name}</h4>
                        {!isInCart(image) ? (
                            <button onClick={() => addItemToCart(image)}>
                                Agregar al Carrito
                            </button>
                        ) : (
                            <button onClick={() => removeItemFromCart(image)}>
                                Eliminar del Carrito
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WomenShoes;
