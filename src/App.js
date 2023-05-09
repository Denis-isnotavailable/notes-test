import Header from "./components/Header/Header";
import MainAreaBox from "./components/MainAreaBox/MainAreaBox";
import { AppContext } from './appContext/context';
import { useEffect, useState } from "react";


function App() {

  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);

  useEffect(() => {
    fetch("https://quintadb.com/apps/bJWQKXprHgrO_cGCoHD8kw/dtypes/entity/buWONdRxLdG6rLWQ7cGSoU.json?rest_api_key=biuCkLFsLnWQyBW6v3h0bv&amp;view=").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    ).then(
      data => {
        console.log(data.records);
        setNotes(data.records);
      }
    );
  }, []);

  const addNote = (note) => {
    setNotes(prev => [...prev, note]);

  };

  console.log(currentNoteId);

  // const deleteNote = (id) => {
  //   setNotes(prev => prev.filter());
    
  // };

  
  return (
    
    <AppContext.Provider value={{notes, currentNoteId, setCurrentNoteId}}>
      <Header />
      <MainAreaBox />
    </AppContext.Provider>
  );
}

export default App;




  // const topic = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  // const date = new Date();
  //   // "MMM DD, YYYY at HH:mm"
  // const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam possimus corrupti earum consequuntur? Eveniet at quo inventore voluptas vero recusandae quia error voluptates. Tempora unde corporis reprehenderit nisi minima?";
  // const oneNote = {
  //   topic,
  //   date,
  //   description,
  //   id: 1
  // };
