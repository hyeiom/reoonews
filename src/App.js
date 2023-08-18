
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { useState, useEffect } from 'react';


function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    if (hamburger && navLinks && links) {
      hamburger.addEventListener('click', () => {
        // Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
          link.classList.toggle("fade");
        });

        // Hamburger Animation
        setNavOpen(!isNavOpen);
      });
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', () => {});
      }
    };
  }, [isNavOpen]); // Dependency array ensures this effect runs when isNavOpen changes

  return (
   <>
   <Navbar />
   <NewsComponent />
   </>
  );
}

export default App;
