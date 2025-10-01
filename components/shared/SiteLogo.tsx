'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const SiteLogo = ({
  href,
  icon: Icon,
  iconClasses,
  linkClasses,
  linkText = 'Trello Clone',
  textClasses,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn('flex items-center space-x-2', linkClasses)}
    >
      {Icon && (
        <Icon className={cn('size-6 text-blue-600 sm:size-8', iconClasses)} />
      )}
      <span
        className={cn(
          'text-xl font-bold text-gray-900 sm:text-2xl',
          textClasses
        )}
      >
        {linkText}
      </span>
    </Link>
  );
};

export default SiteLogo;
