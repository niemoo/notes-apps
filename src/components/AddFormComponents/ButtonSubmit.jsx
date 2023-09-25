import React from 'react';

const ButtonSubmit = () => {
  return (
    <>
      <div className="flex justify-end mt-3">
        <button className="text-sm bg-black hover:bg-emerald-500 border text-white border-gray-500 shadow py-1 px-2 rounded-lg" type="submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default ButtonSubmit;
