import styled from 'styled-components'

export const Contenido = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const orden = styled.section `
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-bottom: 2rem;
`

export const mes = styled.select `
    background-color: ${(props) => props.theme.color.light };
    border: none;
    margin: 1rem;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: center;
    border-radius: 30px;
    transition: .5s;
`

export const anio = styled.select `
    background-color: ${(props) => props.theme.color.light };
    border: none;
    margin: 1rem;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: center;
    border-radius: 30px;
    transition: .5s;
`

export const vendedor = styled.select `
    background-color: ${(props) => props.theme.color.light };
    border: none;
    margin: 1rem;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: center;
    border-radius: 30px;
    transition: .5s;
`

export const cliente = styled.select `
    background-color: ${(props) => props.theme.color.light };
    border: none;
    margin: 1rem;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: center;
    border-radius: 30px;
    transition: .5s;
`

export const ButtonDiv = styled.button `
    background-color: ${(props) => props.theme.color.light };
    border: none;
    margin: 1rem;
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: center;
    border-radius: 30px;
    transition: .5s;

    :hover{
        background-color: ${(props) => props.theme.color.card.contrast};
        transition: .5s;
    }
`
export const advertencia = styled.p `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.light };
    ::placeholder {
        color: black;
    }
`

//el tipo de letra al boton se le agrega en el index.jsx