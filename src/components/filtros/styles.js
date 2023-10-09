import styled from 'styled-components'

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

//el tipo de letra al boton se le agrega en el index.jsx