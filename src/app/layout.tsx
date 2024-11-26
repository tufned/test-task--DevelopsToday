import '~/styles/globals.scss';
import { ReactNode } from 'react';
import { metaData } from '~/constants/metadata';

export const metadata = metaData;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='uk'>
      <body className='bg-secondaryLight'>
        <div className='flex h-screen w-screen'>
          <main className='w-full flex-center'>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
