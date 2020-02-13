import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../components/hooks/useLayout';

const HomePage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>Open LMS</title>
      </Head>
      <Layout>
        <div>Home Page</div>
      </Layout>
    </>
  );
};

//HomePage.getInitialProps = async (ctx) => {
//const cookies = NextCookies(ctx);
//console.log(cookies);
//return {};
//};

export default HomePage;
