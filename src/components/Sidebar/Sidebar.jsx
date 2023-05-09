import React from 'react';

import { SidebarStyled } from './Sidebar.styled';
import ListItem from '../ListItem/ListItem';
import { useNoteData } from '../../appContext/context';

const Sidebar = () => {

    const {notes} = useNoteData();
    // console.log("notes", notes);
    // console.log(currentNoteId);

  return (
        <SidebarStyled>
            <ul>
              {notes.length !== 0 && notes.map(note =>
                  <ListItem
                      key={note.id}
                      note={note}
                  />)}                
            </ul>
        </SidebarStyled>
  )
}

export default Sidebar;