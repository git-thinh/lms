import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import useLayout from '../../../../components/hooks/useLayout';

const CourseListPage: NextPage = () => {
  const Layout = useLayout();

  return (
    <>
      <Head>
        <title>Course List</title>
      </Head>
      <Layout>
        <div>Course List</div>
      </Layout>
    </>
  );
};

export default CourseListPage;
