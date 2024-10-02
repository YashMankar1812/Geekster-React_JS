import { useReducer, useState } from 'react';
import { GoTrash } from "react-icons/go";
import './index.css';

// Product Data
const productsData = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://www.godigit.com/content/dam/godigit/directportal/en/realme-mobiles.jpg' },
  { id: 2, name: 'Product 2', price: 19.99, image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/world-top-10-mobile-company-name-list-2021-1.png' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'https://www.godigit.com/content/dam/godigit/directportal/en/xiaomi-mobiles.jpg' },
  { id: 4, name: 'Product 4', price: 25.99, image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/world-top-10-mobile-company-name-list-2021-6.png' },
  { id: 5, name: 'Product 5', price: 49.99, image: 'https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2023/11/Lava.jpg' },
  { id: 6, name: 'Product 6', price: 15.99, image: 'https://www.godigit.com/content/dam/godigit/directportal/en/vivo-mobiles.jpg' },
  { id: 7, name: 'Product 7', price: 35.99, image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/top-10-mobile-companies-in-india1.png' },
  { id: 8, name: 'Product 8', price: 20.99, image: 'https://www.godigit.com/content/dam/godigit/directportal/en/oneplus-12-brand.png' },
  { id: 9, name: 'Product 9', price: 18.99, image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/world-top-10-mobile-company-name-list-2021-3.png' },
  { id: 10, name: 'Product 10', price: 22.99, image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/world-top-10-mobile-company-name-list-2021-5.png' },
];

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.find(item => item.id === action.product.id);
      if (existingProduct) {
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total cost calculation
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Carousel navigation
  const nextProduct = () => {
    setCurrentIndex((currentIndex + 1) % productsData.length);
  };

  const prevProduct = () => {
    setCurrentIndex((currentIndex - 1 + productsData.length) % productsData.length);
  };

  return (
    <div className=" mx-auto p-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500
    text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center">E-commerce Cart Management</h1>

      {/* Product Carousel */}
      <div className="flex items-center justify-center mb-8">
        <button onClick={prevProduct} className="bg-gray-800 text-white px-4 py-2 rounded-l-md hover:bg-gray-700">
          Prev
        </button>
        <div className="flex overflow-hidden space-x-4 w-full justify-center">
          {productsData.slice(currentIndex, currentIndex + 3).map((product) => (
            <div key={product.id} className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-64">
              {/* <img
                src={product.image}
                alt={product.name}
                className="w-50 h-40 object-cover rounded-lg shadow-lg"
              /> */}
              {/* <img
  src={product.image}
  alt={product.name}
  className="w-50 h-40 object-cover rounded-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-300"
/> */}
<img
  src={product.image}
  alt={product.name}
  className="w-90 h-90 sm:h-48 md:h-56 object-cover items-center rounded-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-300"
/>




              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', product })}
                  className="mt-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-600 hover:to-pink-600 w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextProduct} className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700">
          Next
        </button>
      </div>

      {/* Shopping Cart */}
      <div className="bg-white
 text-black rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="mb-4 divide-y divide-gray-300">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-3"
                >
                  <span>{item.name} (x{item.quantity})</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: item.id })}
  className="text-red-600 hover:text-red-800 transition-colors duration-300 hover:scale-205 "
>

                    <GoTrash />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total:</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
            <button
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
