
import './App.css';
import Giphy from './Component/giphy';
// import SearchBar from '../src/Component/search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Giphy/>
        {/* <SearchBar/> */}
      </header>
      <div class="container">
      <div class="results"></div>
      </div>
    </div>
  );
}

export default App;
