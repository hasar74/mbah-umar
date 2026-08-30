import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Silsilah from "./components/Silsilah";
import Murid from "./components/Murid";
import History from "./components/History";
import Hikmah from "./components/Hikmah";
import SulukPanji from "./components/SulukPanji";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Silsilah />
        <Murid />
        <History />
        <Hikmah />
        <SulukPanji />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
