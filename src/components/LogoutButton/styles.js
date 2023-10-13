import styled from 'styled-components'
import { CustomParagraph1 } from 'src/components/Typography/styles'

export const LogoutButtonContainer = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  ${CustomParagraph1} {
    color: ${(props) => props.theme.color.text.default};
  }
  &:hover ${CustomParagraph1} {
    color: ${(props) => props.theme.color.text.light};
  }
`
