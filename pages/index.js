import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { saveExcuseToFirebase, countExcusesInFirebase } from "../firebase";


export default function Home() {
    const [result, setResult] = useState();

    async function fetchExcuse() {
        setResult(null);
        const response = await fetch("/api/generate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data.result.message.content);
        saveExcuseToFirebase(data.result.message.content);
        setResult(data.result.message.content);
    }

    useEffect(() => {
        fetchExcuse().then(() => {
            console.log("Excuse fetched");
        });
    }, [])

    return (
        <div>
            <Head>
                <title>Excuses to not go to war</title>
            </Head>
            {result ? (
                <main className={styles.main}>
                    <h3><b>{result}</b></h3>

                    <button className={styles.button} onClick={fetchExcuse}>Generate new excuse</button>
                </main>) : (
                <main className={styles.main}>
                    <h3>Finding an excuse...</h3>
                </main>

            )}

        </div>
    );
}
