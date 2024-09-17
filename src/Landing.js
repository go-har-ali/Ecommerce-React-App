import React from 'react';

function Landing() {
    return (
        <div className="landing-page bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://lilacinfotech.com/lilac_assets/images/blog/Top-10-E-commerce-App-Development-Companies.jpg)' }}>
            <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white p-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Our Store</h1>
                <p className="text-lg md:text-2xl mb-8 text-center">
                    Discover the best products at unbeatable prices.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition duration-300">
                    Shop Now
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:bg-opacity-40 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
                        <p>On all orders over $50</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:bg-opacity-40 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-2">Quality Products</h3>
                        <p>Handpicked and tested for quality</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:bg-opacity-40 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-2">Customer Support</h3>
                        <p>Available 24/7 for all your needs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
