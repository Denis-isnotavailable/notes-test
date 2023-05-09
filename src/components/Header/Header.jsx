

import React from 'react'
import { HeaderStyled } from './Header.styled'
import ButtonsBox from '../ButtonsBox/ButtonsBox'
import SearchBox from '../SearchBox/SearchBox'

const Header = () => {
  return (
      <HeaderStyled color='blue'>
          <ButtonsBox />
          <SearchBox />
    </HeaderStyled>
  )
}

export default Header