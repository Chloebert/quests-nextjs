import Link from "next/link";
import Layout from '../components/layout';
import React, {useState} from "react";
import styles from '/styles/terms.module.css';

function TermsOfUse() {
    const [ checkbox, setCheckbox ] = React.useState(false);
    const handleCheckbox = e => {
        checkbox ? setCheckbox(false) : setCheckbox(true);
    };
    const handleSubmit = e => {
        e.preventDefault();
        checkbox? alert('Thanks for agreeing, enjoy your stay here') : alert('You forgot the checkbox, loser');
    };
    return (
        <Layout>
            <div className={styles.terms}>
        <h1>Terms of use</h1>
            <p >You must not suck. That's it.</p>
            <form onSubmit={handleSubmit}>
                <label>Well?</label>
                <br/>
                <input className={styles.checkbox} name={checkbox} onClick={handleCheckbox} type="checkbox"/>
                <button className={styles.button} type="submit">Ok</button>
            </form>
            </div>
        </Layout>)
}

export default TermsOfUse;