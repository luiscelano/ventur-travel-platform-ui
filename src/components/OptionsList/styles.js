import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: auto;
  padding-top: 2rem;
  justify-content: space-between;
`

export const OptionsItem = styled.div`
  padding: 20px;
  border-bottom: ${(props) => (props.selected ? `2px solid ${props.theme.color.text.light}` : 'none')};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.background.dark};
  }
`
