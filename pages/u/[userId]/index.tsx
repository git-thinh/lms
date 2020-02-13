import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../../../components/hooks/useLayout';

const UserProfilePage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>Ngo Quang Duong</title>
      </Head>
      <Layout>
        <div>
          <h4>Ngo Quang Duong</h4>
        </div>
      </Layout>
    </>
  );
};

export default UserProfilePage;
