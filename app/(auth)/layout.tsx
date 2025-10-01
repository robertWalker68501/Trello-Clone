import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {children}
    </div>
  );
};

export default AuthLayout;
