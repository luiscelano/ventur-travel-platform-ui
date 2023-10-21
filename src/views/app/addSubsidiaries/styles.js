import styled from 'styled-components';

export const Contenido = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 2rem;
` 

export const nombreContacto = styled.input `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.card.contrast };
`

export const telefono = styled.input `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.light };
`
export const Formulario = styled.form `
    display: flex;
    flex-direction: column;
    margin: 2rem;
`


