// pages/privacy.tsx (혹은 app/privacy/page.tsx for Next.js 13+)
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-sm leading-7 text-gray-700">
      <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>
      <p className="mb-4">
        <strong>코딩섬</strong>은 「개인정보 보호법」 등 관련 법령에 따라
        이용자의 개인정보를 보호하고 있습니다. 본 방침은 문의 폼을 통해 수집되는
        개인정보의 처리에 대한 기준을 안내합니다.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">
        1. 수집하는 개인정보 항목
      </h2>
      <p>
        - 이름, 이메일 주소, 문의 내용 등 사용자가 문의 시 직접 입력한 정보만을
        수집합니다.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">2. 개인정보 수집 목적</h2>
      <p>- 문의 사항에 대한 확인 및 회신 목적</p>

      <h2 className="text-lg font-semibold mt-8 mb-2">3. 보유 및 이용 기간</h2>
      <p>- 수신일로부터 1년간 보관 후 안전하게 파기합니다.</p>

      <h2 className="text-lg font-semibold mt-8 mb-2">
        4. 개인정보 제공 및 위탁
      </h2>
      <p>- 수집된 개인정보는 제3자에게 제공하거나 위탁하지 않습니다.</p>

      <h2 className="text-lg font-semibold mt-8 mb-2">5. 이용자의 권리</h2>
      <p>
        - 이용자는 개인정보 조회, 수정, 삭제를 요청할 수 있으며, 담당자에게
        이메일로 문의해 주시기 바랍니다.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">6. 문의</h2>
      <p>
        - 담당자: codinsum.official@gmail.com
        <br />- 본 방침은 2023년 9월 5일부터 적용됩니다.
      </p>
    </div>
  );
}
