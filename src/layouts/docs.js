import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '.'
import SEO from '../components/seo'
import TableofContents from '../components/toc'
import Github from '../images/githubicon.inline.svg'
import { GlobalStyle } from '../styles/theme'
import '../styles/prism-github.css'
import { useMediaQuery } from '@react-hook/media-query'

const StyledDocs = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 180px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 80px;
  }
`

const StyledMDX = styled.div`
  min-width: 550px;
  max-width: 768px;
  padding: 0;
  margin-bottom: 3rem;
  margin-top: 4rem;
  a {
    color: ${({ theme }) => theme.colors.link};
  }

  code {
    background-color: ${({ theme }) => theme.colors.grey2};
    color: ${({ theme }) => theme.colors.grey8};
  }

  @media (max-width: 960px) {
    min-width: 100%;
    max-width: 100%;
  }
`

const StyledDocsNavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  margin-top: 2rem;
  padding-top: 3rem;
`
const StyledDocsNav = styled.li`
  @media (max-width: 960px) {
    width: 100%;
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
`

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  small {
    font-size: 0.75rem;
    opacity: 0.6;
  }
`

const StyledPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  /* align-items: center; */

  h1 {
    font-size: 2.5rem !important;
    margin-top: 0px !important;
  }

  a {
    color: ${({ theme }) => theme.colors.grey6};
    display: inherit;
    font-size: 0.825rem;
  }
`

const StyledGithubIcon = styled(Github)`
  width: 16px;
  margin-right: 6px;
  path {
    fill: ${({ theme }) => theme.colors.grey9};
  }

  :before {
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;

    content: ' ';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.grey9};
    opacity: 0.2;
  }
`

const StyledGithubLink = styled.a`
  padding-bottom: 1.5rem;
`
