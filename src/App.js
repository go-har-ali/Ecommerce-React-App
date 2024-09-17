import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CartPage from './CartPage';
import HomePage from './HomePage';
import Footer from './Footer';
import Testimonials from './Testimonials';

function App() {
    const [cart, setCart] = useState([]);

    const products = [
        // Your product data here
        { id: 1, name: 'Product 1', price: 100, description: 'This is a fantastic product!', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 2, name: 'Product 2', price: 200, description: 'An amazing product!', image: 'https://plus.unsplash.com/premium_photo-1670537995115-1c4c9184821b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 3, name: 'Product 3', price: 300, description: 'A premium product!', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 4, name: 'Product 4', price: 400, description: 'This product is worth every penny!', image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 5, name: 'Product 5', price: 500, description: 'An excellent choice!', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 6, name: 'Product 6', price: 600, description: 'Top-notch quality!', image: 'https://images.unsplash.com/photo-1505236273191-1dce886b01e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 7, name: 'Product 7', price: 700, description: 'Best seller!', image: 'https://images.unsplash.com/photo-1525980955931-afd2d0adf1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY1fHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 8, name: 'Product 8', price: 800, description: 'Highly recommended!', image: 'https://images.unsplash.com/photo-1508770232642-16d4252d4a40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcxfHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 9, name: 'Product 9', price: 900, description: 'Popular choice!', image: 'https://images.unsplash.com/photo-1542745979-770f28b4aba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk2fHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 10, name: 'Product 10', price: 1000, description: 'A great product!', image: 'https://images.unsplash.com/photo-1543238825-261809be9621?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE1fHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 11, name: 'Product 11', price: 1100, description: 'High-quality product!', image: 'https://images.unsplash.com/photo-1557418776-16baa07f1368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDYwfHxwcm9kdWN0fGVufDB8fDB8fHww' },
        { id: 12, name: 'Product 12', price: 1200, description: 'An essential product!', image: 'https://images.unsplash.com/photo-1700107650924-d42d35552841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDg5fHxwcm9kdWN0fGVufDB8fDB8fHww' },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    return (
        <Router>
            {/* < className="pt-16 container mx-auto p-4"> */}
                <Navbar cart={cart} />

                <Routes>
                    <Route
                        path="/"
                        element={<HomePage products={products} addToCart={addToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
                    />
                </Routes>

                <Testimonials />

                <Footer />
            
        </Router>
    );
}

export default App;


