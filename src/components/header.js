import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'

import Uni from '../images/uni.inline.svg'
// import Wordmark from '../images/wordmark.inline.svg'
import Wordmark from '../images/wordmark.inline.svg'
import LogoLight from '../images/materia-logo-light.png'
import LogoDark from '../images/materia-logo-dark.png'
import MenuIcon from '../images/menu.inline.svg'
import CloseIcon from '../images/x.inline.svg'

import { Sun, Moon } from 'react-feather'
import { useDarkMode } from '../contexts/Application'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  z-index: 3;
  @media (max-width: 960px) {
    padding: 1.5rem 2rem;
    height: ${({ open }) => (open ? '100vh' : '100%')};
  }
`

const StyledNav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transition: right 0.25s ease;
  z-index: 1;
  @media (max-width: 960px) {
    position: fixed;
    top: 0px;
    right: ${({ open }) => (open ? '0px' : '-100%')};
    align-items: flex-start;
    flex-wrap: wrap;
    -webkit-overflow-scrolling: touch;
    /*background-color: ${({ theme }) => theme.colors.grey1};*/
    background-color: rgba(29,29,29,0.8);
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 2rem;
    overflow: scroll;
    box-shadow: ${({ theme }) => theme.shadows.huge};
  }
`

const StyledNavTitleWrapper = styled.nav`
  display: flex;
  align-items: center;
`

const StyledNavTitle = styled(Link)`
  font-family: 'Cera Pro', sans-serif;
  color: ${({ theme }) => theme.colors.link};
  margin-left: 0.35rem;
  margin-top: 12px;
  z-index: 999;
  text-decoration: none;
  opacity: 0.4;
  vertical-align: bottom;
  font-weight: 500;

  :hover {
    opacity: 1;
  }
`

const StyledTradeLink = styled.a`
  padding: 0.25rem 1.5rem;
  background-color: transparent;
  box-shadow: 0px 0px 6px 0px #b0deff;
  text-decoration: none;
  // color: ${({ theme }) => theme.invertedTextColor};
  /*border-radius: 20px;*/
  border-radius: 5px;
  margin-left: 1.5rem;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  font-weight: 400;
  :hover {
    transform: scale(1);
    box-shadow: 0px 0px 10px 0px #b0deff;
    color:#b0deff;
  }
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.colors.link};
  :focus {
    outline: none;
  }
  display: none;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`

const StyledHomeLink = styled(Link)`
  max-height: 48px;
  display: flex;
  align-items: center;
`

const MenuToggle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey9};
  display: none;
  z-index: 9999;
  width: 24px;
  height: 24px;
  padding: 0px;

  :focus {
    outline: none;
  }
  @media (max-width: 960px) {
    display: initial;
    position: ${({ open }) => (open ? 'fixed' : 'relative')};
    right: ${({ open }) => (open ? '1.5rem' : 'initial')};
    top: ${({ open }) => (open ? '1.5rem' : 'initial')};
  }
`

const StyledUni = styled(Uni)`
  path {
    fill: ${({ theme }) => theme.colors.link};
  }
  margin: 0;
  width: 36px;
  height: 36px;
  margin-right: 0.35rem;
  margin-top: -4px;
  transform: rotate(0deg);
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const StyledWordmark = styled(Wordmark)`
  path {
    fill: ${({ theme }) => theme.colors.link};
  }
  margin: 0;
  margin-top: 6px;
  /* height: 23px; */
  width: 110px;
`

const StyledGil = styled.img`
  margin: 0;
  height: 40px !important;
  margin-right: 0.35rem;
  transform: rotate(0deg);
  transition: transform 0.2s linear;
`

const StyledMateria = styled.p`
  color: ${({ theme }) => theme.colors.link};
  font-size: 30px;
  margin: 0;
  width: 110px;
  font-family: 'Cera Pro', sans-serif;
`

const StyledCloseIcon = styled(CloseIcon)`
  path {
    stroke: ${({ theme }) => theme.colors.link};
  }
`

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.colors.link};
  }
`

const Header = props => {
  const matches = useMediaQuery('only screen and (max-width: 1024px)')
  const node = useRef()
  const button = useRef()
  const [isMenuOpen, updateIsMenuOpen] = useState(false)
  const [darkMode, toggleDarkMode] = useDarkMode()

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menulinks {
            name
            link
            isExternal
            enabled
            sublinks {
              name
              link
              enabled
            }
          }
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.maxHeight = '-webkit-fill-available'
    }
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, [isMenuOpen]) // Empty array ensures effect is only run on mount and unmount

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target) || button.current.contains(e.target)) {
        return
      }
      updateIsMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, updateIsMenuOpen, matches])

  return (
    <StyledHeader open={isMenuOpen}>
      <StyledNavTitleWrapper>
        <StyledHomeLink to="/" style={{ textDecoration: `none` }} >
          {/* <StyledUni /> */}
          {/* <StyledWordmark /> */}
          {darkMode ? <StyledGil src={LogoDark} /> : <StyledGil src={LogoLight} />}
          {/* <StyledMateria>Materia</StyledMateria> */}
        </StyledHomeLink>        
      </StyledNavTitleWrapper>
      <MenuToggle ref={button} open={isMenuOpen} onClick={() => updateIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />}
      </MenuToggle>
      <StyledNav ref={node} open={isMenuOpen}>
        {data.site.siteMetadata.menulinks
          .filter(item => {
            item.sublinks = item.sublinks.filter(sublink => { return sublink.enabled; });
            return item.enabled;
          })
          .map(item => { return <Menu key={item.name} data={item} /> })}
        <StyledButton type="button" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </StyledButton>
        {props.path !== undefined && <StyledTradeLink href="#">Coming Soon</StyledTradeLink>}
      </StyledNav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
