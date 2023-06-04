import { useRouter } from 'next/router';
import { Header } from '../header/header';
import { useEffect } from 'react';
import Auth from '@budget-tracker/pages/auth';
import { useSession } from 'next-auth/react';
import { Spinner } from '../spinner/spinner';

export const Layout = ({ children }: React.PropsWithChildren): JSX.Element => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (router.pathname !== '/auth' && status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);

  return (
    <>
      {status === 'loading' && <Spinner type="page" size={12} />}
      {status === 'unauthenticated' ? (
        <main className="flex justify-center items-center w-full h-[90%]">
          <Auth />
        </main>
      ) : (
        <>
          <Header />
          <main className="flex justify-center items-center w-full h-[90%]">
            {children}
          </main>{' '}
        </>
      )}
    </>
  );
};
