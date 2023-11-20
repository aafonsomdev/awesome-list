import { TruckIcon } from "@heroicons/react/24/outline";
import styles from "./sidenav.module.css";
import Link from "next/link";

interface Props {
    title: string;
}

const NavHeader = ({ title }: Props) => {
    return (
        <header className={styles.navHeaderContainer}>
            <Link href='/'>
                <TruckIcon className={styles.navHeaderIcon} />
            </Link>

            <h2>{title}</h2>
        </header>
    );
};

export default NavHeader;
