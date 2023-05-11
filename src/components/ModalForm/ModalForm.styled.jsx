import styled from '@emotion/styled';

export const Container = styled.div`
    width: 300px;
    min-height: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #ebe9e4;

    font-size: 14px;

    h1 {
        margin-bottom: 12px;
        text-align: center;
        font-size: 20px;
    }    
`;

export const ModalFormStyled = styled.form`
    font-size: 14px;

    label {
        display: block;        
        margin-bottom: 12px;
    }

    input {
        
    }

    textarea {
        width: 100%;
        border: none;
        border-radius: 5px;
        resize: none;
    }

    p {
        margin-bottom: 8px;        
    }
`;

export const InputStyled = styled.input`
    width: 100%;

    border: none;
    border-radius: 5px;
`;

export const ButtonStyled = styled.button`
    display: flex;
    margin: 0 auto;
    padding: 6px 32px;
    box-shadow: 0px 0px 8.96262px rgba(0, 0, 0, 0.12);
    border: none;
    border-radius: 5px;

    font-weight: 500;
    font-size: 18px;

    color: #FFFFFF;
    background-color: #000000;

    cursor: pointer;        

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #6b6b71;
        color: #000000;
    }   
`;