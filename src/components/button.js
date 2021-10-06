import styled, { css } from 'styled-components'

const ButtonStyles = css`
  padding: 0.6rem 1rem;
  text-decoration: none;
  border-radius: 16px;
  margin-right: 0.75rem;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 900;
  font-size: inherit;
  cursor: pointer;
  background-color: #0066ff;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  @media (max-width: 960px) {
    margin-right: 0.5rem;
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 1rem;
  }
  :hover {
    transform: scale(1);
    box-shadow: 0px 0px 10px 0px #b0deff;
  }
  color: white;
`

export const Button = styled.a`
  ${ButtonStyles};
`

export default Button
