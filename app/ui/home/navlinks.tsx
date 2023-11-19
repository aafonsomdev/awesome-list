import Link from "next/link";

const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Settings",
        href: "/settings",
    },
];

const NavLinks = () => {
    return (
        <>
            {links.map(({title, href}) => {
                return <Link key={title + href} href={href}>{title}</Link>
            })}
        </>
    );
};

export default NavLinks;
