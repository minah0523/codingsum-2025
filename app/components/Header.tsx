export default function Header() {
  return (
    <div className="flex flex-row justify-between bg-black *:text-white">
      <div className="p-2 font-bold cursor-pointer">
        <a href="/">CODINGSUM</a>
      </div>
      <div className="p-2">
        <ul className="flex gap-6 list-none *:cursor-pointer">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/build">Build</a>
          </li>
          <li>
            <a href="/develop">Develop</a>
          </li>
          <li>
            <a href="/promote">Promote</a>
          </li>
          <li>
            <a href="/educate">Educate</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
