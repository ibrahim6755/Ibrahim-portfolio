import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

function Hero() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hey I am Ibrahim Ghani
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 text-justify text-yellow-500 ">A proficient Full Stack Developer with a proven track record of excellence.I have honed my skills and expertise in developing dynamic, scalable web applications</p>
                    <div className="flex justify-center">
                        <Button varient="outline" className="inline-flex text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-black rounded text-lg"><Link target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwMrCLpKBsfQTjMkBLzkRxrHkThBZPLHJkKSVphMBdTbFHwHJKQgfDgPzcJwtpPzFkTCFb" className="text-yellow-500 my-10">Contact</Link></Button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 ">
                    <Image width={1000} height={740} className=" bg-transparent object-cover object-center rounded" alt="hero" src="/images/hero.png" />
                </div>
                <div className="links ">
                    <ul className='border-l-2 border-white px-4 flex items-center justify-center md:block lg:block'>
                        <li className='my-4 m-2 animate-bounce w-6 h-8'>
                            <Link className='text-yellow-500 ' href="#"><Facebook /></Link>
                        </li>
                        <li className='my-4 m-2 animate-bounce w-6 h-8'>
                            <Link className='text-yellow-500' href="#"><Instagram /></Link>
                        </li>
                        <li className='my-4 m-2 animate-bounce w-6 h-8'>
                            <Link className='text-yellow-500' href="#"><Twitter /></Link>
                        </li>
                        <li className='my-4 m-2 animate-bounce w-6 h-8'>
                            <Link className='text-yellow-500' href="#"> <Linkedin /> </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero