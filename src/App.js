import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import MainContact from './components/MainContact';
import Footer from './components/Footer';
import Home from "./components/Home"
import OurWorks from './components/OurWorks';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Us from './components/Us';
import Work from './components/Work';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import OurServices from './components/OurServices';
import Navbar from './components/Navbar';
import OurServicesPart from './components/OurServicesPart';
import OurServicesThree from './components/OurServicesThree';
import OurServicesFour from './components/OurServicesFour';
import OurServicesFive from './components/OurServicesFive';
import Privacy from './components/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      < HashRouter >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Services />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Work />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Us />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Testimonials />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/mainContact" element={<MainContact />} />
        </Routes>
        <Routes>
          <Route path="/ourWorks" element={<OurWorks />} />
        </Routes>
        <Routes>
          <Route path="/ourServices" element={<OurServices />} />
        </Routes>
        <Routes>
          <Route path="/Services2" element={<OurServicesPart />} />
        </Routes>
        <Routes>
          <Route path="/Services3" element={<OurServicesThree />} />
        </Routes>
        <Routes>
          <Route path="/Services4" element={<OurServicesFour />} />
        </Routes>
        <Routes>
          <Route path="/Services5" element={<OurServicesFive />} />
        </Routes>
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
