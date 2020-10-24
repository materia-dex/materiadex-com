/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import MiniHeader from '../components/miniheader'

import Footer from '../components/footer'
import Mdx from '../components/mdx'

import { StyledThemeProvider } from '../styles/themeManager'

import ReactGA from 'react-ga';

import '../styles/layout.css'
import '../styles/prism-github.css'
import '../styles/fonts.css'

const initReactGA = () => {
  ReactGA.initialize('UA-178238225-1');
  ReactGA.pageview('/');
  ReactGA.pageview('/about');
  ReactGA.pageview('/soon');
}

initReactGA();

const Layout = ({ path, children, nofooter, isDocs }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <StyledThemeProvider>
      <div className='sky'>
        <div className='stars'></div>
      </div>
      {isDocs ? (
        <MiniHeader path={path} siteTitle={data.site.siteMetadata.title} />
      ) : (
          <Header path={path} siteTitle={data.site.siteMetadata.title} />
        )}
      <Mdx>{children}</Mdx>
      {nofooter ? null : <Footer />}
    </StyledThemeProvider>
  )
}

export default Layout
