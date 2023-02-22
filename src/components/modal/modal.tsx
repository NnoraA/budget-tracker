import { Dispatch, ReactNode, SetStateAction } from 'react';
import Image from 'next/image';

export const Modal = ({
  setModalOpen,
  children,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}): JSX.Element => {
  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white p-5 rounded-lg">
          <div className="w-full flex justify-end">
            <button onClick={(): void => setModalOpen(false)}>
              <Image src="/close.svg" height={40} width={40} alt="close" />
            </button>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};
