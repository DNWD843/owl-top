import {LayoutProps} from './Layout.props';
import {Sidebar} from './Sidebar/Sidebar';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';
import React from 'react';

export const Layout = ({children}: LayoutProps): JSX.Element => (
  <>
    <Header />
    <main>
      <Sidebar />
      <div>
        {children}
      </div>
    </main>
    <Footer />
  </>
);
