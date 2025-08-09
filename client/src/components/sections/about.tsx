import { Stethoscope, Rocket, Handshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            병원 마케팅, 제대로 하는 곳
          </h2>
          <div className="w-20 h-1 bg-soft-teal mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Healthcare professionals in collaborative meeting discussing medical marketing strategies" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6 fade-in">
            <p className="text-lg leading-relaxed">
              포쇼마케팅은 병·의원에 100% 특화된 전문 마케팅 대행사입니다.
              다양한 의료기관과의 협업 경험과 인하우스 운영 노하우를 바탕으로,
              병원의 진료 특성과 시장 상황에 맞춘 맞춤형 마케팅 전략을 제공합니다.
            </p>
            <p className="text-lg leading-relaxed">
              우리는 단순한 광고 집행이 아닌 성과 중심의 전략 설계와 실행으로
              병원과 함께 지속 가능한 성장을 만들어갑니다.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-cool-gray rounded-xl">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="text-white h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">병원 전문성</h3>
                <p className="text-sm text-gray-600">의료 시장과 진료 특성에 최적화된 전략</p>
              </div>
              
              <div className="text-center p-6 bg-cool-gray rounded-xl">
                <div className="w-16 h-16 bg-soft-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-white h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">실행 중심</h3>
                <p className="text-sm text-gray-600">직접 운영·관리로 성과 보장</p>
              </div>
              
              <div className="text-center p-6 bg-cool-gray rounded-xl">
                <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-white h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">신뢰와 투명성</h3>
                <p className="text-sm text-gray-600">과장 없는 결과 중심 보고</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
