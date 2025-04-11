import Link from "next/link";

import logoimg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header className="page-header">
      <Link href="/" className="logo">
        <img
          src={logoimg.src}
          alt="NextLevel Food Logo Plate with food on it"
        />
        NextLevel Food
      </Link>

      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
