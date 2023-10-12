import styled from 'styled-components'

export const Contenido = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 2rem;
` //crear etiquetas html con estilos incrustados para no llamar a la clase

export const infometas = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
`

export const metas = styled.input `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.light };
`

export const metaind = styled.input `
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