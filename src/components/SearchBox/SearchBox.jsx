

import React, { useState } from 'react';

import { IconStyled, SearchBoxStyled } from './SearchBox.styled';


function SearchBox() {
    const [search, setSearch] = useState('');

    console.log(search);
  return (
      <SearchBoxStyled>
          {!search && <IconStyled />}
          <input
              type="search"
              placeholder='Search'
              value={search}
              onChange={e => setSearch(e.currentTarget.value)}
          />          
    </SearchBoxStyled>
  )
}

export default SearchBox