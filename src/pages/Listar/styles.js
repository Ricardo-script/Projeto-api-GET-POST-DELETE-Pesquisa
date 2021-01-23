import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #6E6E6E;
    border-radius: 4px;
    width: 80%;@media (max-width: 480px){width: 99vw; margin: 10% auto;}
    margin: 2% auto;
    padding: 2%;
    box-shadow: 5px 5px 2px -1px #4E4E4E;
`;

export const Scroll = styled.div`
   @media(max-width:480px){
        overflow: scroll;
    }
`;