import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../../../../../components/hooks/useLayout';

const CoursePage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>[Course Name]</title>
      </Head>
      <Layout>
        <div>[Course Name]</div>
      </Layout>
    </>
  );
};

export default CoursePage;
