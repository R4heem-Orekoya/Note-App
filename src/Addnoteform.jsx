import React, { useContext } from "react";
import { IsFormActiveContext } from "./App";
import { X } from "lucide-react";

const Addnoteform = ({ addNotes }) => {
  const [
    ,
    setIsFormActive,
    noteTitle,
    setnoteTitle,
    noteDescription,
    setnoteDescription,
  ] = useContext(IsFormActiveContext);

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/50 flex items-center justify-center font-poppins backdrop-blur-md">
      <div className="bg-white w-[330px] max-w-[90%] rounded-lg shadow-2xl pb-2">
        <div className="flex justify-between items-center border-b-2 p-4">
          <h2 className="text-lg font-semibold">Add a new note</h2>

          <button
            onClick={() => {
              setIsFormActive(false);
              setnoteTitle("");
              setnoteDescription("");
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
              value={noteTitle}
              onChange={(e) => setnoteTitle(e.target.value)}
              className="border focus:border-2 border-gray-400 mt-1 px-3 h-[50px] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="description" className="text-base font-semibold">
              Description
            </label>
            <textarea
              id="description"
              value={noteDescription}
              onChange={(e) => setnoteDescription(e.target.value)}
              className="border focus:border-2 border-gray-400 mt-1 p-3 max-h-[200px] min-h-[100px] rounded-md outline-none"
            ></textarea>
          </div>

          <button
            onClick={addNotes}
            className="bg-blue-500 hover:bg-blue-600 w-full mt-6 py-3 rounded-md text-white text-lg font-semibold"
          >
            Add note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addnoteform;
