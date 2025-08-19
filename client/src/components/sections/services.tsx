import { Edit, MapPin, Trophy, Lightbulb, Megaphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Edit,
      title: "블로그 관리",
      features: [
        "진료별 키워드 분석 기반 콘텐츠 작성",
        "월 20건 이상 운영 + 정보성·브랜딩 병행"
      ],
      color: "bg-medical-blue"
    },
    {
      icon: MapPin,
      title: "플레이스 최적화",
      features: [
        "설명·사진·진료 항목 업데이트",
        "검색 최적화 키워드 삽입"
      ],
      color: "bg-soft-teal"
    },
    {
      icon: Trophy,
      title: "플레이스 상위노출 관리",
      features: [
        "핵심 키워드 상위 노출 전략",
        "실시간 알고리즘 대응"
      ],
      color: "bg-warm-orange"
    },
    {
      icon: Lightbulb,
      title: "브랜드 마케팅 컨설팅",
      features: [
        "병원 슬로건, 핵심 메시지 기획",
        "모델·영상·블로그 연계 브랜딩 설계"
      ],
      color: "bg-medical-blue"
    },
    {
      icon: Megaphone,
      title: "광고 운영",
      features: [
        "브랜드 검색광고, 파워링크, 플레이스 광고",
        "인스타그램·페이스북 타겟 광고"
      ],
      color: "bg-soft-teal"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            포쇼마케팅 서비스
          </h2>
          <div className="w-20 h-1 bg-soft-teal mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover card-3d fade-in">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
