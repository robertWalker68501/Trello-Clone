'use client';

import { useUser } from '@clerk/nextjs';

const Dashboard = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <main className='container mx-auto px-4 py-6 sm:py-8'>
          <div className='text-center'>Loading...</div>
        </main>
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // or redirect to sign-in
  }
 
   return (
     /* ...existing JSX... */
   );
};
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='container mx-auto px-4 py-6 sm:py-8'>
        <div className='mb-6 sm:mb-8'>
          <h1 className='mb-2 text-2xl font-bold text-gray-900 sm:text-3xl'>
            Welcome back,{' '}
            {user?.firstName ?? user?.emailAddresses[0].emailAddress}! 👋
          </h1>
          <p className='text-gray-600'>
            Here&#39;s what&#39;s happening with your boards today.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
