import { useState } from 'react';
import './App.css';
import AddNotesSection from './section/AddNotesSection';
import Header from './section/Header';
import NotesSection from './section/NotesSection';
import { getInitialData } from './utils';

function App() {
  const [datas, setDatas] = useState(getInitialData);

  const onSubmitNotes = ({ title, body }) => {
    setDatas((prevData) => [
      ...prevData,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]);
  };

  // FUNCTION TO DELETE NOTES AND SET THE DATAS
  const deletedNotes = (id) => {
    const updatedNotes = datas.filter((data) => data.id !== id);
    setDatas(updatedNotes);
  };

  return (
    <>
      <div>
        <Header />
        <AddNotesSection AddNotesHandler={onSubmitNotes} />
        <NotesSection dataSets={datas} deleteFunction={deletedNotes} />
      </div>
    </>
  );
}

export default App;
