import { GetStaticProps, NextComponentType } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import Layout from 'components/Layout';
import GlobalStyle from 'styles/GlobalStyle';
import configureStore from 'reducers/configureStore';

const store = configureStore();

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
    return <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TitleName</title>
      </Head>
      <GlobalStyle/>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </Provider>
    </>
}

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);

  return {
    ... appProps
  }
}

export default MyApp
