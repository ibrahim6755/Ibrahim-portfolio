import Image from 'next/image'
import React from 'react'

function SkillCard({ data }) {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap justify-center items-center">
                    {data.map(item => {
                        return (
                            <div className="card p-6 bg-gray-200 hover:bg-yellow-500 hover:text-white mx-4 my-4" key={item.id}>
                                <div className="lg:w-80 md:w-1/3">
                                    <a className="h-auto w-auto relative rounded overflow-hidden flex justify-center">
                                        <Image width={220} height={120} alt="ecommerce" className="object-cover object-center block" src={item.Image} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 hover:text-white text-lg tracking-widest title-font mb-1 text-center">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default SkillCard