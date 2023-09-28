import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FileEdit } from "lucide-react";
import { Trash2 } from "lucide-react";

const Notes = ({
  notes,
  setNotes,
  setNoteToEditId,
  setNoteToEdit,
  setIsEditFormActive,
  setEditNoteTitle,
  setEditNoteDescription,
}) => {
  const deleteNote = (id) =>
    setNotes((currentNote) => currentNote.filter((note) => note.id !== id));

  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          className="flex flex-col justify-between bg-white rounded-lg shadow-xl p-[15px] min-h-[300px] max-h-[300px]"
        >
          <div>
            <h2 className="text-xl font-bold">{note.title}</h2>
            <div className="mt-4 text-base text-gray-700">
              {note.description}
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <p className="text-slate-500 md:text-sm">{note.date}</p>

            <div className="relative group">
              <button className="text-slate-700">
                <BsThreeDots size={23} />
              </button>
              <div className="bg-slate-300 absolute bottom-[15px] right-0 rounded-md shadow-2xl scale-0 group-hover:scale-100 transform-cpu origin-bottom-right duration-300">
                <button
                  onClick={() => {
                    setNoteToEditId(note.id);
                    setNoteToEdit(note);
                    setIsEditFormActive(true);
                    setEditNoteTitle((prevTitle) =>
                      note.title === "You didn't input a title"
                        ? ""
                        : note.title
                    );
                    setEditNoteDescription((prevDescription) =>
                      note.description === "You didn't input any description"
                        ? ""
                        : note.description
                    );
                  }}
                  className="flex gap-2 text-sm px-4 py-2 items-center hover:bg-slate-500 hover:text-white rounded-t-md w-full"
                >
                  <FileEdit size={15} /> Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="flex gap-2 text-sm px-4 py-2 items-center hover:bg-slate-500 hover:text-white rounded-b-md w-full"
                >
                  <Trash2 size={15} /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Notes;
