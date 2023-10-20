import styled from 'styled-components'

export const Contenido = styled.div`
  padding: 0rem;
  margin: 0rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;  
`

export const info = styled.p `
border-radius: 30px;
border: none;
margin: 0.5rem;
margin-top: 1.5rem;
padding: 1rem;
padding-right: 3rem;
background-color: ${(props) => props.theme.color.light };
`
