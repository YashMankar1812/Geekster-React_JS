import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageSearchApp = () => {
  const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw"; // Unsplash API access key
  const [query, setQuery] = useState(''); // Search query state
  const [images, setImages] = useState([]); // State to store images
  const [page, setPage] = useState(1); // Pagination state
  const [loading, setLoading] = useState(false); // Loading state
  const [showMore, setShowMore] = useState(false); // Show More button state
  const [showScrollTop, setShowScrollTop] = useState(false); // Scroll to top button

  // Function to fetch images from Unsplash using Axios
  const fetchImages = async (searchQuery, pageNum) => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: searchQuery,
          page: pageNum,
          client_id: accessKey,
        },
      });
      setLoading(false); // End loading
      return response.data;
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Failed to fetch images. Please try again.');
      setLoading(false);
    }
  };

  // Handle search form submission
  const handleSearch = async (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
    }

    setPage(1);
    setImages([]);
    setShowMore(false);

    const data = await fetchImages(query, 1);
    if (data) {
      setImages(data.results);
      setPage(2); // Move to next page for further results
      setShowMore(data.results.length === 10); // Show "Load More" if 10 results are fetched
    }
  };

  // Handle loading more images (pagination)
  const handleLoadMore = async () => {
    const data = await fetchImages(query, page);
    if (data) {
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage(page + 1);
      setShowMore(data.results.length === 10);
    }
  };

  // Scroll-to-top function
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle showing/hiding Scroll-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to render each image result with hover effect, gradient, and zoom
  const renderImageElements = () => {
    return images.map((result) => (
      <div key={result.id} className="relative bg-transparent rounded-lg overflow-hidden group">
        {/* Image with hover gradient and zoom effect */}
        <div className="overflow-hidden">
          <img
            src={result.urls.small}
            alt={result.alt_description}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
        </div>

        {/* Image description and link */}
        <div className="p-4 relative z-10">
          <a
            href={result.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white group-hover:text-yellow-300 underline hover:text-blue-700 transition-colors duration-200"
          >
            {result.alt_description || "View Image"}
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-black p-6 ">
      {/* Title with letter spacing */}
      <h1 className="text-white text-4xl tracking-wide text-center animate__animated  animate__fadeInDown">Image Generation App</h1>

      <div className="max-w-2xl mx-auto bg-transparent rounded-lg p-6">
        {/* Search form */}
        <form onSubmit={handleSearch} className="flex items-center space-x-4 mb-6 relative  animate__animated animate__fadeInDownBig animate__delay-1s">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for images..."
            className="flex-grow p-2 border rounded-full shadow-sm focus:outline-none focus:border-blue-500"
            style={{ border: '10%' }} // Rounded input border
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-md hover:from-green-500 hover:to-green-700 transition-transform transform hover:scale-105"
          >
            Search
          </button>
        </form>

        {/* Skeleton Loader */}
        {loading && <div className="text-center text-white">Loading...</div>}

        {/* Image results grid with responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.length > 0 ? renderImageElements() : !loading && <p className="text-gray-300 text-center animate__animated animate__fadeInDownBig animate__delay-1s">No results found.</p>}
        </div>

        {/* Show More button */}
        {showMore && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-md hover:from-green-500 hover:to-green-700 transition-transform transform hover:scale-105"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700 transition-transform transform hover:scale-105"
        >
          ⬆️ Top
        </button>
      )}
    </div>
  );
};

export default ImageSearchApp;
