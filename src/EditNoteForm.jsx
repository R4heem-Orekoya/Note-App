import React from "react";
import { IoClose } from "react-icons/io5";
import { X } from "lucide-react";

const EditNoteForm = ({
  editNote,
  editNoteDescription,
  setEditNoteDescription,
  editNoteTitle,
  setEditNoteTitle,
  isEditFormActive,
  setIsEditFormActive,
  noteToEditId,
  noteToEdit,
}) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/50 flex items-center justify-center font-poppins backdrop-blur-md">
      <div className="bg-white w-[330px] max-w-[90%] rounded-lg shadow-2xl pb-2">
        <div className="flex justify-between items-center border-b-2 p-4">
          <h2 className="text-lg font-semibold">Edit note</h2>

          <button
            onClick={() => {
              setIsEditFormActive(false);
              setEditNoteTitle("");
              setEditNoteDescription("");
            }}
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex flex-col mt-4">
            <label htmlFor="title" className="text-base font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={editNoteTitle}
              onChange={(e) => setEditNoteTitle(e.target.value)}
              className="font-semibold border focus:border-2 border-gray-400 mt-1 px-3 h-[50px] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="description" className="text-base font-semibold">
              Description
            </label>
            <textarea
              id="description"
              value={editNoteDescription}
              onChange={(e) => setEditNoteDescription(e.target.value)}
              className="font-semibold border focus:border-2 border-gray-400 mt-1 p-3 max-h-[200px] min-h-[100px] rounded-md outline-none"
            ></textarea>
          </div>

          <button
            onClick={() => editNote(noteToEditId, noteToEdit)}
            className="bg-blue-500 hover:bg-blue-600 w-full mt-6 py-3 rounded-md text-white text-lg font-semibold"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteForm;
