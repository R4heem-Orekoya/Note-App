import { createContext, useEffect, useState } from "react";
import Addnoteform from "./Addnoteform";
import EditNoteForm from "./EditNoteForm";
import AddNote from "./AddNote";
import Notes from "./Notes";

export const IsFormActiveContext = createContext();

const now = new Date()

function App() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sepetember",
    "October",
    "November",
    "December",
  ];
  const [noteTitle, setnoteTitle] = useState("");
  const [noteDescription, setnoteDescription] = useState("");
  const [isFormActive, setIsFormActive] = useState(false);

  const [isEditFormActive, setIsEditFormActive] = useState(false);
  const [noteToEditId, setNoteToEditId] = useState("");
  const [noteToEdit, setNoteToEdit] = useState("");
  const [editNoteDescription, setEditNoteDescription] = useState("");
  const [editNoteTitle, setEditNoteTitle] = useState("");

  const [notes, setNotes] = useState(() => {
    const localNotes = localStorage.getItem("notes");
    return localNotes ? JSON.parse(localNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNotes = () => {
    setNotes((prevNotes) => [
      {
        title: noteTitle.length === 0 ? "You didn't input a title" : noteTitle,
        description:
          noteDescription.length === 0
            ? "You didn't input any description"
            : noteDescription,
        date: `${now.getDate()} ${
          months[now.getMonth()]
        },  ${now.getFullYear()}`,
        id: crypto.randomUUID(),
      },
      ...prevNotes,
    ]);

    setIsFormActive(false);
    setnoteTitle("");
    setnoteDescription("");
  };

  const editNote = (id, noteToEdit) => {
    setNotes((currentNote) => {
      return currentNote.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            title:
              editNoteTitle.length === 0
                ? "You didn't input a title"
                : editNoteTitle,
            description:
              editNoteDescription.length === 0
                ? "You didn't input any description"
                : editNoteDescription,
          };
        }

        return note;
      });
    });

    setIsEditFormActive(false);
  };

  return (
    <IsFormActiveContext.Provider
      value={[
        isFormActive,
        setIsFormActive,
        noteTitle,
        setnoteTitle,
        noteDescription,
        setnoteDescription,
      ]}
    >
      <div className="w-[90%] mx-auto py-[5%] bg-blue-500 grid gap-4 grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-[300px] min-h-screen font-poppins">
        <AddNote />

        <Notes
          notes={notes}
          setNotes={setNotes}
          setNoteToEditId={setNoteToEditId}
          setNoteToEdit={setNoteToEdit}
          setIsEditFormActive={setIsEditFormActive}
          setEditNoteTitle={setEditNoteTitle}
          setEditNoteDescription={setEditNoteDescription}
        />
      </div>

      {isFormActive && <Addnoteform addNotes={addNotes} />}

      {isEditFormActive && (
        <EditNoteForm
          editNote={editNote}
          editNoteDescription={editNoteDescription}
          setEditNoteDescription={setEditNoteDescription}
          editNoteTitle={editNoteTitle}
          setEditNoteTitle={setEditNoteTitle}
          isEditFormActive={isEditFormActive}
          setIsEditFormActive={setIsEditFormActive}
          noteToEditId={noteToEditId}
          noteToEdit={noteToEdit}
        />
      )}
    </IsFormActiveContext.Provider>
  );
}

export default App;
