import styled from 'styled-components'

export const TableHead = styled.th`
  padding: 1rem;
  border: 1px solid black;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.color.card.contrast};
`

export const TableCell = styled.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
`
