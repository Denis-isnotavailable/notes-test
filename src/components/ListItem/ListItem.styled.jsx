import styled from '@emotion/styled';

export const ListItemStyled = styled.li`
    padding: 8px 4px;
    border-bottom: 1px solid #bdbaba;

    font-size: 12px;

    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {            
        background-color: #d7d5d5;
    }

    h1 {
        /* height: 16px; */
        /* width: 94px; */
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        font-size: 12px;
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        /* font-size: 12px; */
    }

`;