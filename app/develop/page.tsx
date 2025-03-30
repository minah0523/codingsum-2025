export default function Develop() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-28 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xl uppercase tracking-widest mb-4">
            Web Development Support
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            믿고 맡기는 개발 외주,
            <br />
            성공으로 이끄는 기술 파트너십
          </h1>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">외주 개발, 왜 중요한가요?</h2>
          <p className="text-gray-700 leading-relaxed">
            빠르게 변화하는 시장에서 안정적인 개발 인프라는 필수입니다.
            <br />
            코딩섬은 기획부터 유지보수까지 외주개발의 모든 과정을 책임지고
            <br />
            고객사의 기술력을 한층 강화시켜드립니다.
          </p>
        </div>
      </section>

      {/* 서비스 항목 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            외주 개발 서비스
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">프론트엔드 개발</h3>
              <p className="text-gray-600 mb-4">
                React, Vue 기반의 반응형 UI 개발
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                <li>SPA 및 SSR 개발</li>
                <li>디자인 시스템 적용</li>
                <li>접근성 및 반응형 설계</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">백엔드/DB 개발</h3>
              <p className="text-gray-600 mb-4">
                Node.js, Firebase, Supabase 등 다양한 스택 지원
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                <li>REST API, GraphQL</li>
                <li>인증 및 보안 처리</li>
                <li>클라우드 기반 DB 설계</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">
                기술 컨설팅 및 유지보수
              </h3>
              <p className="text-gray-600 mb-4">
                프로젝트 초기 설계부터 런칭 이후까지 관리
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                <li>리팩토링 및 성능 개선</li>
                <li>배포 및 운영 자동화</li>
                <li>기존 시스템 연동</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            탄탄한 기술 기반, 믿을 수 있는 외주 개발 파트너
            <br />
            코딩섬과 함께하세요.
          </h2>
          <p className="mb-6 text-gray-200">
            프론트엔드부터 백엔드까지, 맞춤형 외주 개발 서비스를 제공합니다.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            외주 개발 문의하기
          </a>
        </div>
      </section>
    </>
  );
}
