import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MainAreaBox from "./components/MainAreaBox/MainAreaBox";
import { AppContext } from './appContext/context';
import { fetchNotes, addNote, deleteNote, editNote } from "./db/dbOperations";
import { Modal } from "./components/Modal/Modal";
import { ModalFormAddNote, ModalFormDeleteNote, ModalFormEditNote } from "./components/ModalForm/ModalForm";


function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    const setFetchedNotes = async () => {
      const data = await fetchNotes();
      
      setNotes(data);
    };
    setFetchedNotes();  
  }, []);

  const addNewNote = async (note) => {   
    const data = await addNote(note);    
    setNotes(prev => [data, ...prev]);
  };  

  const deleteNoteMethod = async () => {
    if (currentNoteId) {
      const data = await deleteNote(currentNoteId);
      data.result === "Successfully deleted" && setNotes(prev => prev.filter(({ id }) => id !== currentNoteId));
      setCurrentNoteId(null);
    }   
  };

  const editNoteMethod = async (note, id) => {   
    await editNote(note, id);

    const data = await fetchNotes();
    setNotes(data);
  };

  const closeModal = () => setModalType("");
  
  return (
    
    <AppContext.Provider value={{notes, currentNoteId, setCurrentNoteId, setModalType, setSearchValue, searchValue, closeModal, addNewNote, deleteNoteMethod, editNoteMethod }}>
      <Header />
      <MainAreaBox />
      {modalType === "addNote" && <Modal closeModal={closeModal}><ModalFormAddNote /></Modal>}
      {modalType === "deleteNote" && <Modal closeModal={closeModal}><ModalFormDeleteNote /></Modal>}
      {modalType === "editNote" && <Modal closeModal={closeModal}><ModalFormEditNote /></Modal>}
    </AppContext.Provider>
  );
}

export default App;
