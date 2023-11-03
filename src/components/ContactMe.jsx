"use client"

import React, { useState } from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

function ContactMe() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [allUsers, setAllUsers] = useState([])
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const submitUser = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
            })
            if (response.ok) {
                console.log("User Added")
                setAllUsers([...allUsers, user])
                // Clear the productForm state for the next addition
                setUser({
                    name: "",
                    email: "",
                    message: ""
                })
            } else {
                console.error('Failed to add user');
            }



        } catch (error) {
            console.log("Failed to add user", error)
        }


    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-500">Wanna Contact Me ?</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">


                    <form onSubmit={submitUser}>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-yellow-500">Name</label>
                                    <input
                                        value={user.name}
                                        onChange={handleChange}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-yellow-500">Email</label>
                                    <input
                                        value={user.email}
                                        onChange={handleChange}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-yellow-500">Message</label>
                                    <textarea
                                        value={user.message}
                                        onChange={handleChange}
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type='submit' className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-yellow-500 rounded text-lg">Submit</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <Link target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwMrCLpKBsfQTjMkBLzkRxrHkThBZPLHJkKSVphMBdTbFHwHJKQgfDgPzcJwtpPzFkTCFb" className="text-yellow-500 my-10">ibrahimghani030@email.com</Link>
                                <br />
                                <br />
                                <span className="inline-flex ">
                                    <Link href="#" className="text-gray-500 hover:text-yellow-500 animate-bounce h-10">
                                        <Facebook />
                                    </Link>
                                    <Link href="#" className="ml-4 text-gray-500 hover:text-yellow-500 animate-bounce h-6">
                                        <Instagram />
                                    </Link>
                                    <Link href="#" className="ml-4 text-gray-500 hover:text-yellow-500 animate-bounce h-10">
                                        <Linkedin />
                                    </Link>
                                    <Link href="#" className="ml-4 text-gray-500 hover:text-yellow-500 animate-bounce h-6">
                                        <Twitter />
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMe