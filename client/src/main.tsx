import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize enhanced animations and effects
const initializeEffects = () => {
  // Trigger all animations immediately for better UX
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-up');
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('animate');
    }, index * 50);
  });

  // Add intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach((el) => observer.observe(el));
};

// Initialize after DOM is ready
setTimeout(initializeEffects, 100);

createRoot(document.getElementById("root")!).render(<App />);
