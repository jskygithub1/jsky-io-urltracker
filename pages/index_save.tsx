import React, {useEffect, useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);

    const getData = async () => {
        const {data} = await axios.get(`/api/v1.0/qrcgen?background=ff0000&&color=00ffff&width=120&margin=10`);
        //await axios.get(`/api/v1.0/hello2`);
        setData(data);

    };
    useEffect(() => {
        getData();
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    if (!data) {
        return null;
    }



    const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {

        /* Prevent form from submitting by default */
        e.preventDefault();

        /* If file is not selected, then show alert message */
        if (!inputFileRef.current?.files?.length) {
            alert('Please, select file you want to upload');
            return;
        }

        setIsLoading(true);

        /* Add files to FormData */
        const formData = new FormData();
        debugger;
        Object.values(inputFileRef.current.files).forEach(file => {
            formData.append('myfile', file);
        })

        formData.append( 'myfield1', 'valllll')
        formData.append( 'myfield2', 'valllll22222')

        const response = await axios.post( '/api/v1.0/uploader', formData )

        /* Send request to our api route */
        //const response = await fetch('/api/upload', {
        //    method: 'POST',
        //    body: formData
        //});

        /*const body = await response.json() as { status: 'ok' | 'fail', message: string };

        alert(body.message);

        if (body.status === 'ok') {
            inputFileRef.current.value = '';
            // Do some stuff on successfully upload
        } else {
            // Do some stuff on error
        }*/

        setIsLoading(false);
    };

    return (
        <div className={styles.container}>
            <Head>j=hello
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Image width={200} height={200} src={data} alt="none" />

            <form encType="multipart/form-data">
                <div>
                    <input type="file" name="myfile" ref={inputFileRef} multiple />
                    <input name="myfield" value="myfieldvalue" />
                </div>
                <div>
                    <input type="submit" value="Upload" disabled={isLoading} onClick={handleOnClick} />
                    {isLoading && ` Wait, please...`}
                </div>
            </form>


            <h3>Bootstrap</h3>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">...</div>
                        </div>
                    </div>
                </div>
            </div>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
