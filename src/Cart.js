import React from 'react';

function Cart({ cart, removeFromCart }) {
    return (
        <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="border-b py-2 flex justify-between items-center">
                            <span>{item.name} - ${item.price}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
