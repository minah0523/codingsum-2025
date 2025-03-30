export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl uppercase tracking-widest mb-4">Who we are</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            코딩섬은 어떤 팀인가요?
          </h1>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            끊임없는 변화 속, 변하지 않는 가치를 지키는 개발사
          </h2>
          <p className="text-gray-700 leading-relaxed">
            코딩섬은 웹사이트 기획부터 디자인, 프론트엔드, 백엔드까지
            <br />
            직접 개발하고 책임지는 <strong>풀스택 웹 개발 전문팀</strong>입니다.
            <br />
            <br />
            우리는 고객의 입장에서 문제를 고민하고,
            <br />
            장기적으로 유지 가능한 구조와 디자인을 지향합니다.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            주요 서비스 영역
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">웹사이트 제작</h3>
              <p className="text-gray-600">
                기업, 병원, 브랜드, 랜딩페이지 등 다양한 목적에 맞춘 맞춤형 웹
                개발
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">시스템 개발</h3>
              <p className="text-gray-600">
                예약, 회원관리, 게시판 등 실질적인 기능이 필요한 웹 시스템 개발
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">UI/UX 디자인</h3>
              <p className="text-gray-600">
                사용자 친화적인 설계와 반응형 디자인으로 브랜드 신뢰도 상승
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">코딩섬의 철학</h2>
          <p className="text-lg leading-relaxed">
            우리는 '빠른 개발'보다 '제대로 된 개발'을 지향합니다.
            <br />
            모든 프로젝트는 고객의 니즈와 브랜드 본질을 정확히 이해한 후,
            <br />
            명확한 전략과 함께 시작됩니다.
            <br />
            <br />
            개발자의 이름을 걸고 만드는
            <br />
            <strong>신뢰 기반의 웹 개발</strong>을 실천합니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-4">
            우리와 함께하고 싶으신가요?
          </h2>
          <p className="mb-6 text-gray-700">
            상담은 무료이며, 부담 없이 연락주세요. <br />
            기획부터 제작, 유지보수까지 함께 고민하겠습니다.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700"
          >
            상담 문의하기
          </a>
        </div>
      </section>
    </>
  );
}
