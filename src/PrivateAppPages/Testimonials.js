// client/src/components/Testimonials.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonials = ({ apiUrl }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/testimonials");
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) return <div className="flex items-center justify-center">
      <div className="relative">
        {/* Outer Ring */}
        {/* <div className="h-12 w-12 rounded-full border-4 border-slate-200"></div> */}
        {/* Animated Spin Ring */}
        <div className="absolute top-0 left-0 h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent">loading</div>
      </div>
    </div>

  return (
    <section className="mb-16 bg-pink-200 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What Our Previous Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105">
            {/* <img
              src={`${apiUrl.replace('/api', '')}${testimonial.image}`}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 mb-4"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/96?text=Avatar'; }}
            /> */}
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600 italic mt-3">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;