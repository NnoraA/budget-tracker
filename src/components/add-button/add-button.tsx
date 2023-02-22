import Image from 'next/image';
import { DOMAttributes } from 'react';

export const AddButton = ({
  onClick,
}: DOMAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <>
      <button onClick={onClick}>
        <div className="rounded-full bg-lime-800 p-2">
          <Image src="/plus.svg" height={40} width={40} alt="plus" />
        </div>
      </button>
    </>
  );
};
