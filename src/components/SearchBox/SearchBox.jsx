import React, { useState } from 'react';

import { IconStyled, SearchBoxStyled } from './SearchBox.styled';
import { useNoteData } from '../../appContext/context';


function SearchBox() {
  const [search, setSearch] = useState('');
  const { setSearchValue } = useNoteData();

  const handleSearchChange = (value) => {
    setSearch(value);
    setSearchValue(value);
  }
  
  return (
      <SearchBoxStyled>
          {!search && <IconStyled />}
          <input
              type="search"
              placeholder='Search'
              value={search}
              onChange={e => handleSearchChange(e.currentTarget.value)}
          />          
    </SearchBoxStyled>
  )
}

export default SearchBox