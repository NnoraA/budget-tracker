import Image from 'next/image';
import { DOMAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  icon?: string;
}> &
  DOMAttributes<HTMLButtonElement>;

export const Button = ({
  icon,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <>
      <div className="flex gap-3 shadow-xl p-3 bg-white rounded-lg hover:-translate-y-1">
        {icon && (
          <Image
            src={`/${icon}.svg`}
            height={30}
            width={30}
            alt={icon}
            data-testid="icon"
          />
        )}
        <button onClick={onClick}>{children}</button>
      </div>
    </>
  );
};
