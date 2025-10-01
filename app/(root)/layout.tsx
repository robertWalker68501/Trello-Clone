import { ReactNode } from 'react';
import Header from '@/components/shared/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
