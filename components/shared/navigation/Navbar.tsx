'use client';

import { FiTrello } from 'react-icons/fi';
import SiteLogo from '@/components/shared/SiteLogo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { LuArrowRight } from 'react-icons/lu';

const Navbar = () => {
  const { isSignedIn, user } = useUser();

  return (
    <nav className='flex items-center justify-between'>
      <div>
        <SiteLogo
          href='/'
          icon={FiTrello}
        />
      </div>

      <div className='flex items-center space-x-2 sm:space-x-4'>
        {isSignedIn ? (
          <div className='flex flex-col items-end space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4'>
            <span className='hidden text-xs text-gray-600 sm:block sm:text-sm'>
              Welcome, {user?.firstName ?? user?.emailAddresses[0].emailAddress}
            </span>
            <Link href='/dashboard'>
              <Button
                size='sm'
                className='text-xs sm:text-sm'
              >
                Go to Dashboard <LuArrowRight />
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <Button
              variant='ghost'
              size='sm'
              className='text-xs sm:text-sm'
            >
              <Link href='/sign-in'>Sign In</Link>
            </Button>

            <Button
              size='sm'
              className='text-xs sm:text-sm'
            >
              <Link href='/sign-up'>Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
