import { useState } from "react";

const Header = () => {
  return (
  <div className="header grid">
    <h1 className="title">Gifty</h1>
  </div>
  );
};

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const {value} = e.target;
    setSearchTerm(value);

    if (searchTerm.length > 2) {
      setSearchTerm(value)
      console.log(searchTerm)
    }
  };

  const handleKeypress = (e) => {
    const {value} = e.target;
    if (e.key === "Enter" && value.length > 2) {
      console.log("enster search");
    }
  };

  return (
    <div className="page">
      <Header />
      <div className="search grid">
        { /* Stack of images */}
        <input 
          className="grid-item input" 
          placeholder="Type something"
          value={searchTerm}
          onChange={handleInputChange} 
          onKeyPress={handleKeypress}
        />
      </div>
    </div>
  );
}

export default App;
