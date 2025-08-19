# 포쇼마케팅 (FOSHO Marketing) 웹사이트

한국 병원 마케팅 전문 에이전시 포쇼마케팅의 공식 웹사이트입니다.

## 🚀 Vercel 배포 가이드

이 프로젝트는 Vercel 배포에 최적화되어 있습니다.

### 배포 단계

1. **Vercel 계정 준비**
   - [Vercel](https://vercel.com)에 가입하거나 로그인

2. **Repository 연결**
   - GitHub, GitLab, 또는 Bitbucket에 코드 업로드
   - Vercel에서 새 프로젝트 생성

3. **Root Directory 설정**
   - Vercel 프로젝트 설정에서 Root Directory를 `client`로 설정

4. **환경 변수 설정**
   - Vercel 대시보드에서 다음 환경 변수 추가:
   ```
   EMAILJS_PUBLIC_KEY=ADrMZJpxjlRV0PkDL
   EMAILJS_SERVICE_ID=your_emailjs_service_id  
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

5. **배포**
   - Vercel이 자동으로 빌드 및 배포 진행

## 🛠 기술 스택

- **Frontend**: React 18 + TypeScript + Vite
- **UI/UX**: Tailwind CSS + shadcn/ui
- **API**: Vercel Serverless Functions
- **폼 처리**: React Hook Form + Zod
- **이메일**: EmailJS

## 📁 프로젝트 구조

```
client/
├── api/                 # Vercel API Routes
│   ├── contact.ts      # 문의 폼 처리
│   └── emailjs-key.ts  # EmailJS 공개키 API
├── src/                # React 소스 코드
│   ├── components/     # UI 컴포넌트
│   ├── pages/          # 페이지 컴포넌트
│   ├── lib/           # 유틸리티 및 설정
│   └── hooks/         # React 훅
├── shared/            # 공통 타입 및 스키마
└── vercel.json        # Vercel 배포 설정
```

## 🔧 로컬 개발

```bash
cd client
npm install
npm run dev
```

## 📧 EmailJS 설정

1. [EmailJS](https://emailjs.com) 계정 생성
2. 이메일 서비스 연결 (Gmail, Outlook 등)
3. 이메일 템플릿 생성
4. 환경 변수에 설정값 추가

## 📱 반응형 디자인

- 모바일 우선 접근 방식
- 태블릿 및 데스크톱 최적화
- 한국어 웹 폰트 지원 (Noto Sans KR)

## 🎨 디자인 시스템

- 의료 업계에 적합한 신뢰할 수 있는 색상 팔레트
- 접근성을 고려한 UI 컴포넌트
- 부드러운 애니메이션 및 전환 효과

## 📞 문의 기능

- 실시간 폼 유효성 검사
- EmailJS를 통한 이메일 전송
- 성공/오류 상태 표시
- 메모리 기반 문의 내역 저장

## 🔒 보안

- Zod를 통한 서버 사이드 검증
- CORS 설정
- 환경 변수를 통한 민감 정보 보호