import React from 'react';
import { useCart } from '../CartContext'; // Importar el contexto del carrito
import './MenShoes.css';

function MenShoes() {
    const { addItemToCart, removeItemFromCart, cartItems } = useCart();

    const images = [
        { src: 'shoes-men-3743516_1280.jpg', name: 'Zapato Hombre 1' },
        { src: 'shoes-men-3743530_1280.jpg', name: 'Zapato Hombre 2' },
        { src: 'brown-2202191_1280.jpg', name: 'Zapato Hombre 3' },
        { src: 'sneakers-531172_1280.jpg', name: 'Zapato Hombre 4' },
        { src: 'shoe-3743507_1280.jpg', name: 'Zapato Hombre 5' },
        { src: 'shoes-men-3743542_1280.jpg', name: 'Zapato Hombre 6' },
        { src: 'boot-2558324_1280.jpg', name: 'Zapato Hombre 7' },
        { src: 'walking-boots-3054634_1280.jpg', name: 'Zapato Hombre 8' },
        { src: 'men-7935015_1280.jpg', name: 'Zapato Hombre 9' },
        { src: 'oxford-shoes-6078993_1280.jpg', name: 'Zapato Hombre 10' }
    ];

    const isInCart = (item) => cartItems.includes(item);

    return (
        <div className="men-shoes-container">
            {images.map((image, index) => (
                <div key={index} className="men-shoe">
                    <img 
                        src={`/images/${image.src}`} 
                        alt={image.name} 
                    />
                    <div className="men-shoe-info">
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

export default MenShoes;
