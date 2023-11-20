import Link from "next/link";

import styles from "./page.module.css";

const mockLists = [
    { id: "lista_1", title: "Lista 1" },
    { id: "lista_2", title: "Lista 2" },
    { id: "lista_3", title: "Lista 3" },
    { id: "lista_4", title: "Lista 4" },
    { id: "lista_5", title: "Lista 5" },
];

const Page = () => {
    return (
        <main className={styles.mainLayout}>
            <h2>Selecciona una de las listas que ya tienes creadas</h2>
            <Link href="/create">
                <h3>O crea una nueva</h3>
            </Link>
            <br />
            <ul>
                {mockLists.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <Link href={`/${id}/list`}>
                                <h4>{title}</h4>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Page;
