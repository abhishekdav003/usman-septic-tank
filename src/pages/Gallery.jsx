import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight, FaPlay, FaImage, FaVideo, FaWhatsapp, FaPhone } from "react-icons/fa";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaType, setMediaType] = useState("all");
  const [visibleElements, setVisibleElements] = useState({});

  // Configuration
  const CONTACT_NUMBER = "+918534995127";
  const BUSINESS_NAME = "Usman Septic Tank";
  const OWNER_NAME = "Usman Ansari";

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach((el) => {
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisibleElements(prev => ({ ...prev, [el.id]: true }));
      }
    });

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const isElementVisible = (elementId) => visibleElements[elementId] || false;

  const productData = [
    { width: 4, depth: 4, price: 15000, category: "residential" },
    { width: 4, depth: 6, price: 18000, category: "residential" },
    { width: 4, depth: 8, price: 22000, category: "commercial" },
    { width: 5, depth: 5, price: 20000, category: "residential" },
    { width: 5, depth: 8, price: 28000, category: "industrial" },
    { width: 6, depth: 6, price: 25000, category: "commercial" },
    { width: 6, depth: 8, price: 32000, category: "industrial" },
    { width: 8, depth: 8, price: 40000, category: "custom" },
    { width: 4, depth: 4, price: 15500, category: "commercial" },
    { width: 5, depth: 6, price: 24000, category: "residential" },
    { width: 6, depth: 10, price: 38000, category: "industrial" },
    { width: 8, depth: 6, price: 36000, category: "custom" },
    { width: 4, depth: 10, price: 26000, category: "commercial" },
    { width: 5, depth: 10, price: 34000, category: "industrial" },
    { width: 7, depth: 7, price: 30000, category: "custom" },
    { width: 8, depth: 10, price: 45000, category: "custom" },
    { width: 4, depth: 5, price: 17000, category: "residential" },
    { width: 6, depth: 4, price: 23000, category: "residential" },
    { width: 7, depth: 8, price: 35000, category: "industrial" },
    { width: 10, depth: 10, price: 55000, category: "custom" },
    { width: 5, depth: 4, price: 18500, category: "residential" },
    { width: 6, depth: 5, price: 24000, category: "commercial" },
    { width: 7, depth: 6, price: 28000, category: "industrial" },
    { width: 8, depth: 12, price: 50000, category: "custom" },
    { width: 4, depth: 12, price: 30000, category: "industrial" },
    { width: 9, depth: 9, price: 42000, category: "custom" },
  ];

  const imageFiles = productData.map((product, i) => ({
    id: `img-${i + 1}`,
    src: `/usman-septic-tank/images/${(i % 26) + 1}.jpg`,
    title: `RCC Septic Tank ${product.width}x${product.depth}`,
    category: product.category,
    type: "image",
    size: `${product.width} x ${product.depth} ft`,
    dimensions: { width: product.width, depth: product.depth },
    price: product.price,
    specs: {
      material: "RCC (Reinforced Cement Concrete)",
      warranty: "5 Years",
      installation: "Professional Team Available",
      capacity: `${product.width * product.depth * 2500}L approx`
    }
  }));

  const videoFiles = Array.from({ length: 13 }, (_, i) => ({
    id: `vid-${i + 1}`,
    src: `/usman-septic-tank/videos/video${i + 1}.mp4`,
    thumbnail: `/usman-septic-tank/images/${(i % 26) + 1}.jpg`,
    title: `Installation Video ${i + 1}`,
    category: ["residential", "commercial", "industrial", "custom"][i % 4],
    type: "video",
  }));

  const allMedia = mediaType === "all" ? [...imageFiles, ...videoFiles] : mediaType === "image" ? imageFiles : videoFiles;

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "custom", name: "Custom Projects" },
  ];

  const mediaTypes = [
    { id: "all", name: "All Media", icon: <FaSearch /> },
    { id: "image", name: "Products", icon: <FaImage /> },
    { id: "video", name: "Videos", icon: <FaVideo /> },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMedia = allMedia.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    return categoryMatch;
  });

  const openLightbox = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % filteredMedia.length;
    setSelectedMedia(filteredMedia[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevMedia = () => {
    const prevIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setSelectedMedia(filteredMedia[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleWhatsApp = (productName) => {
    const message = `Hi ${BUSINESS_NAME}, I am interested in inquiring about: ${productName}. Please provide more details and pricing information.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_NUMBER.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${CONTACT_NUMBER}`;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div 
          id="gallery-header"
          data-animate="true"
          className={`text-center mb-12 transition-all duration-700 ${
            isElementVisible('gallery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm font-semibold mb-4 shadow-md border border-amber-200">
            Premium Products & Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            RCC Septic Tank Solutions
          </h1>
          <p className="text-sm text-amber-700 font-semibold mb-4">
            By <span className="text-amber-900">{OWNER_NAME}</span>
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
            Explore our premium collection of RCC septic tanks with multiple sizes and competitive pricing. Professional installation available across Uttarakhand.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full border border-green-200 shadow-md">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm">✓ All Over Uttarakhand Services</span>
          </div>
        </div>

        {/* Media Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {mediaTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setMediaType(type.id);
                setCurrentIndex(0);
              }}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                mediaType === type.id
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              <span>{type.icon}</span>
              <span>{type.name}</span>
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-700 to-orange-700 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-wrap items-center space-x-6 bg-white rounded-2xl px-6 py-4 shadow-lg border border-amber-200">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{imageFiles.length}</div>
              <div className="text-gray-600 text-sm font-medium">Products</div>
            </div>
            <div className="w-px h-10 bg-amber-200 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{videoFiles.length}</div>
              <div className="text-gray-600 text-sm font-medium">Installation Videos</div>
            </div>
            <div className="w-px h-10 bg-amber-200 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{filteredMedia.length}</div>
              <div className="text-gray-600 text-sm font-medium">Showing</div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredMedia.map((media, index) => (
            <div
              key={media.id}
              id={`gallery-item-${media.id}`}
              data-animate="true"
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer group ${
                isElementVisible(`gallery-item-${media.id}`) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              onClick={() => openLightbox(media, index)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Media Container */}
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                {media.type === "image" ? (
                  <img
                    src={media.src}
                    alt={media.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/usman-septic-tank/images/1.jpg";
                    }}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={media.thumbnail || "/usman-septic-tank/images/1.jpg"}
                      alt={media.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = "/usman-septic-tank/images/1.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center transition-transform">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Media Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                    media.type === "image"
                      ? "bg-blue-500 text-white"
                      : "bg-red-500 text-white"
                  }`}>
                    {media.type === "image" ? (
                      <FaImage className="text-xs" />
                    ) : (
                      <FaVideo className="text-xs" />
                    )}
                    <span className="capitalize">{media.type}</span>
                  </span>
                </div>
              </div>

              {/* Media Info */}
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 text-lg">{media.title}</h3>
                
                {/* Price - Only for products */}
                {media.type === "image" && media.price && (
                  <div className="mb-3 pb-3 border-b border-gray-300">
                    <p className="text-xl font-bold text-green-600">{formatPrice(media.price)}</p>
                  </div>
                )}
                
                {/* Size Info - Only for products */}
                {media.type === "image" && (
                  <div className="mb-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 font-semibold">Dimensions:</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">{media.size} ft</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className="font-semibold">Capacity:</span> {media.specs.capacity}
                    </div>
                    <div className="text-xs text-gray-600">
                      <span className="font-semibold">Material:</span> {media.specs.material}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-xs font-bold capitalize border border-amber-200">
                    {media.category}
                  </span>
                  <span className="text-gray-500 text-xs font-semibold">
                    {media.type === "image" ? "Product" : "Video"}
                  </span>
                </div>

                {/* Action Buttons - Only for products */}
                {media.type === "image" && (
                  <div className="flex gap-2 pt-3 border-t border-gray-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsApp(media.title);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 rounded-lg font-bold text-sm transition-all duration-300 shadow-md"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span className="hidden sm:inline">Message</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCall();
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-2 rounded-lg font-bold text-sm transition-all duration-300 shadow-md"
                    >
                      <FaPhone className="text-lg" />
                      <span className="hidden sm:inline">Call</span>
                    </button>
                  </div>
                )}

                {/* View Details Button for Videos */}
                {media.type === "video" && (
                  <button
                    onClick={() => openLightbox(media, filteredMedia.indexOf(media))}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-2 rounded-lg font-bold text-sm transition-all duration-300"
                  >
                    Watch Video
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="text-amber-600 text-3xl" />
            </div>
            <p className="text-gray-600 text-lg mb-4 font-semibold">No products found with current filters.</p>
            <button
              onClick={() => {
                setMediaType("all");
                setActiveCategory("all");
              }}
              className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all font-bold shadow-lg"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-60 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ✕
            </button>

            <button
              onClick={prevMedia}
              className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70"
            >
              <FaArrowLeft />
            </button>

            <div className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">
              {selectedMedia.type === "image" ? (
                <div>
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                    onError={(e) => {
                      e.target.src = "/usman-septic-tank/images/1.jpg";
                    }}
                  />
                  <div className="mt-4 bg-white rounded-lg p-4 max-w-md">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">{selectedMedia.title}</h2>
                    <p className="text-2xl font-bold text-green-600 mb-3">{formatPrice(selectedMedia.price)}</p>
                    <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Size:</span> {selectedMedia.size}</p>
                    <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Capacity:</span> {selectedMedia.specs.capacity}</p>
                    <p className="text-gray-600 text-sm mb-3"><span className="font-semibold">Warranty:</span> {selectedMedia.specs.warranty}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleWhatsApp(selectedMedia.title)}
                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold transition-all"
                      >
                        <FaWhatsapp /> Message
                      </button>
                      <button
                        onClick={handleCall}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-bold transition-all"
                      >
                        <FaPhone /> Call
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                  onError={(e) => {
                    console.error("Video failed to load:", selectedMedia.src);
                  }}
                />
              )}
            </div>

            <button
              onClick={nextMedia}
              className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70"
            >
              <FaArrowRight />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-full font-semibold">
              {currentIndex + 1} / {filteredMedia.length}
            </div>
          </div>
        )}
      </div>

      {/* Footer with Ownership */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-3">About Us</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Premium RCC Septic Tank Solutions across Uttarakhand. Professional installation and quality assurance guaranteed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Services</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ Residential Solutions</li>
                <li>✓ Commercial Projects</li>
                <li>✓ Industrial Systems</li>
                <li>✓ Custom Designs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Contact</h3>
              <p className="text-gray-300 text-sm mb-2">
                <span className="font-semibold">Phone:</span> {CONTACT_NUMBER}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Service Area:</span> All Over Uttarakhand
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">
                © 2024 All Rights Reserved
              </p>
              <p className="text-amber-400 font-bold text-lg">
                Owned & Operated by <span className="text-white">{OWNER_NAME}</span>
              </p>
              <p className="text-gray-400 text-xs mt-3">
                Premium Quality • Professional Service • Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;