import styled from 'styled-components';

const StyledSelect = styled.select`
  font-family: 'Poppins Medium';
  margin: 1rem;
  border-radius: 15px;
  border-style: none;
  padding: 10px 10px; 

  width: ${(props) => (props.size === 'medium' ? '170px' : props.size === 'large' ? '320px' : 'auto')};
  background-color: ${(props) => props.color === 'background1' ? '#A6D98F' : props.color === 'background2' ? '#F2EB80' : 'transparent'};
`;

export default StyledSelect;
