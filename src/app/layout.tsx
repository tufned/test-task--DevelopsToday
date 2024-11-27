import '~/styles/globals.scss';
import { ReactNode } from 'react';
import { metaData } from '~/constants/metadata';
import SnackbarContextProvider from '~/context/snackbar-context';

export const metadata = metaData;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='uk' data-lt-installed='true'>
      <body className='bg-secondaryLight'>
        <div className='flex min-h-screen w-screen'>
          <SnackbarContextProvider>
            <main className='w-full flex justify-center'>{children}</main>
          </SnackbarContextProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
