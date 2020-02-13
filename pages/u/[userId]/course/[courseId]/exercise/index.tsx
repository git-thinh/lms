import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../../../../../../components/hooks/useLayout';

const ExerciseListPage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>Exercise List</title>
      </Head>
      <Layout>
        <div>Exercise List</div>
      </Layout>
    </>
  );
};

export default ExerciseListPage;
