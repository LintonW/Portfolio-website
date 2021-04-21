//importing head to change document title
import Head from 'next/head';
//component
import Landing from '../components/Landing';
//home/index css module
import styles from '../styles/Home.module.css';

//index page
export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Linton Dorgan Portfolio</title>
            </Head>

            <Landing />
        </div>
    );
}
