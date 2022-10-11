import Head from "next/head";
import {useEffect, useState} from "react";
import styles from "./index.module.css";
import {saveExcuseToFirebase} from "../firebase";


export default function Home() {
    const [result, setResult] = useState();

    async function fetchExcuse() {
        const response = await fetch("/api/generate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        saveExcuseToFirebase(data.result);
        setResult(data.result);
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
                    <h3>I can't go to war <b>because {result}</b></h3>
                </main>
            ) : (
                <main className={styles.main}>
                    <h3>Finding an excuse...</h3>
                </main>
            )}
        </div>
    );
}
