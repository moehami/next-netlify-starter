//import '@styles/globals.css'
//import styles from '../styles/globals.css';
export default function Home() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://fakestoreapi.com/products/1`,
                {
                    method: 'GET',
                    headers: {


                    },
                }
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <button onClick={callAPI}>Make API call</button>
        {callAPI}
            </main>
        </div>
    );
}
