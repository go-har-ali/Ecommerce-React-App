import React from 'react';

function Product({ product, addToCart }) {
    if (!product) return null;

    return (
        <div className="border mt-10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover mb-4 rounded transition-transform duration-300 transform hover:scale-110"
                />
            </div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-bold mb-4">${product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Product;

