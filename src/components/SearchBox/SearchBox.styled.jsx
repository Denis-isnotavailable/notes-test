import styled from '@emotion/styled';
import { BiSearch } from "react-icons/bi";

export const SearchBoxStyled = styled.div`
    position: relative;
    

    input {
        height: 20px;
        padding: 2px 6px;
        border: none;
        border-radius: 5px;

        ::placeholder {
            text-align: center;
        }
    }

    @media screen and (min-width: 768px) {
        input {
            width: 300px;
        }        
    }
`;

export const IconStyled = styled(BiSearch)`
    position: absolute;
    top: 5px;
    left: 38px;

    width: 16px;
    height: 16px;
    color: grey;

    @media screen and (min-width: 768px) {
        left: 102px;
    }
`;