import React from 'react';
import { MainAreaBoxStyled } from './MainAreaBox.styled';
import Sidebar from '../Sidebar/Sidebar';
import Workspace from '../Workspace/Workspace';

const MainAreaBox = () => {
  return (
        <MainAreaBoxStyled>
          <Sidebar />
          <Workspace />
        </MainAreaBoxStyled>
  )
};

export default MainAreaBox;