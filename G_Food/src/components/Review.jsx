import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';

const ReviewList = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet.
                </p>
              </blockquote>
              <div className="mt-4 flex items-center gap-4">
                <img alt="Woman" src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=944&q=80" className="h-12 w-12 rounded-full object-cover" />
                <div className="text-sm">
                  <p className="font-medium">Gladis Lennon</p>
                  <p className="mt-1">Head of SEO</p>
                </div>
              </div>
              {/* Link to review detail */}
              <div className="mt-2">
                <Link to={`/reviews/${index}`} className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewDetail = ({ id }) => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold">Review Detail {id}</h2>
      <p className="leading-relaxed text-gray-700 mt-4">
        This is the detailed page for review {id}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

const Review = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Review;
