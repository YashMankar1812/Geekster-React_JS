import React from 'react';

// Array of quotes
const quotes = [
  {
    text: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    author: "Adam Scott",
  },
  {
    text: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    author: "Adelle Davis",
  },
  {
    text: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    author: "Adelle Davis",
  },
  {
    text: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
    author: "Albert Einstein",
  },
  {
    text: "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
    author: "Alice May Brock",
  },
  {
    text: "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind...",
    author: "Anthelme Brillat-Savarin",
  },
  {
    text: "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities...",
    author: "Calvin Trillin",
  },
  {
    text: "Tomatoes and oregano make it Italian; wine and tarragon make it French...",
    author: "Calvin Trillin",
  },
  {
    text: "Tell me what you eat, and I will tell you what you are.",
    author: "Cyra McFadden",
  },
  {
    text: "Health food makes me sick.",
    author: "Eike von Repkow",
  },
  {
    text: "The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers...",
    author: "Epictetus",
  },
  {
    text: "I no longer prepare food or drink with more than one ingredient.",
    author: "Epictetus",
  },
  {
    text: "Eating is really one of your indoor sports. You play three times a day...",
    author: "Fran Lebowitz",
  },
  {
    text: "The people who can most successfully lose weight and maintain a healthy life style are foodies...",
    author: "G. K. Chesterton",
  },
  {
    text: "Bear in mind that you should conduct yourself in life as at a feast.",
    author: "George Bernard Shaw",
  },
  {
    text: "Preach not to others what they should eat, but eat as becomes you, and be silent.",
    author: "George Dennison Prentice",
  },
  {
    text: "If the divine creator has taken pains to give us delicious and exquisite things to eat...",
    author: "J. R. R. Tolkien",
  },
  // Add more quotes as needed...
];

const Quote = () => {
  return (
    <div id="Quote">
      {quotes.map((quote, index) => (
        <div className="m-24" key={index}>
          <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{quote.text}</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{quote.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quote;
