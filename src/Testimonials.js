import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Happy Customer',
        review: 'This is the best product I have ever purchased! The quality is top-notch, and the customer service was excellent.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Satisfied Buyer',
        review: 'Amazing experience! Fast shipping and great products. Highly recommend this store to everyone.',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        title: 'Frequent Shopper',
        review: 'I have bought multiple products from this site, and every time they exceed my expectations. Fantastic service!',
        image: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
];

function Testimonials() {
    return (
        <section className="bg-gray-100 py-16 mt-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">"{testimonial.review}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
