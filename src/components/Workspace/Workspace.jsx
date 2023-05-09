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

  const topic = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const date = new Date().toString();
  // "MMM DD, YYYY at HH:mm"
  const note = "hgcyfctfxtfc";

  return (    
    <WorkspaceStyled>
      <p>{currentNote?.values.dcLYRcLmjaWRz7bZRdOmoe}</p>
      <h2>{currentNote?.values.ddIKrLySjof4kWW4r_W60J}</h2>
      <span>{currentNote?.values.cLmCovyqLbtPlcK8ocWQii}</span>
    </WorkspaceStyled>
  )
}

export default Workspace;