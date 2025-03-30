export default function Educate() {
  return (
    <>
      <section className="relative bg-cover bg-center text-white py-28 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xl uppercase tracking-widest mb-4">
            Practical Coding Education
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            실무 중심 코딩 교육,
            <br />
            코딩섬이 함께합니다.
          </h1>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            왜 코딩 교육인가요?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">직접 개발 가능</h3>
              <p className="text-gray-700">
                아이디어를 직접 구현해보며 프로젝트 역량 강화
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">개발자 소통 향상</h3>
              <p className="text-gray-700">
                기획자나 디자이너도 개발 언어에 익숙해질 수 있음
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">업무 자동화</h3>
              <p className="text-gray-700">
                단순 반복작업 자동화로 생산성 향상
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">미래 직무 대비</h3>
              <p className="text-gray-700">
                AI·IT 시대의 핵심 역량인 코딩 습득
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            코딩섬 교육 과정
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">입문자 과정</h3>
              <p className="mb-4 text-gray-700">
                HTML, CSS, JavaScript 기초부터 차근차근
              </p>
              <ul className="text-sm list-disc list-inside text-gray-600">
                <li>코딩 첫걸음</li>
                <li>웹 페이지 직접 만들어보기</li>
                <li>코드 작성 훈련</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">실무자 과정</h3>
              <p className="mb-4 text-gray-700">
                실제 프로젝트 기반의 프론트엔드 실무 강화
              </p>
              <ul className="text-sm list-disc list-inside text-gray-600">
                <li>React/Vue 실전</li>
                <li>Next.js, Vite 환경 이해</li>
                <li>API 연동과 상태관리</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">부트캠프 집중반</h3>
              <p className="mb-4 text-gray-700">
                단기간 집중 학습으로 취업/전환 준비
              </p>
              <ul className="text-sm list-disc list-inside text-gray-600">
                <li>3~6개월 집중 트랙</li>
                <li>포트폴리오 제작 지원</li>
                <li>코딩 테스트 및 실무 인터뷰 대비</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            코딩이 처음이어도 괜찮습니다.
            <br />
            코딩섬이 함께 성장합니다.
          </h2>
          <p className="mb-6 text-blue-100">
            트렌드에 맞는 실무형 교육으로, 지금 바로 시작해보세요.
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
