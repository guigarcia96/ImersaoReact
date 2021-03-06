import styled from 'styled-components';

const AllButton = styled.a`
color: var(--white);
border: 1px solid var(--white);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
background-color: var(--black);
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;
margin-right: 10px;
margin-bottom: 20px;
&:hover,
&:focus {
  opacity: .5;
}
`;

export default AllButton;
