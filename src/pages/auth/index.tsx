import { Button } from '@budget-tracker/components/button/button';
import { Card } from '@budget-tracker/components/card/card';
import { Logo } from '@budget-tracker/components/logo/logo';
import { signIn } from 'next-auth/react';

const Auth = (): JSX.Element => {
  const onLoginButtonClick = (): void => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <>
      <Card>
        <Logo />
        <Button onClick={onLoginButtonClick} icon={'icon-google'}>
          Continue with Google
        </Button>
      </Card>
    </>
  );
};

export default Auth;
