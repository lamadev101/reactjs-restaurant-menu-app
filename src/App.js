import './App.scss';
import About from './components/About';
import Blog from './components/Blog';
import BookNow from './components/BookNow';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Team from './components/Team';
import TopBtn from './components/TopBtn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slideshow/>
      <About/>
      <Menu/>
      <Team/>
      <BookNow/>
      <Blog/>
      <Footer/>
      <TopBtn/>
    </div>
  );
}

export default App;
