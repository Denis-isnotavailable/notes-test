import React from 'react';
import { AddIconStyled, DeleteIconStyled, EditIconStyled, ButtonsBoxStyled } from './ButtonsBox.styled';

function ButtonsBox() {
  return (
    
      <ButtonsBoxStyled>
        <li><button type='button'><AddIconStyled /></button></li>
        <li><button type='button'><DeleteIconStyled /></button></li>
        <li><button type='button'><EditIconStyled /></button></li>
          
      </ButtonsBoxStyled>
  )
}

export default ButtonsBox