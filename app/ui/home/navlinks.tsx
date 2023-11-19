'use client'

import Link from "next/link";
import { CogIcon, HomeIcon } from "@heroicons/react/24/outline";
import styles from './sidenav.module.css';
import { usePathname } from 'next/navigation';

const links: NavLink[] = [
    {
        title: "Home",
        href: "/home",
        icon: HomeIcon,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: CogIcon,
    },
];

const NavLinks = () => {

    const pathname = usePathname()
    console.log(pathname);

    return (
        <>
            {links.map(({ title, href, icon }) => {
                const LinkIcon = icon;
                
                return (
                    <Link key={title + href} href={href} className={styles.navlink && (href === pathname ? styles.focusElement : '')} >
                        <LinkIcon className={styles.navIcon}/>
                        {title}
                    </Link>
                );
            })}
        </>
    );
};

export default NavLinks;
