import About from '../components/About';
import Services from './Services.js';
import Contact from '../components/Contact';

function Main() {
  return (
    <>
      <main>
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
export default Main;

/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function Main() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Main;*/
