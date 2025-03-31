export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      {/* 하단 정보 */}
      <div className="border-t border-gray-700 text-center px-4 py-4 text-gray-500 text-xs">
        <p>
          사업자등록번호: 155-52-00745 | 대표: 김민아 | 주소: 인천광역시 중구
          찬들로 141
        </p>
        <p className="mt-1">
          <a href="/privacy" className="underline hover:text-white mr-4">
            개인정보처리방침
          </a>
          &copy; {new Date().getFullYear()} CODINGSEOM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
