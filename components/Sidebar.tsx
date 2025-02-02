'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {

    // awa lo ditnaway aw path aya ka esta ama leyna yan aw page ay la esta ama leyna
    const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt='Horizon Logo'
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Horizon</h1>
            </Link>

            {sidebarLinks.map((item) => {
                // awa aw page ay ka ama leyna damanawe stle ake dekay bdayne lo nmuna agar ama la
                // home bin awa ba home aka rangake deka bit
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    // aw cn a dw class name y dadaye lagar marjake lera marjakaman isActive a , agar marjaka true bw awa bg-bank-gradient dadate 
                    // agar na sidebar-link dadate
                    <Link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
                        <div className='relative size-6'>
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                fill
                                className={cn({'brightness-[3] invert-0':isActive})}
                            />
                        </div>
                        <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label}</p>
                    </Link>
                )
            })}

            USER
        </nav>

        FOOTER
    </section>
  )
}

export default Sidebar