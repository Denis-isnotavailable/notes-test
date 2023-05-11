import React from 'react';
import { AddIconStyled, DeleteIconStyled, EditIconStyled, ButtonsBoxStyled } from './ButtonsBox.styled';
import { useNoteData } from '../../appContext/context';

function ButtonsBox() {
  const { notes, setModalType, currentNoteId } = useNoteData();

  const currentNote = notes.find(({ id }) => id === currentNoteId);
  const isLocked = currentNote?.values.dcUenzWQXhW5WbW43cUrft === "Yes";

  return (
    
      <ButtonsBoxStyled>
      <li><button
        type='button'
        onClick={() => setModalType("addNote")}
      ><AddIconStyled /></button></li>
      <li><button
        type='button'
        onClick={() => setModalType("deleteNote")}
        disabled={currentNoteId === null || isLocked}
      ><DeleteIconStyled /></button></li>
      <li><button
        type='button'
        onClick={() => setModalType("editNote")}
        disabled={currentNoteId === null || isLocked}
      ><EditIconStyled /></button></li>
          
      </ButtonsBoxStyled>
  )
}

export default ButtonsBox;

// cOpH80i8ncnioZza3dGSkQ: noteText
// cqdSoLW7PdNO_cPCk9W7ri: topic
// dcUenzWQXhW5WbW43cUrft: isLocked