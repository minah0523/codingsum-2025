import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-28 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xl uppercase tracking-widest mb-4">
            Reliable Web Development
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            복잡한 코드의 바다 속,
            <br />
            신뢰로 정박한 코딩섬
          </h1>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
            >
              Contact Us <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 경고 메시지 섹션 */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            더 이상 속지 마세요.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            제작비 외에도 도메인과 호스팅 등의 <strong>지속적인 유지비</strong>
            가 발생합니다.
            <br />
            템플릿 기반 제작이나 퍼블리싱 미완료 사례, 과도한 유지비 요구 업체에
            주의하세요.
            <br />
            저희는 <strong>투명한 견적과 관리</strong>로 고객의 신뢰를
            우선합니다.
          </p>
        </div>
      </section>

      {/* 저렴한 템플릿 경고 */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            저렴한 값에는 이유가 있습니다.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            급하게, 저렴하게 만든 홈페이지는 금방 한계를 드러냅니다.
            <br />
            1년에 한 번, 혹은 5~10년에 한 번 만드는 웹사이트.{" "}
            <strong>제대로 된 파트너와 함께하세요.</strong>
          </p>
        </div>
      </section>

      {/* 템플릿의 한계 안내 */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            템플릿 웹사이트, 정말 효율적일까요?
          </h2>
          <p className="text-gray-700 leading-relaxed text-center mb-6">
            템플릿은 빠르게 제작되지만, 업종별 컨셉과 흐름을 반영하기
            어렵습니다.
            <br />
            단순히 이미지와 텍스트만 바꾸는 웹사이트는{" "}
            <strong>브랜드 가치를 반영하기 힘듭니다.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed text-center">
            직접 수정이 쉬운 빌더형 사이트는{" "}
            <strong>오히려 디자인을 망칠 수 있으며</strong>, 수정 요청 시 추가
            비용이 발생할 수 있습니다. <br />
            코딩섬은 고객이 요청하지 않아도 알아서 관리해드립니다.
          </p>
        </div>
      </section>

      {/* Why CODINGSUM */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            왜 코딩섬일까요?
          </h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>템플릿을 미리 만들어놓고 단순히 내용만 바꾸지 않습니다.</li>
            <li>
              웹빌더가 아닌 <strong>직접 코딩으로 제작</strong>합니다.
            </li>
            <li>
              업종 특성에 맞는 <strong>UI/UX 맞춤 설계</strong>를 진행합니다.
            </li>
            <li>
              전문적인 디자인 편집과 시각 구성으로 컨텐츠를 자연스럽게
              녹여냅니다.
            </li>
            <li>
              작업 완료 후 만족하지 못하셨다면 <strong>100% 환불 보장</strong>
              합니다.
            </li>
          </ul>
        </div>
      </section>

      {/* 패키지 소개 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            홈페이지 제작 패키지
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">STANDARD</h3>
              <p className="text-gray-600 mb-4">
                스크롤 방식의 반응형 원페이지 웹사이트
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                <li>모바일 반응형 지원</li>
                <li>심플한 구성과 빠른 제작</li>
                <li>효율적인 랜딩 페이지</li>
              </ul>
              <a href="/build" className="text-blue-600 underline font-medium">
                포트폴리오 보기 →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">DELUXE</h3>
              <p className="text-gray-600 mb-4">
                기업, 병원, 브랜드 사이트 등 다중 페이지 웹사이트
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                <li>회원가입 및 게시판 기능</li>
                <li>기능 확장 가능</li>
                <li>맞춤 관리 패널</li>
              </ul>
              <a href="/build" className="text-blue-600 underline font-medium">
                포트폴리오 보기 →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">PREMIUM</h3>
              <p className="text-gray-600 mb-4">
                완전 맞춤형 시스템, API 연동 포함
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                <li>관리자 대시보드 개발</li>
                <li>외부 서비스 API 연동</li>
                <li>고급 퍼포먼스 최적화</li>
              </ul>
              <a href="/build" className="text-blue-600 underline font-medium">
                포트폴리오 보기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            홈페이지는 단순한 정보가 아닙니다.
            <br />
            코딩섬은 온라인에서 귀사의 가치를 설계합니다.
          </h2>
          <p className="mb-6 text-gray-200">
            한 번의 선택이 5년을 좌우합니다. 믿을 수 있는 개발 파트너와
            함께하세요.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            무료 상담 받기
          </a>
        </div>
      </section>
      {/* 포트폴리오 슬라이드 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">포트폴리오</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "캔들",
                url: "https://devr-kmong.github.io/kandle",
                img: "/img/portfolio_01.jpg",
              },
              {
                title: "단하나마케팅",
                url: "https://단하나마케팅.com",
                img: "/img/portfolio_02.jpg",
              },
              {
                title: "한국건축물성능관리원",
                url: "https://ahvaca.or.kr",
                img: "/img/portfolio_03.jpg",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 font-semibold text-gray-800">
                  {item.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">고객 후기</h2>
          <div className="space-y-8">
            <blockquote className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">
                &quot;기획부터 마무리까지 정말 꼼꼼하게 도와주셨어요. 앞으로도
                계속 맡기고 싶어요.&quot;
              </p>
              <span className="block mt-4 font-semibold text-blue-800">
                – 스타트업 대표 이○○
              </span>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">
                &quot;말도 안 되는 유지비 받던 업체에서 옮기길 정말 잘했습니다.
                결과물도 훌륭해요.&quot;
              </p>
              <span className="block mt-4 font-semibold text-blue-800">
                – 쇼핑몰 운영자 김○○
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">
                Q. 제작 기간은 얼마나 걸리나요?
              </h4>
              <p className="text-gray-700">
                기본적인 원페이지는 약 7~10일, 기능이 있는 사이트는 상담 후
                일정을 안내드립니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">
                Q. 도메인과 호스팅도 제공하나요?
              </h4>
              <p className="text-gray-700">
                네. 원하시면 함께 세팅해드리며, 고객 명의로 등록해드립니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">
                Q. 유지 관리도 해주시나요?
              </h4>
              <p className="text-gray-700">
                기본적인 유지보수는 제작 후 3개월까지 무료 제공되며, 추가 계약도
                가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
