import styled, { css } from 'styled-components'

const ButtonStyles = css`
  padding: 0.25rem 1.5rem;
  text-decoration: none;
  border-radius: 20px;
  margin-right: 0.75rem;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 1.125rem;
  cursor: pointer;
  background-color: transparent;
  box-shadow: 0px 0px 6px 0px #b0deff;
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
    color:#b0deff;
  }
  /*background-color: ${({ outlined, theme }) => (outlined ? 'none' : theme.colors.link)};
  background-color: #377e9a;*/
  color: ${({ outlined, theme }) => (outlined ? theme.colors.link : theme.invertedTextColor)};
  border: ${({ outlined, theme }) => (outlined ? `1px solid ${theme.colors.link}` : 'initial')};
`

export const Button = styled.a`
  ${ButtonStyles};
`

export default Button
