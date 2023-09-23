import { React, useState } from 'react';
import AddForm from '../components/AddFormComponents/AddForm';

const AddNotesSection = ({ AddNotesHandler }) => {
  const [maxTitle, setMaxTitle] = useState(50);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // ADD TITLE HANDLER
  const addTitleHandler = (e) => {
    if (e.target.value.length <= 50) {
      setMaxTitle(50 - e.target.value.length);
      setTitle(e.target.value);
    }
  };

  const addBodyHandler = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddNotesHandler({
      title,
      body,
    });
  };

  return (
    <div>
      <AddForm onSubmitNotes={handleSubmit} maxTitle={maxTitle} onChangeTitle={addTitleHandler} onChangeBody={addBodyHandler} />
    </div>
  );
};

export default AddNotesSection;
