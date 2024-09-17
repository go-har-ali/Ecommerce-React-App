import React from 'react';
import Landing from './Landing';
import ProductList from './ProductList';

function HomePage({ products, addToCart }) {
    return (
        <div>
            <Landing />
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
}

export default HomePage;
