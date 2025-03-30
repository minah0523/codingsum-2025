export default function Promote() {
  return (
    <>
      <section className="relative bg-cover bg-center text-white py-28 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xl uppercase tracking-widest mb-4">
            Promotion & Marketing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            다양한 채널을 통한
            <br />
            실질적 성과 중심의 마케팅
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            우리는 결과를 만들어냅니다
          </h2>
          <p className="text-gray-700 leading-relaxed">
            단순 노출이 아닌 <strong>전환 중심의 마케팅</strong>으로 매출과
            브랜딩을 동시에.
            <br />
            타겟 맞춤 광고 운영과 효율 분석까지 <strong>마케팅 전 과정</strong>
            을 함께합니다.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            주요 마케팅 서비스
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SNS 채널 운영",
                desc: "페이스북, 인스타그램 등 채널에 맞춘 콘텐츠 운영 및 광고 관리",
                price: "월 300,000원~",
              },
              {
                title: "브랜드 마케팅",
                desc: "검색 시 브랜드 신뢰도를 높이는 컨텐츠 및 채널 관리",
                price: "월 2,000,000원~",
              },
              {
                title: "리뷰/체험단 모집",
                desc: "리뷰 및 사용자 체험단 운영으로 신뢰도 향상",
                price: "건당 50,000원~",
              },
              {
                title: "지식인/카페/언론홍보",
                desc: "전문 작가에 의한 글쓰기 및 지속 관리",
                price: "건별/월별 별도 문의",
              },
              {
                title: "종합 광고 컨설팅",
                desc: "전체적인 광고 전략 수립 및 영업 흐름 코칭",
                price: "월 300,000원~",
              },
              {
                title: "쇼핑몰 운영 대행",
                desc: "상품 등록, 상세페이지 제작, 고객관리 등 통합 운영",
                price: "월 600,000원~",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-blue-700 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            고객의 상황에 맞는 광고 전략,
            <br />
            지금 코딩섬과 함께 시작해보세요.
          </h2>
          <p className="mb-6 text-gray-200">
            실제 광고 성과가 중요하다면, 경험 많은 전문가와 함께하세요.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            광고 상담 받기
          </a>
        </div>
      </section>
    </>
  );
}
