import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { Routes } from '~/types/common.types';

interface LinkButtonProps {
  children: React.ReactNode;
  href: LinkProps['href'] | Routes;
  active?: boolean;
}

const LinkButton: FC<LinkButtonProps> = ({ children, href, active = true }) => {
  return (
    <Link
      href={href}
      className={`w-fit rounded-2xl flex-center px-5 py-3 select-none ${active ? 'bg-primaryVivid' : 'bg-gray-500 pointer-events-none'}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
