import styled from 'styled-components';

/* export const Contenido = styled.div `
    background-color: red;
    color: white;
` //crear etiquetas html con estilos incrustados para no llamar a la clase */

export const header = styled.th `
    padding: 1rem;
    border: 1px solid black;
    border-collapse: collapse;
    background-color: ${(props) => props.theme.color.card.contrast };
`

export const data = styled.td `
    padding: 1rem;
    text-align: center;
    border: 1px solid black;
    border-collapse: collapse;
`

export const advertencia = styled.p `
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


