import Head from 'next/head'
import Image from 'next/image'
import {useEffect} from "react";
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    useEffect(() => {
        console.log('index page did mount')
    })
  return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h2>Hey</h2>
            </section>
        </Layout>
  )
}
