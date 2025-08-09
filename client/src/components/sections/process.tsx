export default function Process() {
  const steps = [
    {
      number: 1,
      title: "사전 진단",
      description: "경쟁 병원 분석, 채널 점검, 목표 파악",
      color: "bg-medical-blue"
    },
    {
      number: 2,
      title: "맞춤 전략 수립",
      description: "진료별 키워드·콘텐츠·광고 계획",
      color: "bg-soft-teal"
    },
    {
      number: 3,
      title: "채널 세팅",
      description: "플레이스·블로그·광고 계정 최적화",
      color: "bg-warm-orange"
    },
    {
      number: 4,
      title: "운영 및 피드백",
      description: "실시간 모니터링 + 월간 리포트 제공",
      color: "bg-medical-blue"
    },
    {
      number: 5,
      title: "성과 분석",
      description: "주요 키워드·전환율 기반 리마케팅 제안",
      color: "bg-soft-teal"
    }
  ];

  return (
    <section id="process" className="py-20 bg-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            포쇼마케팅의 일하는 방식
          </h2>
          <p className="text-lg text-gray-600">체계적인 5단계 프로세스로 확실한 성과를 만듭니다</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 fade-in">
          {steps.map((step, index) => (
            <div key={index} className="text-center process-step">
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10`}>
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
