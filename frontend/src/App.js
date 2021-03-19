import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/home/Navbar';
import Search from './components/home/Search';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Search />
            <Footer />
        </div>
  );
}

export default App;
