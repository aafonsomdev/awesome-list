
const item = {
    id: 'list_1', 
    title: 'Lista 1',
    items: [
        {
            id: 'item_1',
            desc: "Estos es una prueba"
        }
    ],
}

const Page = () => {
    return (
        <main>
            <h3>{item.title}</h3>
            <ul>
                {item.items.map(listItem => {
                    return <li key={listItem.id}>{listItem.desc}</li>
                })}
            </ul>
        </main>
    );
};

export default Page;
