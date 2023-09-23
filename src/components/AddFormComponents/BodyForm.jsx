import React from 'react';
import ButtonSubmit from './ButtonSubmit';

const BodyForm = ({ onSubmitNotes, maxTitle, onChangeTitle, onChangeBody }) => {
  return (
    <div className="px-5">
      <form className="mt-3" onSubmit={onSubmitNotes}>
        <p className="text-xs text-right">*Karakter tersisa {maxTitle}</p>
        <input className="w-full rounded p-2 text-sm font-medium border border-grey-500 placeholder:italic placeholder:text-slate-400" type="text" placeholder="Masukkan judul..." onChange={onChangeTitle} maxLength={50} required />
        <textarea className="w-full rounded p-2 h-48 mt-3 text-sm border border-grey-500 placeholder:italic placeholder:text-slate-400" type="textarea" placeholder="Tuliskan catatanmu disini..." onChange={onChangeBody} required />
        <ButtonSubmit />
      </form>
    </div>
  );
};

export default BodyForm;
