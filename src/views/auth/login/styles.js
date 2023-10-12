import styled from 'styled-components';

/* export const Contenido = styled.div `
    background-color: red;
    color: white;
` //crear etiquetas html con estilos incrustados para no llamar a la clase */

export const Contenido = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: baseline;
   padding-top: 10rem;
` //crear etiquetas html con estilos incrustados para no llamar a la clase

export const usuario = styled.input `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.light };
`

export const psword = styled.input `
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

export const LogoContainer = styled.img`
  width: 280px;
  height: 81px;
  object-fit: cover;
  margin: 1rem;
`