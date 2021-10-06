import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

const StyledMiniCards = styled.a`
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 0rem;
  padding-left: 1rem;
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 230px;
  height: ${({ small }) => (small ? '80px' : '180px')};
  max-width: 450px;
  margin: 1rem;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#171717",endColorstr="#282b30",GradientType=1);*/
  background: ${({ theme }) => theme.flyout};
  border: 1px solid #1e9de3;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: scale(1.03);
    color:#b0deff;
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
    height: ${({ small }) => !small && '200px'};
    /* height: 200px; */
  }
`
const StyledCardBG = styled(Img)`
  width: 80px;
  height: 250px;
  position: absolute !important;
  top: 0px;
  right: 0px;
  background-size: auto;
  background-position: center;
  z-index: -1;
`

const StyledMiniCardHeader = styled.p`
  line-height: 130%;
  margin-top: 0px;
  font-weight: 500;
  font-size: 1.25rem;
  font-family: 'Circular Std', sans-serif;
`

const StyledMiniCardDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 400;
  padding-bottom: 1.5rem;
`

const StyledArrow = styled.span`
  position: absolute;
  left: 1.5rem;
  bottom: 1rem;
`

const MiniCard = props => {
  return (
    <StyledMiniCards
      {...props}
      href={props.href}
    >
      {props.image && <StyledCardBG fluid={props.image} />}
      <StyledMiniCardHeader>{props.title}</StyledMiniCardHeader>
      <StyledMiniCardDesc>{props.desc}</StyledMiniCardDesc>
      {/* <StyledArrow>{'->'}</StyledArrow> */}
    </StyledMiniCards>
  )
}

export default MiniCard
