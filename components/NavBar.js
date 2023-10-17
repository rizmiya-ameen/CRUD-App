import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href="/" className="text-white font-bold">NavBar</Link>
      <Link href="/addBookmark" className="bg-white p-2">+ Bookmark</Link>
    </nav>
  )
}

export default NavBar