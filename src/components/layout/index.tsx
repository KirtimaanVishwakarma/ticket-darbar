import React from 'react';
import Header from '../header';
import Footer from '../footer';

const Layout = ({
  showHeader=false,
  children,
}: Readonly<{
  children: React.ReactNode;
  showHeader?: boolean;
}>) => {
  return (
    <>
      <Header showHeader={showHeader}/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
