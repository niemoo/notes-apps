import React from 'react';
import BodyForm from './BodyForm';
import HeaderAddForm from './HeaderAddForm';

const AddForm = ({ onSubmitNotes, maxTitle, onChangeTitle, onChangeBody }) => {
  return (
    <div className="md:mt-10 md:mx-auto mt-12 m-5 rounded-lg py-4 max-w-xl shadow border border-grey-500">
      <HeaderAddForm />
      <BodyForm onSubmitNotes={onSubmitNotes} maxTitle={maxTitle} onChangeTitle={onChangeTitle} onChangeBody={onChangeBody} />
    </div>
  );
};

export default AddForm;
