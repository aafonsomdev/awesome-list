import styles from "./sidenav.module.css";
import NavLinks from "./navlinks";
import NavHeader from "./nav-header";

const Sidenav = () => {
    return (
        <nav className={styles.container}>
            <NavHeader title='Awesome List' />

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
