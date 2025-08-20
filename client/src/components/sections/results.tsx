import { Quote } from "lucide-react";

export default function Results() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            성과로 증명합니다
          </h2>
          <p className="text-lg text-gray-600">실제 고객사 데이터 기반 성과 (병원명 익명 처리)</p>
        </div>
        
        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 fade-in">
          <div 
            className="text-center text-white rounded-2xl p-8 card-hover transform transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #2c5aa0, #1e40af)",
              boxShadow: "0 10px 30px rgba(44, 90, 160, 0.3)"
            }}
          >
            <div className="text-4xl font-bold mb-2 font-english">350%</div>
            <div className="text-lg">플레이스 노출량 증가</div>
          </div>
          
          <div 
            className="text-center text-white rounded-2xl p-8 card-hover transform transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #14b8a6, #0891b2)",
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
            }}
          >
            <div className="text-4xl font-bold mb-2 font-english">200%</div>
            <div className="text-lg">신규 예약 전환율 상승</div>
          </div>
          
          <div 
            className="text-center text-white rounded-2xl p-8 card-hover transform transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)"
            }}
          >
            <div className="text-4xl font-bold mb-2 font-english">3배</div>
            <div className="text-lg">블로그 방문자 수 증가</div>
          </div>
        </div>
        
        {/* Before/After Comparison */}
        <div className="bg-cool-gray rounded-2xl p-8 fade-in">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-600">Before (마케팅 시작 전)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>월 노출량</span>
                  <span className="font-semibold">12,000회</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>월 예약수</span>
                  <span className="font-semibold">25건</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>전환율</span>
                  <span className="font-semibold">2.1%</span>
                </div>
              </div>
            </div>
            
            {/* After */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-soft-teal">After (3개월 후)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-soft-teal">
                  <span>월 노출량</span>
                  <span className="font-semibold text-soft-teal">54,000회 ↗️</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-soft-teal">
                  <span>월 예약수</span>
                  <span className="font-semibold text-soft-teal">75건 ↗️</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg border-l-4 border-soft-teal">
                  <span>전환율</span>
                  <span className="font-semibold text-soft-teal">4.5% ↗️</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Story */}
          <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-warm-orange">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0">
                <Quote className="text-white h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">성공 사례</h4>
                <p className="text-gray-600">"강남 A치과, 3개월 만에 예약 전환율 2배 상승"</p>
                <p className="text-sm text-gray-500 mt-2">
                  플레이스 최적화와 블로그 마케팅을 통해 온라인 가시성을 크게 개선하여 실질적인 예약 증가로 이어졌습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
