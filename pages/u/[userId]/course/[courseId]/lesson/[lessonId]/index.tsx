import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../../../../../../../components/hooks/useLayout';

const LessonPage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>[Lesson Name]</title>
      </Head>
      <Layout>
        <div>Lesson Name</div>
      </Layout>
    </>
  );
};

export default LessonPage;
