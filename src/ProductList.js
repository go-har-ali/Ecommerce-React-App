import React, { useState } from 'react';
import Product from './Product';

function ProductList({ products, addToCart }) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Set the number of products per page

    // Calculate the indices for slicing the products array
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Handle changing the page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="flex items-center justify-center mt-14 h-full">
                <h2 className="text-5xl font-bold mb-6 text-center">Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            
            {/* Pagination Controls */}
            <div className="flex justify-center mt-16">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${
                            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductList;




