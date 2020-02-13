import React from 'react';

import * as PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Header from '../header';
import Footer from '../footer';

const useLayoutStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: '1 1 auto'
  }
}));

const useLayout = (): React.FC => {
  const layoutClasses = useLayoutStyles();

  const FullPageComponent: React.FC = (props) => {
    return (
      <div className={layoutClasses.container}>
        <Header />
        <div className={layoutClasses.main}>{props.children}</div>
        <Footer />
      </div>
    );
  };

  FullPageComponent.propTypes = {
    children: PropTypes.node
  };

  return FullPageComponent;
};

export default useLayout;
