import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Chloé';
export const siteTitle = 'Next Js Show';

export default function Layout({ children, home }) {
    return (
        <div>
            <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="First website made with React and Next Js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <h1 className={utilStyles.heading2Xl}>Welcome to Next Js</h1>
                        <Image
                            src="/images/knife-cat.jpeg"
                            alt="knife-cat"
                            height={250}
                            width={800}
                        />
                    </>
                ) : (
                    <>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>Next Js</a>
                            </Link>
                        </h2>
                    </>
                )}
                <ul>
                    <li>
                        <Link href="about">About</Link>
                    </li>
                    <li>
                        <Link href="termsofuse">Terms of use</Link>
                    </li>
                </ul>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            </div>
            <footer>
                <div className={styles.footer}>
                    <p>@Chloé - 2022</p>
                </div>
            </footer>
        </div>
    );
}
