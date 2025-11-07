import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaUser, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tankSize: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const tankSizes = [
    "4×4 ft RCC Septic Tank",
    "8×3 ft RCC Septic Tank", 
    "4×3 ft RCC Septic Tank",
    "4×4 ft Commercial Tank",
    "8×3 ft Industrial Tank",
    "4×5 ft RCC Septic Tank",
    "5×2.50 ft RCC Septic Tank",
    "8×2.50 ft RCC Septic Tank",
    "Custom Size",
    "Not Sure - Need Guidance"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your enquiry! We will contact you within 24 hours.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        tankSize: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      info: "+91 8534976439",
      link: "tel:+918534976439",
      description: "Mon-Sun: 8AM - 8PM",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp", 
      info: "+91 8534976439",
      link: "https://wa.me/918534976439",
      description: "Quick response guaranteed",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      info: "usmanseptiktankuk17@gmail.com",
      link: "mailto:usmanseptiktankuk17@gmail.com",
      description: "Send us your requirements",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      info: "Roorkee Railway Station, Paniyala Road",
      link: "#",
      description: "Get free site consultation",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-xl" />,
      name: "Facebook",
      url: "#",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      name: "Instagram", 
      url: "#",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "#",
      color: "bg-blue-400 hover:bg-blue-500"
    }
  ];

  // Staggered animation delay function
  const getStaggerDelay = (index) => {
    return index * 100;
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Free Quote & Consultation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in our RCC septic tanks? Get expert guidance and the best prices today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"> {/* Added items-stretch for same height */}
          
          {/* Contact Methods */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="flex-1 space-y-6"> {/* Added flex-1 for equal height */}
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="block group"
                  >
                    <div className={`bg-white rounded-2xl p-6 border border-amber-200 hover:shadow-xl transition-all duration-500 hover:border-amber-300 group-hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <div className="text-white">
                            {method.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{method.title}</h4>
                          <p className="text-gray-700 font-semibold mb-1">{method.info}</p>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className={`bg-white rounded-2xl p-6 border border-amber-200 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '500ms' }}>
                <h4 className="font-bold text-gray-900 mb-4 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 ${social.color} text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2 flex"> {/* Added flex for same height */}
            <div className={`bg-white rounded-3xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-700 flex-1 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Enquiry</h3>
                <p className="text-gray-600">Fill the form below and get free consultation</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-3">
                      <FaUser className="inline mr-2 text-amber-600" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-3">
                      <FaPhone className="inline mr-2 text-amber-600" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-3">
                      <FaEnvelope className="inline mr-2 text-amber-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Tank Size */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-3">
                      Interested Tank Size
                    </label>
                    <select
                      name="tankSize"
                      value={formData.tankSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400 appearance-none bg-white"
                    >
                      <option value="">Select tank size</option>
                      {tankSizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 group-hover:border-amber-400 resize-none"
                    placeholder="Tell us about your specific requirements, site details, or any questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                  {!isSubmitting && <FaArrowRight className="text-sm" />}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;