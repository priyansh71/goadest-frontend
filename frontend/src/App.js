import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/home/Navbar';
import Search from './components/home/Search';
import Bootstrap from "./components/Bootstrap";
import Jumbotron from './components/Jumbotron';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Search />
            <Bootstrap />
            <Jumbotron/>
            <Footer />
        </div>
  );
}

export default App;