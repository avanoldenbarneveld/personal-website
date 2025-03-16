import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-4 justify-center">
        <Link href="/" passHref>
          <a className="hover:text-blue-400 transition-colors">Home</a>
        </Link>
        <Link href="/about" passHref>
          <a className="hover:text-blue-400 transition-colors">About</a>
        </Link>
        <Link href="/blog" passHref>
          <a className="hover:text-blue-400 transition-colors">Blog</a>
        </Link>
        <Link href="/contact" passHref>
          <a className="hover:text-blue-400 transition-colors">Contact</a>
        </Link>
      </nav>
    </header>
  );
}
