import React from 'react';

import NextApp from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import DayjsUtils from '@date-io/dayjs';
import { Cookies, CookiesProvider } from 'react-cookie';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CssBaseline from '@material-ui/core/CssBaseline';

import { CustomThemeProvider } from '../lib/theme';

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

if (typeof window === 'object') {
  localStorage.debug = '*';
}
class CustomApp extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CookiesProvider cookies={new Cookies()}>
        <CustomThemeProvider theme={pageProps.theme}>
          <MuiPickersUtilsProvider utils={DayjsUtils}>
            <CssBaseline />
            <Component {...pageProps} />
          </MuiPickersUtilsProvider>
        </CustomThemeProvider>
      </CookiesProvider>
    );
  }
}

export default CustomApp;
