import { useState } from 'react';
import './index.css'; 

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

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const nextProduct = () => {
    setCurrentIndex((currentIndex + 1) % productsData.length);
  };

  const prevProduct = () => {
    setCurrentIndex((currentIndex - 1 + productsData.length) % productsData.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">E-commerce Cart Management</h1>
      
      <div className="flex items-center mb-4">
        <button onClick={prevProduct} className="bg-gray-300 p-2 rounded-l">Prev</button>
        <div className="flex overflow-hidden">
          {productsData.slice(currentIndex, currentIndex + 3).map(product => (
            <div key={product.id} className="border p-4 rounded shadow w-1/3">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button onClick={nextProduct} className="bg-gray-300 p-2 rounded-r">Next</button>
      </div>

      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;