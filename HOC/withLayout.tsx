import React from 'react';
import {Layout} from '../layout/Layout';

export const withLayout = <P extends Record<string, unknown>>(Component: React.FC<P>) => {
  const Wrapper = (props: P) => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>

    );
  };

  Wrapper.displayName = `withLayout(${Component.displayName})`;

  return Wrapper;
};

