import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight, FaPlay, FaImage, FaVideo } from "react-icons/fa";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaType, setMediaType] = useState("all");
  const [visibleElements, setVisibleElements] = useState({});

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

  const imageFiles = Array.from({ length: 26 }, (_, i) => ({
    id: `img-${i + 1}`,
    src: `/usman-septic-tank/images/${i + 1}.jpg`,
    title: `RCC Septic Tank Project ${i + 1}`,
    category: getCategory(i),
    type: "image",
  }));

  const videoFiles = Array.from({ length: 13 }, (_, i) => ({
    id: `vid-${i + 1}`,
    src: `/usman-septic-tank/videos/video${i + 1}.mp4`,
    thumbnail: `/usman-septic-tank/images/${i + 1}.jpg`,
    title: `Installation Video ${i + 1}`,
    category: getCategory(i + 26),
    type: "video",
  }));

  const allMedia = [...imageFiles, ...videoFiles];

  function getCategory(index) {
    const categories = ["residential", "commercial", "industrial", "custom"];
    return categories[index % categories.length];
  }

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "custom", name: "Custom Projects" },
  ];

  const mediaTypes = [
    { id: "all", name: "All Media", icon: <FaSearch /> },
    { id: "image", name: "Photos", icon: <FaImage /> },
    { id: "video", name: "Videos", icon: <FaVideo /> },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMedia = allMedia.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const typeMatch = mediaType === "all" || item.type === mediaType;
    return categoryMatch && typeMatch;
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

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div 
          id="gallery-header"
          data-animate="true"
          className={`text-center mb-12 transition-all duration-700 ${
            isElementVisible('gallery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Project Gallery
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
            Explore our completed RCC septic tank projects through photos and installation videos
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full border border-green-200">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="font-semibold text-sm">All Over Uttarakhand Services</span>
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
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                mediaType === type.id
                  ? "bg-amber-600 text-white shadow-lg"
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
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-amber-700 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:border-amber-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl px-6 py-3 shadow-md border border-amber-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{imageFiles.length}</div>
              <div className="text-gray-600 text-sm">Photos</div>
            </div>
            <div className="w-px h-8 bg-amber-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{videoFiles.length}</div>
              <div className="text-gray-600 text-sm">Videos</div>
            </div>
            <div className="w-px h-8 bg-amber-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{filteredMedia.length}</div>
              <div className="text-gray-600 text-sm">Showing</div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((media, index) => (
            <div
              key={media.id}
              id={`gallery-item-${media.id}`}
              data-animate="true"
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group ${
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/usman-septic-tank/images/1.jpg";
                    }}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={media.thumbnail || "/usman-septic-tank/images/1.jpg"}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = "/usman-septic-tank/images/1.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Media Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    media.type === "image"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {media.type === "image" ? (
                      <FaImage className="text-xs" />
                    ) : (
                      <FaVideo className="text-xs" />
                    )}
                    <span className="capitalize">{media.type}</span>
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  {media.type === "image" ? (
                    <FaSearch className="text-white text-2xl" />
                  ) : (
                    <FaPlay className="text-white text-2xl ml-1" />
                  )}
                </div>
              </div>

              {/* Media Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{media.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm capitalize">
                    {media.category}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {media.type === "image" ? "Photo" : "Video"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="text-amber-600 text-2xl" />
            </div>
            <p className="text-gray-600 text-lg mb-2">No media found with current filters.</p>
            <button
              onClick={() => {
                setMediaType("all");
                setActiveCategory("all");
              }}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>

            <button
              onClick={prevMedia}
              className="absolute left-4 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              <FaArrowLeft />
            </button>

            <div className="max-w-4xl max-h-[90vh] flex items-center justify-center">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = "/usman-septic-tank/images/1.jpg";
                  }}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  className="max-w-full max-h-[85vh] rounded-lg"
                  onError={(e) => {
                    console.error("Video failed to load:", selectedMedia.src);
                  }}
                />
              )}
            </div>

            <button
              onClick={nextMedia}
              className="absolute right-4 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              <FaArrowRight />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full">
              {currentIndex + 1} / {filteredMedia.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;