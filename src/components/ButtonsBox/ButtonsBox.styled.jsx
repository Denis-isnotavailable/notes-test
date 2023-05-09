import styled from '@emotion/styled';
import { BiPlusMedical, BiTrash } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";

export const ButtonsBoxStyled = styled.ul`
    display: flex;

    li {
        :not(:last-child) {
            margin-right: 4px;
        }
    }
   
    button {
        display: flex;
        align-items: center;

        padding: 2px 12px;
        border: none;
        border-radius: 5px;

        cursor: pointer;

        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

        :hover, :focus {            
            background-color: #d7d5d5;
        }
    }
`;

export const AddIconStyled = styled(BiPlusMedical)`
    width: 16px;
    height: 16px;
`;

export const DeleteIconStyled = styled(BiTrash)`
    width: 16px;
    height: 16px;
`;

export const EditIconStyled = styled(FaRegEdit)`
    width: 16px;
    height: 16px;
`;

