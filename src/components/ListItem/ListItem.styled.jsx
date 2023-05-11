import styled from '@emotion/styled';
import { AiTwotoneLock } from "react-icons/ai";

export const ListItemStyled = styled.li`
    position: relative;
    padding: 8px 4px 8px 18px;
    border-bottom: 1px solid #bdbaba;

    font-size: 12px;

    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {            
        background-color: #d7d5d5;
    }

    h1 {        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        font-size: 12px;
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media screen and (min-width: 768px) {
        padding-left: 24px;
        font-size: 14px;

        h1 {
            font-size: 16px;
        }
    }

`;

export const LockIconStyled = styled(AiTwotoneLock)`
    position: absolute;
    top: 9px;
    left: 2px;

    @media screen and (min-width: 768px) {
        top: 12px;
        left: 4px;

        width: 18px;
    }
`;