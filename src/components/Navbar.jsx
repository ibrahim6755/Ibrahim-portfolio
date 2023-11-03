import Image from 'next/image'
import Link from 'next/link'


function Navbar() {
    return (
        <header className="  body-font bg-transparent container">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        src="/images/logo1.png"
                        width={60}
                        height={60}
                        alt='Logo'

                    />
                    <span className="ml-3 text-lg uppercase text-yellow-500">Ibrahim Ghani</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="#about" className="mr-5 text-yellow-500 font-semibold uppercase">About</Link>
                    <Link href="#projects" className="mr-5 text-yellow-500 font-semibold uppercase">Projects</Link>
                    <Link href="#contact" className="mr-5 text-yellow-500 font-semibold uppercase">Contact</Link>

                </nav>
            </div>
        </header>
    )
}

export default Navbar