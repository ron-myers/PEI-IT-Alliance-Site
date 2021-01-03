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
          <code className={styles.code}>Coming soon...</code>
        </p>

      </main>

      <footer className={styles.footer}>
        Made with <span className={styles.heart}>♥</span> in PEI
      </footer>
    </div>
  )
}
