import React, { useEffect, useState } from 'react';
import { WorkspaceStyled } from '../Workspace/Workspace.styled';
import { useNoteData } from '../../appContext/context';

const Workspace = () => {
  const { notes, currentNoteId } = useNoteData();
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => { 
    const note = notes.find(({ id }) => id === currentNoteId);
    setCurrentNote(note);
  }, [currentNoteId, notes]);

  const dmy = new Date(currentNote?.updated_at).toLocaleString("en-US", { dateStyle: "medium" });
  const hm = new Date(currentNote?.updated_at).toLocaleString("en-US", { timeStyle: "short" });  
  const date = `${dmy} at ${hm}`;

  return (    
    <WorkspaceStyled>
      {currentNote && <p>{date}</p>}
      <h2>{currentNote?.values.cqdSoLW7PdNO_cPCk9W7ri}</h2>
      <span>{currentNote?.values.cOpH80i8ncnioZza3dGSkQ}</span>
    </WorkspaceStyled>
  )
}

export default Workspace;

// cOpH80i8ncnioZza3dGSkQ: noteText
// cqdSoLW7PdNO_cPCk9W7ri: topic
// dcUenzWQXhW5WbW43cUrft: isLocked