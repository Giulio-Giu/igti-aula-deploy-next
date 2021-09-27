import React from 'react';
import Image from 'next/image';
import styles from './layout.module.css';
import utilsStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Head from 'next/head';

const name = 'Giulio Machado';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Leanr how to build a personal website using Next.js"
        />

        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilsStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilsStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilsStyles.headingLg}>
              <Link href="/">
                <a className={utilsStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back To Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
