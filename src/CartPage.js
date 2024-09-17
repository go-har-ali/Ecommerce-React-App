import React from 'react';

function CartPage({ cart, removeFromCart }) {
    return (
        <div className="container mx-auto p-4 mt-16">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id} className="flex justify-between items-center mb-4 border-b pb-2">
                            <div>
                                <h3 className="text-lg">{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartPage;
