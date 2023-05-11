import styled from '@emotion/styled';

export const WorkspaceStyled = styled.div`
    width: calc(100% - 150px);
    min-height: calc(100vh - 50px);
    margin-top: 3px;
    padding: 6px 6px;
    border: 1px solid #bdbaba;

    font-size: 12px;
    background-color: #ebe9e4;

    p {       
        margin-bottom: 8px;
        text-align: center;

        color: #a8a7a4;
    }

    h2 {        
        margin-bottom: 8px;
        font-size: 12px;
    }    

    @media screen and (min-width: 768px) {
        width: calc(100% - 250px);
        margin-top: 3px;
        padding: 16px 16px;

        font-size: 16px;

        p {       
            margin-bottom: 14px;      
        }

    h2 {        
        margin-bottom: 14px;
        font-size: 16px;
    }
    }
`;