import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../../../../../../../components/hooks/useLayout';

const ExercisePage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>[Exercise Name]</title>
      </Head>
      <Layout>
        <div>Exercise Name</div>
      </Layout>
    </>
  );
};

export default ExercisePage;
