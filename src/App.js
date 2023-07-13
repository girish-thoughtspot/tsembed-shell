import logo from './logo.svg';
import './App.css';
import './lib/init'
import Product from './product';
import Navbar from './nav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
