import styled from 'styled-components';

export const Contenido = styled.div `
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 2rem;
` //crear etiquetas html con estilos incrustados para no llamar a la clase

export const contenedor = styled.section `
   width: 80%;
   height: 70%;
   border: 3px solid #306C74;
   border-radius: 30px;
   padding: 20px;
   text-align: center;
`

export const topInformacion = styled.section `
   display: flex;
   flex-direction: row;
`