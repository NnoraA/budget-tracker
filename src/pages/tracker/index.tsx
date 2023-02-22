import { AddButton } from '@budget-tracker/components/add-button/add-button';
import { NewExpenseForm } from '@budget-tracker/components/form/new-expense-form';
import { Modal } from '@budget-tracker/components/modal/modal';
import { useState } from 'react';

const Tracker = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <h1 className="text-2xl font-bold text-lime-800">Add expense</h1>
          <NewExpenseForm setModalOpen={setModalOpen} />
        </Modal>
      )}
      <AddButton onClick={(): void => setModalOpen(true)} />
    </>
  );
};

export default Tracker;
