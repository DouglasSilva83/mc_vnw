import styled from "styled-components";

export const ContainerMequi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 199, 44, 1);
    padding: 2em;

    div {
        display: flex;
        align-items: center;
    }
`;

export const ContainerPrincipal = styled.div`
    justify-content: space-evenly;
    width: 85%;
    text-transform: uppercase;

    h1 {
        color: white;
        font-size: 46px;
        width: 450px;
    }

    span {
        color: red;
    }
`;

export const ContainerImagens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    margin-top: 20px;
    padding: 1em;
    img {
        width: 90px;
        height: 90px;
    }
`;

export const Section02 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2em;
    background-color: #feb706;

    h3 {
    font-size: 32px;
    color: white;
    }
`;

export const ContainerCards = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;


    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 12px;
        width: 350px;
        height: 320px;
        margin: 0 25px;
        background-color: white;
    }
    
    div img {
        width: 100%;
        height: 24vw;
        margin-bottom: 15px;
    }
    
    div h2 {
        font-size: 18px;
        margin: 30px 0;
    }

    div a {
       
        color: black;
        border-radius: 6px;
        text-decoration: none;
        background-color: #feb706;
        display: inline-block;
        margin-bottom: 10px;
        padding: .3em .9em;
    }
`; 