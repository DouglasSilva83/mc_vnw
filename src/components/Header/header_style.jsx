import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: .5em 0;
        width: 380px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 2px;
        cursor: pointer;
    }

    p {
        font-size: 12px;
    }

    h3 {
        font-size: 12px;
        font-weight: 600;
    }
`;

export const ContainerPedido = styled.div`
    text-align: center;
    padding: .4em .8em;
    border-radius: 8px;
    background-color: rgba(255, 199, 44, 1);
`;