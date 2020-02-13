import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../../../../../../components/hooks/useLayout';

const LessonListPage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>Lesson List</title>
      </Head>
      <Layout>
        <div>Lesson List</div>
      </Layout>
    </>
  );
};

export default LessonListPage;
