import Link from "next/link";
import Head from "next/head";
import Layout from '../components/layout';

function About() {
    return <Layout>
        <div className={'about'}>
            <h1>About me</h1>
            <p>Hi my name is Ebony Dark’ness Dementia Raven Way and I have long ebony black hair (that’s how
                I got my name) with purple streaks and red tips that reaches my mid-back and icy blue eyes like
                limpid tears and a lot of people tell me I look like Amy Lee (AN: if u don’t know who she is get da
                hell out of here!). I’m not related to Gerard Way but I wish I was because he’s a major fucking
                hottie. I’m a vampire but my teeth are straight and white. I have pale white skin. I’m also a witch,
                and I go to a magic school called Hogwarts in England where I’m in the seventh year (I’m
                seventeen). I’m a goth (in case you couldn’t tell) and I wear mostly black. I love Hot Topic and I
                buy all my clothes from there. For example today I was wearing a black corset with matching lace
                around it and a black leather miniskirt, pink fishnets and black combat boots. I was wearing black
                lipstick, white foundation, black eyeliner and red eye shadow. I was walking outside Hogwarts. It
                was snowing and raining so there was no sun, which I was very happy about. A lot of preps stared at
                me. I put up my middle finger at them. </p>
        </div>
        <style jsx>{`
        .about {
        background-color: #F5F5F5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40rem;
        min-height: 20rem;
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        box-shadow: 2px 2px 2px 2px rgba(99, 79, 99, 0.1);
        }
        p {
          color: #634F63;
        }
        h1 {
        color: #352435}
      `}</style>
    </Layout>
}

export default About;