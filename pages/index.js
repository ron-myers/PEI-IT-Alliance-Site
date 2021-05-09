import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PEI IT Alliance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PEI IT Alliance
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>The voice of the IT and Remote Worker industries of PEI.</code>
        </p>

        <p className={styles.joinInfo}>
          <a href="https://forms.gle/r8CaZbG1XsKw7bai6" title="The force is strong with this one.  We have hope rebellions are built on hope">Join The Alliance</a>
        </p>

        <p className={styles.contactInfo}>
          <a href="mailto:ron.myers@hey.com">Contact us</a>
        </p>

      </main>

      <footer className={styles.footer}>
        Made with <span className={styles.heart}>♥</span> in PEI
      </footer>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-EERY46WDLC`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EERY46WDLC', {
              page_path: window.location.pathname,
            });
            window.gaSiteId = 'G-EERY46WDLC';
          `,
        }} />
    </div>
  )
}
