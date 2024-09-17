import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p>123 E-commerce St.</p>
                    <p>Shop City, SC 12345</p>
                    <p>Email: info@ecommerce.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2"><a href="/" className="hover:text-gray-400">Home</a></li>
                        <li className="mb-2"><a href="/products" className="hover:text-gray-400">Products</a></li>
                        <li className="mb-2"><a href="/cart" className="hover:text-gray-400">Cart</a></li>
                        <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 mb-4 text-gray-800"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} E-commerce Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
