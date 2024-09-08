//import '@styles/globals.css'
//import styles from '../styles/globals.css';
export default function Home() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'a155812e96msh3d468699207ae72p1c60dbjsn964b74afebd5',
                        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
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
