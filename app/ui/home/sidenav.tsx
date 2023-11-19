import Link from "next/link";
import styles from "./sidenav.module.css";
import NavLinks from "./navlinks";

const Sidenav = () => {
    return (
        <nav className={styles.container}>
            <h2>Side Nav</h2>

            <NavLinks />

            <form
                action={async() => {
                    'use server'
                    console.log('logout');
                }}
                className={styles.logout}
            >
                <button>
                    <p>Logout</p>
                </button>
            </form>
        </nav>
    );
};

export default Sidenav;
