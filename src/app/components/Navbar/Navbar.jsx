import Link from "next/link";

const Navbar  = ()=>{

    return (
        <header>
            <nav className="flex justify-center items-center h-12">
                <div className="flex flex-row w-1/3 ">
                    <div href="#Home" className="flex-auto text-center">Home</div>
                    <div href="About" className="flex-auto text-center">About</div>
                    <div href="#Projects" className="flex-auto text-center">Projects</div>
                    <div href="#Books" className="flex-auto text-center">Books</div>
                </div>
            </nav>
            <hr/>
        </header>
    )
}

export default Navbar;