"use client";
"use client";

import {
  CheckCircleIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  SwatchIcon,
  UserGroupIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "템플릿 웹사이트, 정말 효율적일까요?",
    content: (
      <>
        템플릿은 빠르게 제작되지만, 업종별 컨셉과 흐름을 반영하기 어렵습니다.
        <br />
        단순히 이미지와 텍스트만 바꾸는 웹사이트는{" "}
        <strong>브랜드 가치를 반영하기 힘듭니다.</strong>
        <br />
        직접 수정이 쉬운 빌더형 사이트는{" "}
        <strong>오히려 디자인을 망칠 수 있으며</strong>, 수정 요청 시 추가
        비용이 발생할 수 있습니다.
      </>
    ),
    bg: "/img/brain.jpg",
  },
  {
    title: "저렴한 값에는 이유가 있습니다. 더 이상 속지 마세요.",
    content: (
      <>
        웹빌더 템플릿으로 작업하는 <strong>공장형 업체</strong>의 경우 간단한
        수정이나 기본적인 유지보수에도 <strong>지속적인 유지비</strong>를
        요구합니다.
        <br />
        고객의 니즈를 무시하고 진행하는 템플릿 기반 제작이나 퍼블리싱 미완료
        사례, 과도한 유지비 요구 업체에 주의하세요.
      </>
    ),
    bg: "/img/web2.jpg",
  },
  {
    title: "실력있는 진짜 개발팀과 함께하세요.",
    content: (
      <>
        급하게, 저렴하게 만든 홈페이지는 금방 한계를 드러냅니다.
        <br />
        저희는 <strong>투명한 견적과 여러번의 피드백, 지속적인 관리</strong>로
        신뢰를 쌓아왔습니다.
        <br />
        1년에 한 번, 길게는 5~10년에 한 번 만드는 웹사이트.{" "}
        <strong>제대로 된 파트너 코딩섬과 함께하세요.</strong>
      </>
    ),
    bg: "/img/developer.jpg",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-28"
        style={{ backgroundImage: "url('/img/web1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <p className="text-xl uppercase tracking-widest mb-4">
            Reliable Web Development
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            복잡한 코드의 바다 속,
            <br />
            신뢰와 기술의 중심 코딩섬
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

      {/* Why CODINGSUM Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between">
            <div className="mb-10 lg:mb-0 lg:w-1/2">
              <h2 className="text-xl text-blue-600 uppercase mb-2">
                Efficiency Of Development Studio
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-blue-800">왜 코딩섬</span>일까요?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>코딩섬</strong>은 단순한 템플릿 기반 제작이 아닌, <br />
                맞춤형 UI/UX 설계와 전문 개발팀이 함께합니다.
              </p>
              <div className="w-20 h-1 bg-blue-500 mb-4"></div>
            </div>
            <ul className="flex flex-col space-y-6 lg:w-1/2">
              <li className="flex items-start space-x-4">
                <SwatchIcon className="text-blue-600 w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">맞춤 설계</h4>
                  <p className="text-sm text-gray-600">
                    템플릿을 미리 만들어놓고 단순히 내용만 바꾸지 않습니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <CodeBracketIcon className="text-blue-600 w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">직접 개발</h4>
                  <p className="text-sm text-gray-600">
                    웹빌더가 아닌 직접 코딩으로 제작합니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <UserGroupIcon className="text-blue-600 w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">UI/UX 맞춤 설계</h4>
                  <p className="text-sm text-gray-600">
                    업종 특성에 맞는 맞춤형 사용자 경험 설계를 진행합니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <PaintBrushIcon className="text-blue-600 w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">전문 디자인</h4>
                  <p className="text-sm text-gray-600">
                    전문적인 편집과 시각 구성으로 콘텐츠를 자연스럽게
                    녹여냅니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <CheckCircleIcon className="text-blue-600 w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">100% 환불 보장</h4>
                  <p className="text-sm text-gray-600">
                    작업 완료 후 만족하지 못하셨다면 환불을 보장합니다.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <ShieldCheckIcon className="text-blue-600 w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">보안과 신뢰</h4>
                  <p className="text-sm text-gray-600">
                    모든 작업은 최신 보안 기준과 신뢰를 바탕으로 진행됩니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section
        className="relative bg-cover bg-center text-white transition-all duration-700 overflow-hidden"
        style={{ backgroundImage: `url(${current.bg})`, height: "400px" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold mb-6">{current.title}</h2>
          <p className="text-lg leading-relaxed text-white/90">
            {current.content}
          </p>
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-2 rounded-full"
        >
          <ChevronLeftIcon className="text-white w-6 h-6" />
        </button>
        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-2 rounded-full"
        >
          <ChevronRightIcon className="text-white w-6 h-6" />
        </button>
      </section>

      {/* 패키지 소개 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            홈페이지 제작 패키지
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 각 패키지 카드 */}
            {[
              {
                title: "STANDARD",
                desc: "스크롤 방식의 반응형 원페이지 웹사이트",
                features: [
                  "모바일 반응형 지원",
                  "심플한 구성과 빠른 제작",
                  "효율적인 랜딩 페이지",
                ],
              },
              {
                title: "DELUXE",
                desc: "기업, 병원, 브랜드 등 다중 페이지 웹사이트",
                features: [
                  "회원가입 및 게시판 기능",
                  "기능 확장 가능",
                  "맞춤 관리 패널",
                ],
              },
              {
                title: "PREMIUM",
                desc: "완전 맞춤형 시스템, API 연동 포함",
                features: [
                  "관리자 대시보드 개발",
                  "외부 서비스 API 연동",
                  "고급 퍼포먼스 최적화",
                ],
              },
            ].map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.desc}</p>
                <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="/build"
                  className="text-blue-600 underline font-medium"
                >
                  자세히 보기 →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section
        className="bg-blue-800 text-white py-16 relative bg-cover bg-center"
        style={{ backgroundImage: `url("/img/technology.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
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
