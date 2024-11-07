import { useState } from 'react';
import WeatherWidget from './components/weather/weatherwidget.jsx';

function App() {
  const [inputValue, setInputValue] = useState('Tozeur');
  const [location, setLocation] = useState('Tozeur');

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Corrected this line
    setLocation(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Fixed the syntax here
        />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Fixed the syntax here
        />
        <button type="submit">Submit</button> {/* Added a submit button */}
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <WeatherWidget location={location} /> {/* Pass location to WeatherWidget if needed */}
    </div>
  );
}

export default App;
