import logo from './logo.svg';
import './App.css';
import StockPrice from './StockPrice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Stock Data</h1>
        <StockPrice symbol = "AAPL" date = "2023-01-09"></StockPrice>
      </header>
    </div>
  );
}

export default App;
