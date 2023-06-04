import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '../logo/logo';

const navData = [
  { name: 'Statistics', to: '/statistics' },
  { name: 'Tracker', to: '/tracker' },
  {
    name: 'Sign out',
    to: '/auth',
    onclick: (): void => {
      signOut();
    },
  },
];

export const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <div className="flex gap-3 items-center h-[10%] shadow-md justify-between px-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-3">
          {navData.map((e) => (
            <Link
              className={
                router.pathname === e.to
                  ? 'text-2xl text-green-600'
                  : 'text-2xl  hover:text-gray-500'
              }
              href={e.to}
              onClick={e.onclick}
            >
              {e.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
