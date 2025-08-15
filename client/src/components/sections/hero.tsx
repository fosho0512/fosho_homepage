import { useState, useEffect } from "react";
import image1 from "@assets/1_1755218402779.jpg";
import image2 from "@assets/2_1755218402782.jpg";
import image3 from "@assets/3_1755218402781.jpg";
import image4 from "@assets/4_1755218402780.jpg";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: image1, alt: "Marketing team collaboration meeting" },
    { src: image2, alt: "Digital marketing workspace with Naver platform" },
    { src: image3, alt: "Medical marketing content production" },
    { src: image4, alt: "Healthcare professionals analyzing marketing data" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background image carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt} 
            className={`w-full h-full object-cover opacity-20 absolute transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-20' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center text-white space-y-8 fade-in">
          <h1 className="font-english text-4xl md:text-6xl font-bold mb-4">
            FOR SURE, YOUR SUCCESS
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8">
            확실한 결과로, 확실한 성장을
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            병·의원 전문 마케팅 대행사 포쇼마케팅은,<br />
            의료 마케팅의 경험과 데이터 기반 전략으로 병원의 성장을 이끕니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-warm-orange hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              무료 상담 신청
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-medical-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              포쇼마케팅 소개 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
