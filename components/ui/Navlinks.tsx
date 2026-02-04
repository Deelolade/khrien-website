import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavlinksType = {
    href: string;
    children: React.ReactNode;
}
const Navlinks = ({ href, children }: NavlinksType) => {
    const pathName = usePathname()
    const isActive = pathName === href
    return (
        <Link href={href} className={`${isActive ? 'text-brandYellow' : ''} hover:text-brandPurple transition-all duration-50 ease-in-out`}>
            {children}
        </Link>
    )
}

export default Navlinks