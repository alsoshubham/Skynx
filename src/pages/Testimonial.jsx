import { Star } from 'lucide-react';
import { useRef } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Restaurant Owner',
      content: 'Skynx Globals has been our trusted supplier for years. Their spices are consistently fresh and authentic.',
      rating: 4.7,
      image: '',
      type: 'Spices'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Food Manufacturer',
      content: 'Excellent bulk pricing and reliable delivery. Their turmeric powder quality is unmatched in the market.',
      rating: 4.9,
      image: '',
      type: 'Spices'
    },
    {
      name: 'Sarah Johnson',
      role: 'Home Chef',
      content: 'The aroma and flavor of their spices transport me straight to India. Absolutely love their garam masala!',
      rating: 5,
      image: '',
      type: 'Spices'
    },
    {
      name: 'Rohit Verma',
      role: 'Fitness Enthusiast',
      content: 'The Classic Makhana is my go-to snack! Crunchy, healthy, and so flavorful. Highly recommended for guilt-free munching.',
      rating: 4.3,
      image: '',
      type: 'Makhana'
    },
    {
      name: 'Meera Patel',
      role: 'Working Mom',
      content: 'My kids love the Caramel Makhana! It\'s the perfect sweet treat for their lunchboxes and after-school snacks.',
      rating: 4.8,
      image: '',
      type: 'Makhana'
    },
    {
      name: 'Sandeep Singh',
      role: 'Corporate Professional',
      content: 'Spicy Makhana is a must-have during my office breaks. The right amount of heat and crunch keeps me energized!',
      rating: 4.5,
      image: '',
      type: 'Makhana'
    }
  ];

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild?.offsetWidth || 320;
      carouselRef.current.scrollBy({
        left: direction === 'right' ? cardWidth + 24 : -(cardWidth + 24),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-medium text-4xl font-serif text-center text-[#0D0D0D] mb-5">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from spice and makhana lovers across the globe
          </p>
        </div>
        <div className="relative">
          <button
            aria-label="Scroll testimonials left"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-700 hover:bg-gray-200 rounded-full shadow p-1 transition-colors"
            style={{ display: 'block' }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 hide-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-xs flex-shrink-0 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 flex flex-col h-full mx-auto"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="flex items-center mb-2">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow" />
                  ))}
                  {testimonial.rating % 1 >= 0.3 && testimonial.rating % 1 < 0.8 && (
                    <Star className="w-5 h-5 text-yellow-400 opacity-60" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  )}
                  {testimonial.rating % 1 >= 0.8 && (
                    <Star className="w-5 h-5 text-yellow-400 fill-current drop-shadow" />
                  )}
                  <span className="ml-2 text-gray-700 font-semibold text-sm">({testimonial.rating.toFixed(1)})</span>
                </div>
                <p className="text-gray-800 mb-3 italic font-medium">"{testimonial.content}"</p>
                <div className="flex items-center mt-auto">
                  {/* Default user icon */}
                  <div className="w-12 h-12 rounded-full mr-3 bg-gray-200 flex items-center justify-center border-2 border-gray-300 shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M4 19c0-2.5 3.5-4.5 8-4.5s8 2 8 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-black">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-xs mt-1 px-2 py-0.5 rounded bg-gray-100 text-gray-700 inline-block">
                      {testimonial.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Scroll testimonials right"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-700 hover:bg-gray-200 rounded-full shadow p-1 transition-colors"
            style={{ display: 'block' }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      {/* Hide scrollbar utility */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;