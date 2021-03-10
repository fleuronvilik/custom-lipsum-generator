import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphs(data.slice(0, count));
  };

  const handleChange = (e) => {
    setCount(parseInt(e.target.value));
  };
  
  return (
    <div className="section-center">
      <header>
        <h3>Tired of boring Lorem Ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="p">Paragraphs: </label>
          <input
            type="number"
            name="p"
            min="0"
            id="p"
            value={count}
            onChange={handleChange} />
          <button className="btn" type="submit">Generate</button>
        </form>
      </header>
      {paragraphs.map((p, index) => <p key={index}>{p}</p>)}
    </div>
  )
}

export default App;
