import React from 'react';
import {Layout} from '../layout/Layout';
import {AppContextProvider, IAppContext} from "../contexts/app.context";

export const withLayout = <P extends Record<string, unknown> & IAppContext>(Component: React.FC<P>) => {
  const Wrapper = (props: P) => {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>


    );
  };

  Wrapper.displayName = `withLayout(${Component.displayName})`;

  return Wrapper;
};

