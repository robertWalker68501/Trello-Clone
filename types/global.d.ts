import { IconType } from 'react-icons';

declare global {
  type SiteLogoProps = {
    href: string;
    linkClasses?: string;
    icon?: IconType;
    iconClasses?: string;
    linkText?: string;
    textClasses?: string;
  };
}

export {};
