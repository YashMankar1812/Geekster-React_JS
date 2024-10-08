import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// Sample detail component
const RestaurantDetail = () => {
  return <div>This is the restaurant detail page.</div>;
};

const Restaurent = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4" id='Restaurent'>
        <div className="mb-4 mt-24 mx-8">
          <input type="text" placeholder="Search restaurants..." className="border rounded p-2" value="" />
        </div>
        <div className="mb-4 mt-24 mx-8">
          <label htmlFor="minRating" className="mr-2">Minimum Rating:</label>
          <input type="number" id="minRating" min="0" max="5" step="1" className="border rounded p-2" value="0" />
        </div>
      </div>

      <div className="flex justify-center gap-1 text-xs font-medium mt-4">
        <ol className="flex justify-center gap-1 text-xs font-medium mt-4">
          <li>
            <Link to="/restaurants?page=1" className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 opacity-50 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/restaurants?page=1" className="block h-8 w-8 rounded border bg-blue-600 text-white text-center leading-8 cursor-pointer">1</Link>
          </li>
          {/* Add other page links here */}
          <li>
            <Link to="/restaurants?page=2" className="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">2</Link>
          </li>
        </ol>
      </div>

      {/* Define routes */}
      <Routes>
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </>
  );
}

export default Restaurent;
