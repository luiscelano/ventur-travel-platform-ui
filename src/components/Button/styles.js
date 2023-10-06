import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Poppins Medium';
  margin: 1rem;
  border-radius: 15px;
  border-style: none;
  text-align: center;
  cursor: pointer;
  padding: 10px 10px;

  width: ${(props) => (props.size === 'small' ? '120px' : props.size === 'medium' ? '240px' : 'auto')};
  background-color: ${(props) => props.color === 'background1' ? '#A6D98F' : props.color === 'background2' ? '#F2EB80' : 'transparent'};

  &:hover {
    background-color: #f2f2f2;
    transition: 0.5s;
  }
`;

export default StyledButton;