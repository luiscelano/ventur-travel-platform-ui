import styled from 'styled-components';

export const topPaquete = styled.p `
    border-radius: 30px;
    border: none;
    margin: 0.5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    padding-right: 3rem;
    background-color: ${(props) => props.theme.color.card.contrast };
`