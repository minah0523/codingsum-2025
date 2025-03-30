export default function Contact() {
  return (
    <>
      <section className="relative bg-cover bg-center text-white py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            상담 및 문의
          </h1>
          <p className="mt-4 text-lg">
            궁금한 점이 있으신가요? 언제든지 편하게 문의주세요.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">문의하기</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">이름</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">문의 내용</label>
              <textarea
                className="w-full border border-gray-300 rounded px-4 py-2"
                rows={6}
                placeholder="문의하실 내용을 입력하세요"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700"
              >
                문의 보내기
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-4">코딩섬 고객센터</h2>
          <p className="text-gray-700 mb-2">전화: 070-4571-5231</p>
          <p className="text-gray-700 mb-2">
            이메일: codingsum.official@gmail.com
          </p>
          <p className="text-gray-700">
            운영 시간: 평일 오전 10시 ~ 오후 7시 (주말/공휴일 휴무)
          </p>
        </div>
      </section>
    </>
  );
}
