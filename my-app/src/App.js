import './App.css';
import Footer from './Footer/Footer';
import News from './MainNews/News';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
