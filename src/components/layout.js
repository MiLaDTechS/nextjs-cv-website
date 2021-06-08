import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from './layout.module.scss'

export const siteTitle = 'علی احمدی';

export default function Layout({ children, home }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [preloaderTimer, setPreloaderTimer] = useState(0);
    const preloaderTimerRef = useRef(null);

    useEffect(() => {
        const preloader = document.getElementById('preloader-container')
        preloader.addEventListener('transitionend', function (e) {
            preloader.style.display = 'none';
        }, false);

        setTimeout(() => {
            preloaderTimerRef.current = setInterval(() => {
                setPreloaderTimer(prev => prev + 10)
            }, 10);
        }, 250);
    }, []);

    useEffect(() => {
        if (preloaderTimer === 1000) {
            clearInterval(preloaderTimerRef.current);
            setTimeout(() => {
                setIsLoaded(true);
            }, 500);
        }
    }, [preloaderTimer])

    return (
        <div className={styles.art_app}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="MiLaD Aghasi CV" />
                <link
                    href="/fonts/RohanRound/RohanRound_Regular.woff2"
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
            </Head>

            <div className={styles.art_mobile_top_bar}></div>

            <div id="preloader-container" className={styles.art_preloader} style={{ opacity: isLoaded ? 0 : 1 }}>
                <div className={styles.art_preloader_content}>
                    <h4>علی احمدی</h4>
                    <div id="preloader" className={styles.art_preloader_load}>
                        <svg viewBox="0 0 100 1.7" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                            <path d="M 0,0.85 L 100,0.85" stroke="#eee" strokeWidth="1.7" fillOpacity="0"></path>
                            <path d="M 0,0.85 L 100,0.85" stroke="#555" strokeWidth="1.7" fillOpacity="0" style={{ strokeDasharray: `${Math.floor(preloaderTimer / 10)}, ${100 - Math.floor(preloaderTimer / 10)}`, strokeDashoffset: '0' }}></path>
                        </svg>
                        <div className={styles.progressbar_text}>{Math.floor(preloaderTimer / 10)} %</div>
                    </div>
                </div>
            </div>

            <main className={styles.art_app_wrapper}>
                <div className={styles.art_app_container}>
                    {children}
                </div>
            </main>
        </div>
    )
}