import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Trigger animations on page load and intersection
const observeAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in, .slide-in-up').forEach((el) => {
    observer.observe(el);
  });
};

// Initialize animations after React renders
setTimeout(observeAnimations, 100);

createRoot(document.getElementById("root")!).render(<App />);
