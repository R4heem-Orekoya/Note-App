import React, { useContext } from "react";
import { IsFormActiveContext } from "./App";
import { BsPlusLg } from "react-icons/bs";
import { Plus } from "lucide-react";

const AddNote = () => {
  const [, setIsFormActive] = useContext(IsFormActiveContext);

  return (
    <div
      onClick={() => setIsFormActive(true)}
      className="bg-white rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-xl"
    >
      <div className="w-[85px] aspect-square rounded-full border-dashed border-2 border-blue-500 flex justify-center items-center">
        <Plus size={50} className="text-blue-500" />
      </div>

      <h2 className="text-lg font-semibold text-blue-500 mt-4">
        Add a new note
      </h2>
    </div>
  );
};

export default AddNote;
