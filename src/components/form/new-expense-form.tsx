import { Dispatch, SetStateAction } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const expenseTypes = ['grocery', 'car', 'travel'];

export const NewExpenseForm = ({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 my-4 items-center">
          <select
            {...register('expenseTypes')}
            className="shadow-md p-3 w-full bg-white"
          >
            <option value="" selected className="text-slate-500">
              Select expense type
            </option>
            {expenseTypes.map((expense) => (
              <option key={expense} value={expense}>
                {expense}
              </option>
            ))}
          </select>
          <input
            type="number"
            {...register('amount')}
            className="shadow-md p-3"
          />
          <input
            type="submit"
            className="bg-lime-800 shadow-md text-white p-3 max-w-fit rounded-md"
          />
        </div>
      </form>
    </>
  );
};
