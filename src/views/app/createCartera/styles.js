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
   padding-top: 2rem;
` //crear etiquetas html con estilos incrustados para no llamar a la clase

export const paquete = styled.select `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.light };
`

export const cliente = styled.select `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.card.contrast };
`

export const pais = styled.select `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.light };
`

export const turistas = styled.input `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.card.contrast };
`

export const numpaquete = styled.input `
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
`


