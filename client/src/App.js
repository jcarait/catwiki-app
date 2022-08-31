import "./App.css";

import LiveSearch from "./components/LiveSearch";

function App() {
  return (
    <div className="App">
      <h1>CatWiki</h1>
      <LiveSearch url="http://localhost:3001/api/breeds" />
    </div>
  );
}

export default App;
