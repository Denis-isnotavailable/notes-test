import React from 'react';
import { ListItemStyled, LockIconStyled } from './ListItem.styled';
import { useNoteData } from '../../appContext/context';

const ListItem = ({note}) => { 
  const {setCurrentNoteId} = useNoteData(); 

  const getDateOrTime = (date) => {
    const today = new Date().toLocaleString("en-US", { dateStyle: "short" });
    const noteDate = new Date(date).toLocaleString("en-US", { dateStyle: "short" });
    const noteTime = new Date(date).toLocaleString("en-US", { timeStyle: "short" });

    return today === noteDate ? noteTime : noteDate;
  }


  return (    
    <ListItemStyled onClick={() => setCurrentNoteId(note.id)} >
      {note.values.dcUenzWQXhW5WbW43cUrft === "Yes" && <LockIconStyled />}
      <h1>{ note.values.cqdSoLW7PdNO_cPCk9W7ri }</h1>  
      <p> {getDateOrTime(note.updated_at)}  {note.values.dcUenzWQXhW5WbW43cUrft === "Yes" ? "Locked" : note.values.cOpH80i8ncnioZza3dGSkQ}</p>
    
    </ListItemStyled>
  )
}

export default ListItem;

// cOpH80i8ncnioZza3dGSkQ: noteText
// cqdSoLW7PdNO_cPCk9W7ri: topic
// dcUenzWQXhW5WbW43cUrft: isLocked 