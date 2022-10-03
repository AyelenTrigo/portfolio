import './style/App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Proyectos />
      <SobreMi />
      <Footer />
    </div>
  );
}

export default App;
