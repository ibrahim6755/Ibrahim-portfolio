'use client'

import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, User2 } from 'lucide-react'
import Link from 'next/link'


function MobileNav() {
    return (
        <nav className='md:hidden flex justify-between items-center'>
            <div className='flex items-center'>
                <Sheet>
                    <SheetTrigger>
                        <Menu height={30} width={30} className='font-bold' />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>
                                <div className="flex justify-start items-center">
                                    <Image
                                        src="/images/logo.svg"
                                        width={50}
                                        height={50}
                                        alt='Logo'
                                    />
                                    <h1 className='text-xl font-bold ml-2'>Threads</h1>
                                </div>
                            </SheetTitle>
                            <SheetDescription>
                                {/* <SideBarLinks /> */}
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
            <Link href="/"><Image src="/images/logo.svg" width={30} height={30} alt='logo' /></Link>

            <Link href='/profile'>
                <User2 height={25} width={25} />
            </Link>
        </nav>
    )
}

export default MobileNav