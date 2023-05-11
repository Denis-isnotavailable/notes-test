import React from 'react';

import { SidebarStyled } from './Sidebar.styled';
import ListItem from '../ListItem/ListItem';
import { useNoteData } from '../../appContext/context';

const Sidebar = () => {

  const {notes, searchValue} = useNoteData();

  return (
    <SidebarStyled>
      <ul>
        {notes.length !== 0 && [...notes]
          .filter(({ values }) => values?.cqdSoLW7PdNO_cPCk9W7ri.toLowerCase().includes(searchValue.toLowerCase()))
          .sort((first, second) => new Date(second.updated_at).getTime() - new Date(first.updated_at).getTime())
          .map(note =>
            <ListItem
                key={note.id}
                note={note}
            />
          )}                
      </ul>
    </SidebarStyled>
  )
}

export default Sidebar;

// cOpH80i8ncnioZza3dGSkQ: noteText
// cqdSoLW7PdNO_cPCk9W7ri: topic
// dcUenzWQXhW5WbW43cUrft: isLocked