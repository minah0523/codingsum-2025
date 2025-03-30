import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between bg-black *:text-white">
      <div className="p-2 font-bold cursor-pointer">
        <Link href="/">CODINGSUM</Link>
      </div>
      <div className="p-2">
        <ul className="flex gap-6 list-none *:cursor-pointer">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/build">Build</Link>
          </li>
          <li>
            <Link href="/develop">Develop</Link>
          </li>
          <li>
            <Link href="/promote">Promote</Link>
          </li>
          <li>
            <Link href="/educate">Educate</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
