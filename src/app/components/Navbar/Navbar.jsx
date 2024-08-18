import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-center items-center h-12">
        <div className="flex flex-row w-1/3 ">
          <Link href="/" className="flex-auto text-center">
            <div>
              Home
            </div>
          </Link>
          <Link href="About" className="flex-auto text-center">
            <div>
              About
            </div>
          </Link>
          <Link href="/experience " className="flex-auto text-center">
            <div >
              Experience
            </div>
          </Link>
          <Link href="/skill " className="flex-auto text-center">
            <div >
              Skill
            </div>
          </Link>
          <Link href="/thoughts " className="flex-auto text-center">
            <div >
              Thoughts
            </div>
          </Link>
          <Link href="/bookshelf" className="flex-auto text-center">
            <div>
              Bookshelf
            </div>
          </Link>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
