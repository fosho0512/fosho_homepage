import { Hospital, TrendingUp, Database } from "lucide-react";

export default function WhyFosho() {
  return (
    <section id="why" className="py-20 bg-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            왜 포쇼마케팅인가?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            병원 마케팅은 일반 업종과는 전혀 다른 전략이 필요합니다.<br />
            포쇼마케팅은 진료별 타겟 분석 → 채널별 최적화 → 전환 설계까지,<br />
            병원의 성장을 위한 모든 과정을 전문적으로 수행합니다.
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 fade-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-medical-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">구분</th>
                  <th className="px-6 py-4 text-left font-semibold">기존 대행사</th>
                  <th className="px-6 py-4 text-left font-semibold bg-soft-teal">포쇼마케팅</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">전문성</td>
                  <td className="px-6 py-4 text-gray-600">범용 콘텐츠 제작</td>
                  <td className="px-6 py-4 bg-teal-50 font-semibold text-soft-teal">진료별 맞춤 콘텐츠</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">광고 전략</td>
                  <td className="px-6 py-4 text-gray-600">브랜드 노출 위주</td>
                  <td className="px-6 py-4 bg-teal-50 font-semibold text-soft-teal">예약·방문 전환 중심</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">소통</td>
                  <td className="px-6 py-4 text-gray-600">느린 피드백</td>
                  <td className="px-6 py-4 bg-teal-50 font-semibold text-soft-teal">실시간 빠른 피드백</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Key Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 fade-in">
          <div className="text-center">
            <div className="w-20 h-20 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Hospital className="text-white h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">"병원 100% 전문"</h3>
            <p className="text-gray-600">의료 특화 경험과 노하우</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-soft-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-white h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">"실행·성과 중심"</h3>
            <p className="text-gray-600">측정 가능한 결과 도출</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="text-white h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">"데이터 기반 마케팅"</h3>
            <p className="text-gray-600">분석을 통한 최적화</p>
          </div>
        </div>
      </div>
    </section>
  );
}
