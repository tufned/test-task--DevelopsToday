import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { Routes } from '~/types/common.types';

interface LinkButtonProps {
  label: string;
  href: LinkProps['href'] | Routes;
  active?: boolean;
}

const LinkButton: FC<LinkButtonProps> = ({ label, href, active = true }) => {
  return (
    <Link
      href={href}
      className={`rounded-2xl flex-center px-5 py-3 select-none ${active ? 'bg-primaryVivid' : 'bg-gray-500 pointer-events-none'}`}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
