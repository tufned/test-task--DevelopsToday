import '~/styles/globals.scss';
import { ReactNode } from 'react';
import { metaData } from '~/constants/metadata';
import SnackbarContextProvider from '~/context/snackbar-context';

export const metadata = metaData;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='uk'>
      <body className='bg-secondaryLight'>
        <div className='flex h-screen w-screen'>
          <SnackbarContextProvider>
            <main className='w-full flex-center'>{children}</main>
          </SnackbarContextProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
