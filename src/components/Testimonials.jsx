import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Responsive testimonials per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerView(1); // Mobile: 1
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerView(2); // Tablet: 2
      } else {
        setTestimonialsPerView(3); // Desktop: 3
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Roorkee",
      rating: 5,
      comment: "Usman Septic Tanks ne meri factory ke liye 5000L tank install kiya. Quality bahut acchi hai aur service bhi professional. 2 saal ho gaye, koi problem nahi aayi.",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Priya Singh",
      location: "Haridwar", 
      rating: 5,
      comment: "Ghar ke liye 4x4 ft tank liya. Installation team bahut cooperative thi. Price bhi competitive hai. Highly recommend!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Amit Sharma",
      location: "Dehradun",
      rating: 5,
      comment: "Commercial restaurant ke liye 3000L tank lagwaya. Time pe delivery aur professional work. Bahut satisfied hain.",
      date: "3 months ago"
    },
    {
      id: 4,
      name: "Suresh Patel",
      location: "Muzaffarnagar",
      rating: 5,
      comment: "15 saal se inke tanks use kar raha hun. Quality kabhi compromise nahi ki. RCC tanks sabse best hain.",
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Neha Gupta",
      location: "Meerut",
      rating: 5,
      comment: "Quick installation aur reasonable price. WhatsApp pe quick response milta hai. Very reliable service.",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Vikram Yadav",
      location: "Saharanpur",
      rating: 5,
      comment: "Industrial area mein factory ke liye multiple tanks lagwaye. Har tank ki quality same acchi hai. Trusted company.",
      date: "4 months ago"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  // Get current testimonials to show
  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * testimonialsPerView;
    return testimonials.slice(startIndex, startIndex + testimonialsPerView);
  };

  // Staggered animation delay function
  const getStaggerDelay = (index) => {
    return index * 100;
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from our satisfied customers about our RCC septic tanks and services
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Testimonials Grid - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`bg-white rounded-3xl p-6 border border-amber-200 hover:shadow-xl transition-all duration-500 h-full ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${getStaggerDelay(index)}ms`,
                  transform: isVisible ? 'scale(1)' : 'scale(0.95)'
                }}
              >
                {/* Quote Icon */}
                <div className="text-amber-500 mb-4">
                  <FaQuoteLeft className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {testimonial.comment}
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-amber-100">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel - Visible only on mobile */}
          <div className="lg:hidden">
            <div className="overflow-hidden rounded-2xl mb-6">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="flex-shrink-0 w-full px-2"
                  >
                    <div className={`bg-white rounded-3xl p-6 border border-amber-200 hover:shadow-xl transition-all duration-500 h-full mx-1 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: `${getStaggerDelay(index)}ms`,
                      transform: isVisible ? 'scale(1)' : 'scale(0.95)'
                    }}>
                      {/* Quote Icon */}
                      <div className="text-amber-500 mb-4">
                        <FaQuoteLeft className="w-8 h-8" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Comment */}
                      <p className="text-gray-700 mb-6 leading-relaxed text-base">
                        {testimonial.comment}
                      </p>

                      {/* Customer Info */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-amber-100">
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className={`flex justify-between items-center px-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Slide Indicator */}
            <div className="text-center">
              <span className="text-gray-700 font-medium text-sm">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className={`flex justify-center space-x-3 mt-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '500ms' }}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-amber-600 scale-125' 
                    : 'bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-3xl p-8 text-center shadow-2xl transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <p className="text-amber-100 text-lg">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-amber-100 text-lg">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-amber-100 text-lg">Would Recommend</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '700ms' }}>
          <p className="text-gray-600 mb-6">
            Join our family of satisfied customers
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Your Tank Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;