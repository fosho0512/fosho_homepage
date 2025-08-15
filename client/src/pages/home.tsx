import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhyFosho from "@/components/sections/why-fosho";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Results from "@/components/sections/results";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navigation />
      <Hero />
      <About />
      <WhyFosho />
      <Services />
      <Process />
      <Results />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-medical-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-english font-bold text-2xl mb-4">FOSHO MARKETING</div>
              <p className="text-blue-200 mb-4">병·의원 전문 마케팅 대행사</p>
              <p className="text-sm text-blue-200">
                확실한 결과로, 확실한 성장을.<br />
                FOR SURE, YOUR SUCCESS
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-blue-200">
                사업자등록번호: 223-05-31741<br />
                대표: 김균한, 박현준<br />
                주소: 서울특별시 강남구 선릉로93길 54, 6층 6086호<br />
                이메일: fosho0512@gmail.com
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-sm text-blue-200">
            <p>&copy; 2024 Fosho Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
