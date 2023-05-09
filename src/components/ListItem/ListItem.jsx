import React from 'react'
import { ListItemStyled } from './ListItem.styled';
import { useNoteData } from '../../appContext/context';

const ListItem = ({note}) => { 
  const {setCurrentNoteId} = useNoteData();
  // console.log("notes", note);

  return (

    
    <ListItemStyled onClick={() => setCurrentNoteId(note.id)} >

      <h1>{ note.values.ddIKrLySjof4kWW4r_W60J }</h1>      
      <p> {note.values.dcLYRcLmjaWRz7bZRdOmoe}  {note.values.cLmCovyqLbtPlcK8ocWQii}</p>
    
    </ListItemStyled>
  )
}

export default ListItem;