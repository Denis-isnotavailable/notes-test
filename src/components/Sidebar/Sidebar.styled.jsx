import styled from '@emotion/styled';

export const SidebarStyled = styled.div`
    width: 150px;
    
    min-height: calc(100vh - 50px);
    margin-top: 3px;    
    background-color: #ebe9e4;

    overflow-y: scroll;

    @media screen and (min-width: 768px) {
        width: 250px;
    }
`;