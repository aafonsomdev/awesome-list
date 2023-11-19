import Sidenav from "../ui/home/sidenav";
import styles from './home.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <div className={styles.container}>
                <Sidenav />
                
                <div>{children}</div>
            </div>
        </section>
    );
}
