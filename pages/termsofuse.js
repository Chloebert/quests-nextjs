import Link from "next/link";
import React, {useState} from "react";

function termsOfUse() {
    const [ checkbox, setCheckbox ] = React.useState(false);
    const handleCheckbox = e => {
        checkbox ? setCheckbox(false) : setCheckbox(true);
    };
    const handleSubmit = e => {
        e.preventDefault();
        checkbox? alert('Thanks for agreeing, enjoy your stay here') : alert('You forgot the checkbox, loser');
    };
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
            </ul>
        <h1>Terms of use</h1>
            You must not suck. That's it.
            <form onSubmit={handleSubmit}>
                <label>Well?</label>
                <input name={checkbox} onClick={handleCheckbox} type="checkbox"/>
                <button type="submit">Ok</button>
            </form>
        </div>)
}

export default termsOfUse;