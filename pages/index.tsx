import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
import { GetServerSideProps, GetStaticProps } from 'next';

import useSWR from 'swr';

import Link from 'next/link';
import Date from '../components/date';

/** GET FROM API */

// export default function Home({
//   allPostsData,
// }: {
//   allPostsData: { entries: { API: string; Description: string }[] };
// }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>
//           Hi, I'm Giulio. I'm a software developer. You can contact me on{' '}
//           <a href="https://www.linkedin.com/in/giulio-machado-0a150414b/">
//             Linkedin
//           </a>
//           {'.'}
//         </p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.entries.map(({ API, Description }) => (
//             <li className={utilStyles.listItem} key={API}>
//               {API}
//               <br />
//               {Description}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async context => {
//   const allPostsData = getSortedPostsData();
//   return allPostsData;
// };

/** GET FROM LOCAL FILE */
export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Giulio. I'm a software developer. You can contact me on{' '}
          <a href="https://www.linkedin.com/in/giulio-machado-0a150414b/">
            Linkedin
          </a>
          {'.'}
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

/** USING SWR */

// const fetcher = (url: string): Promise<any> =>
//   fetch(url).then(res => res.json());

// export default function Home() {
//   const { data } = useSWR('https://api.publicapis.org/entries', fetcher);

//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>
//           Hi, I'm Giulio. I'm a software developer. You can contact me on{' '}
//           <a href="https://www.linkedin.com/in/giulio-machado-0a150414b/">
//             Linkedin
//           </a>
//           {'.'}
//         </p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {data?.entries?.map(({ API, Description }) => (
//             <li className={utilStyles.listItem} key={API}>
//               {API}
//               <br />
//               {Description}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }
