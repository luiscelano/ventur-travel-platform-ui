import styled from 'styled-components';

export const Contenido = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 2rem;
`

export const meta = styled.p `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.light };
`

export const avance = styled.p `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.card.contrast };
    ::placeholder {
        color: black;
    }
`