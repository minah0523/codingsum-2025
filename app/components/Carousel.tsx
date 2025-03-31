import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <strong>오히려 디자인을 망칠 수 있으며</strong>, <br />
        수정 요청 시 추가 비용이 발생할 수 있습니다.
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
export default function Carousel() {
  return (
    <section className="relative text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[400px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center text-center px-6"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundColor: "rgba(0,0,0,0.6)",
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-6">{slide.title}</h2>
                <p className="text-lg leading-relaxed text-white/90">
                  {slide.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
