import styled from 'styled-components'

export const CustomTitle = styled.h1`
  font-family: 'Poppins Medium';
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.extraLarge};
  font-weight: 100;
  color: ${(props) => props.theme.color.text[props.color] || `#000000`};
  margin: 0;
`

export const CustomSubtitle = styled.h1`
  fonf-family: 'Poppins Medium';
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.large};
  color: ${(props) => props.theme.color.text[props.color] || `#000000`};
  margin: 0;
`

export const CustomParagraph1 = styled.p`
  font-family: 'Poppins Medium';
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.medium};
  font-weight: 100;
  color: ${(props) => props.theme.color.text[props.color] || `#000000`};
  margin: 0;
`

export const CustomParagraph2 = styled.p`
  font-family: 'Lora Regular';
  font-size: ${(props) => props.theme.fontSize[props.size] || props.theme.fontSize.small};
  color: ${(props) => props.theme.color.text[props.color] || `#000000`};
  margin: 0;
`
