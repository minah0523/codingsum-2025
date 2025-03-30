export default function Build() {
  return (
    <>
      {/* Page Title Section */}
      <section className="relative bg-cover bg-center text-white py-28 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xl uppercase tracking-widest mb-4">
            Website Creation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            홈페이지 제작
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            코딩섬은 브랜드와 사용자의 연결고리가 되는 웹사이트를 제작합니다.
            <br />
            단순히 예쁜 디자인을 넘어서, 실용성과 유지 편의성을 갖춘{" "}
            <strong>맞춤형 홈페이지</strong>를 구현합니다.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            코딩섬 제작 분야
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <img
                src="/img/creation_icon_01.png"
                alt="솔루션제작"
                className="h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">솔루션 제작</h3>
              <p className="text-sm text-gray-600 mb-4">
                맞춤 기능과 관리자 시스템 구축
                <br />
                다양한 웹 서비스 구현 가능
              </p>
              <p className="font-bold text-blue-700">별도 문의</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <img
                src="/img/creation_icon_02.png"
                alt="쇼핑몰제작"
                className="h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">쇼핑몰 제작</h3>
              <p className="text-sm text-gray-600 mb-4">
                판매와 브랜딩을 동시에!
                <br />
                구매 전환에 최적화된 UI 설계
              </p>
              <p className="font-bold text-blue-700">500,000원 ~</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <img
                src="/img/creation_icon_03.png"
                alt="모바일웹/앱"
                className="h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">모바일웹 / 앱 제작</h3>
              <p className="text-sm text-gray-600 mb-4">
                반응형 디자인 + 앱 퍼블리싱
                <br />
                iOS/Android 대응 가능
              </p>
              <p className="font-bold text-blue-700">1,000,000원 ~</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <img
                src="/img/creation_icon_04.png"
                alt="광고형 랜딩페이지"
                className="h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">광고형 랜딩페이지</h3>
              <p className="text-sm text-gray-600 mb-4">
                고효율 전환 랜딩페이지
                <br />
                광고 트래픽 유입 최적화 설계
              </p>
              <p className="font-bold text-blue-700">300,000원 ~</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <img
                src="/img/creation_icon_05.png"
                alt="맞춤 개발형 제작"
                className="h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">맞춤 개발형 제작</h3>
              <p className="text-sm text-gray-600 mb-4">
                기능 중심의 프로젝트 개발
                <br />
                외부 시스템 연동 및 API 구현
              </p>
              <p className="font-bold text-blue-700">500,000원 ~</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">개발 방향</h2>
          <p className="text-gray-700 text-center leading-relaxed mb-6">
            코딩섬은 <strong>IT 트렌드와 경쟁사 분석</strong>을 기반으로 <br />
            명확한 기획과 실행 전략으로 고객사의 문제를 해결합니다.
          </p>
          <p className="text-gray-600 text-center">
            단순한 제작이 아닌 <strong>실제 사용자 유입</strong>과{" "}
            <strong>매출 증대</strong>를 위한 웹사이트를 지향합니다.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            제대로 된 웹사이트, 제대로 된 파트너가 필요하다면?
          </h2>
          <p className="mb-6 text-gray-200">
            코딩섬은 단순한 웹 제작을 넘어, 함께 성장하는 브랜드를 지향합니다.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            무료 상담 받기
          </a>
        </div>
      </section>
    </>
  );
}
