import React, { useState } from 'react';

const App = () => {
  const [paragraphs, setParagraphs] = useState(0);
  const [generatedText, setGeneratedText] = useState([]);
  const [copyMessage, setCopyMessage] = useState("");

  const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    "Morbi pellentesque, mauris interdum posuere tristique, nisi urna vulputate mi, eget hendrerit elit velit id orci.",
    "Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est.",
    "Mauris placerat eleifend leo."
  ];

  const handleGenerate = () => {
    if (paragraphs > 9) {
      alert("Please enter a number between 1 and 9.");
      return;
    }
    if (paragraphs < 1) {
      alert("Number of paragraphs should be positive.");
      return;
    }

    const numOfParagraphs = Math.min(paragraphs, loremIpsumText.length);
    setGeneratedText(loremIpsumText.slice(0, numOfParagraphs));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Paragraph copied!");
    setTimeout(() => setCopyMessage(""), 1500);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-rose-100 px-4">
      <h1 className="text-3xl font-bold text-orange-700 mb-6 text-center">
        TIRED OF BORING LOREM IPSUM?
      </h1>

      <div className="flex items-center mb-6">
        <label htmlFor="paragraphs" className="mr-2 text-lg">
          Paragraphs:
        </label>
        <input
          id="paragraphs"
          type="number"
          className="border rounded-lg px-2 py-1 w-16 text-center"
          value={paragraphs}
          onChange={(e) => setParagraphs(e.target.value)}
        />
        <button
          className="ml-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          onClick={handleGenerate}
        >
          GENERATE
        </button>
      </div>

      <div className="max-w-2xl">
        {generatedText.map((text, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <p className="text-lg text-gray-700">
              <strong>{index + 1}.</strong> {text}
            </p>
            <button
              className="ml-4 bg-blue-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => handleCopy(text)}
            >
              Copy
            </button>
          </div>
        ))}
        {copyMessage && (
          <div className="text-green-600 font-semibold">
            {copyMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
