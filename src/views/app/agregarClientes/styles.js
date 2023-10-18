import styled from "styled-components";

export const Contenido = styled.div`

text-align: center;
margin-top: 20px; 
margin-bottom: 20px;
`

export const Contenido1 = styled.div`

display: flex;
flex-direction: row; 

`

export const Contenido2 = styled.div`

margin-left: 100px;

`

export const Input2 = styled.input`
border: 0.5px;
margin-top: 5px;
margin-bottom: 5px;
border-color:#A6D98F;
border-radius: 15px;
padding: 5px 5px; 
width: 275px;
background-color:#F2EB80;

`

export const Cliente = styled.select `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    padding-right: 3rem;
    width: 275px;
    background-color: ${(props) => props.theme.color.card.contrast };
`

export const Espacio = styled.div`
margin-top: 50px;
`

export const Boton = styled.button`

border: 1px;
border-radius: 15px;
background-color: #A6D98F;
padding: 5px 15px; 
text-align: center;
cursor: pointer; 
`

export const Form = styled.form`
border: 1px;
border-radius: 15px;
padding: 5px 5px; 
width: 300px;
height: 0.5px;
margin: 10px auto;

`

export const Input = styled.input`
border: 0.5px;
margin-top: 5px;
margin-bottom: 5px;
border-color:#A6D98F;
border-radius: 15px;
background-color: #A6D98F;
padding: 5px 5px; 
width: 275px;
`
