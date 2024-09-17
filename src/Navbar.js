import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cart }) {
    return (
        <nav className="bg-blue-400 bg-opacity-50 fixed h-12 w-full top-0 left-0 z-10 shadow-md border-b border-gray-200">

            <div className="container mx-auto flex justify-between items-center">
                {/* Brand Name */}
                <div className=" text-blue text-2xl font-bold mt-2">
                    <Link to="/">E-Commerce Store</Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4 mt-2 font-bold text-xl">
                    <Link to="/" className="text-blue hover:underline">
                        Products
                    </Link>
                    <Link to="/cart" className="text-blue hover:underline relative">
                        Cart
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
