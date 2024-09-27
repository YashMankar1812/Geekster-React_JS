import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact py-12 bg-black dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-white">Contact</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-8">
        {/* Contact Information */}
        <div className="information space-y-4">
          <p className="text-gray-400">
            If you have any questions or want to work together, feel free to contact me!
          </p>
          <a href="tel:+8827140254" className="flex items-center space-x-2 text-gray-400">
          <FontAwesomeIcon icon={faPhone} className="text-2xl text-green-500" />
            <span>: 882 7140 254</span>
          </a>
          <a href="mailto:mankaryash25@gmail.com" className="flex items-center space-x-2 text-gray-400">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-red-500" />
            <span>: mankaryash25@gmail.com</span>
          </a>
          <a href="https://goo.gl/maps/xyz" target="_blank" rel="noreferrer" className="flex items-start space-x-2 text-gray-400">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-purple-500" />
            <span>
              : Trimurti Square, Dhronacharya Layout <br /> Plot no 94, Nagpur, Maharashtra
            </span>
          </a>
        </div>
        {/* Contact Form */}
        <div className="form bg-grey p-3 shadow-lg rounded-lg">
          <form>
            <input
              type="text"
              placeholder="Name*"
              required
              className="w-full mb-4 p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Message*"
              required
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              id="submit"
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
