import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import DropdownArrow from './dropdownArrow.js'

import { useMediaQuery } from '@react-hook/media-query'

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(() => setState(state => !state), [])

  return [state, toggle]
}

const StyledMenu = styled.button`
  padding: 0.5rem 0rem;
  margin: 0;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
  list-style: none;
  /*padding-right: 2rem;*/
  background: none;
  @media (max-width: 960px) {
    font-size: 1.5rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    /* height: 100%; */
  }

  :hover {
    color: ${({ theme }) => theme.colors.link};
    @media (max-width: 960px) {
      color: ${({ theme }) => theme.textColor};
    }
  }
  :focus {
    outline: none;
    color: ${({ theme }) => theme.colors.link};
    @media (max-width: 960px) {
      color: ${({ theme }) => theme.textColor};
    }
  }
`

const MenuFlyout = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  left: -1rem;
  min-width: 220px;
  padding: 0.5rem 1rem;
  /*border-radius: 20px;*/
  border-radius: 5px;
  border-top: none;
  /*background: linear-gradient(90deg, rgba(23,23,23, 0.9), rgba(40,43,48, 0.9)); 
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#171717",endColorstr="#282b30",GradientType=1); */
  background-color:#001835;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  z-index: 4;
  p { padding: 0px; }
  :hover {
    transform: scale(1);
    color:#b0deff;
  }
  @media (max-width: 960px) {
    font-size: 1rem;
    position: initial;
    top: unset;
    left: unset;
    padding: 0;
    margin-top: 1rem;  
    background:none;
    filter:none; 
    transform: scale(1); 
  }
`

const StyledMenuTitle = styled.span`
  text-decoration: none;
  margin: 0px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.link};  
  padding: 0.25rem 1.5rem;
  text-shadow: 0px 0px 6px 0px #b0deff;
  background-color: transparent;
  display:inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  font-weight: 400;  
  @media (max-width: 960px) { margin-bottom: 1rem; user-select: none; }
  :hover { transform: scale(1); text-shadow: 0px 0px 10px 0px #b0deff; color: #b0deff; }
  :hover a { color: #b0deff; }
`

const StyledMenuItem = styled.span`
  text-decoration: none;
  margin: 0px;
  color: ${({ theme }) => theme.colors.link};
  :hover { color: #b0deff; }
  @media (max-width: 960px) { }
`

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  margin: 0.25rem 0;
  display: block;
  width: 100%;
  cursor: pointer;
  position: relative;
  
`
const StyledExternalLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  width: 100%;
  cursor: pointer;
`

const StyledTitle = styled.p`
  display: block;
  font-weight: ${({ active }) => active && 500};
  border-radius: 8px;
  text-decoration: none;
  margin: 0;
  padding: 0;
  padding: 0.125rem 0.5rem 0px 0.5rem;
  color: ${({ theme }) => theme.colors.grey9};
  @media (max-width: 960px) {
    padding: 0;
  }
`
const StyledMenuItemTitle = styled.span`
  display: block;
  font-weight: ${({ active }) => active && 500};
  border-radius: 8px;
  text-decoration: none;
  margin: 0;
  padding: 0.125rem 0.5rem 0px 0.5rem;
  transition: padding-left .3s linear;
  color: ${({ theme }) => theme.colors.link};
  :hover, :active { color: #b0deff; padding-left: 1rem; }
  @media (max-width: 960px) { padding: 0; }
`

const StyledDescription = styled.p`
  font-size: 0.825rem;
  margin: 0;
  padding: 0;
  padding: 0px 0.5rem 0.25rem 0.5rem;
  color: ${({ theme }) => theme.colors.grey6};
  @media (max-width: 960px) {
    padding: 0;
  }
`

const StyledDropdownArrow = styled(DropdownArrow)`
  opacity: 0.4;
`

export default function Menu(props) {
  const matches = useMediaQuery('only screen and (max-width: 960px)');
  const node = useRef();
  const [isOpen, updateIsOpen] = useState(matches);
  const childrenCount = (props.data.sublinks != null ? props.data.sublinks.length : 0);

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target)) {
        return
      }
      updateIsOpen(false)
    }

    const onFocus = focused => {
      if (focused) {
        updateIsOpen(true)
      } else {
        updateIsOpen(false)
      }
    }

    if (isOpen && !matches) {
      node.current.removeEventListener('focusin', () => onFocus(false))
      node.current.removeEventListener('focusout', () => onFocus(false))
      document.addEventListener('mouseover', handleClickOutside)
    } else {
      node.current.addEventListener('focusin', () => onFocus(true))
      node.current.addEventListener('focusout', () => onFocus(false))
      document.removeEventListener('mouseover', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mouseover', handleClickOutside)
      node.current.removeEventListener('focusin', () => onFocus(false))
      node.current.removeEventListener('focusout', () => onFocus(false))
    }
  }, [isOpen, updateIsOpen, matches])

  return (
    <StyledMenu ref={node} tabIndex={0}>
      <StyledMenuTitle
        onMouseOver={() => (childrenCount > 0 ? updateIsOpen(true) : null) }
        onFocus={() => {
          (childrenCount > 0 ? updateIsOpen(true) : null)
        }}
        isOpen={() => {
          (childrenCount > 0 ? isOpen : false)
        }}
      >
        { (childrenCount > 0 ? <span style={{ marginRight: '0.25rem' }}>{props.data.name} </span> : <a href={props.data.link} target={(props.data.isExternal ? '_blank' : '_self')}>{props.data.name}</a>) }
        {!matches && (childrenCount > 0 ? <StyledDropdownArrow /> : null)}
        {childrenCount > 0 && isOpen ? (
          <MenuFlyout>
            {props.data.sublinks.map((item, index) => {
              return (
                <StyledMenuItem tabindex={index} key={index}>
                  {item.link.split('.').slice(-1)[0] === 'pdf' ? (
                    <StyledExternalLink href={item.link} target="_blank" rel="noopener noreferrer">
                      <StyledMenuItemTitle>{item.name}</StyledMenuItemTitle>
                      {item.description && <StyledDescription>{item.description}</StyledDescription>}
                    </StyledExternalLink>
                  ) : item.link === '/about#brand-assets' ? null : item.link.split('/')[0] === '' ? (
                    <StyledLink to={item.link}>
                      <StyledMenuItemTitle>{item.name}</StyledMenuItemTitle>
                      {item.description && <StyledDescription>{item.description}</StyledDescription>}
                    </StyledLink>
                  ) : (
                    <StyledExternalLink href={item.link}>
                      <StyledMenuItemTitle>{item.name}</StyledMenuItemTitle>
                      {item.description && <StyledDescription>{item.description}</StyledDescription>}
                    </StyledExternalLink>
                  )}
                </StyledMenuItem>
              )
            })}
          </MenuFlyout>
        ) : (
          ''
        )}
      </StyledMenuTitle>
    </StyledMenu>
  )
}
