import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import Link from 'next/link';

export default function Home() {
    useEffect(() => {
        console.log('index page did mount')
    })
  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
        <ul>
            <li>
                <Link href="about">About</Link>
            </li>
            <li>
                <Link href="termsofuse">Terms of use</Link>
            </li>
        </ul>
    </div>
  )
}
