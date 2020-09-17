import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
// import { ThemeManagerContext } from '../styles/themeManager'
import Discord from '../images/discord.inline.svg'
import Github from '../images/githubicon2.inline.svg'
import Reddit from '../images/reddit.inline.svg'
import Twitter from '../images/Twitter_Social_Icon_Circle_Color.inline.svg'

function Dropdown(props) {
  const items = props.links.map(node => {
    const title = node.name
    return (
      <StyledFooterLink key={node.name}>
        {node.link.split('.').slice(-1)[0] === 'pdf' ? (
          <a href={node.link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : node.link.split('/')[0] === '' ? (
          <Link to={node.link}>{title}</Link>
        ) : (
              <a href={node.link}>{title}</a>
            )}
      </StyledFooterLink>
    )
  })
  return <StyledFooterLinkSection>{items}</StyledFooterLinkSection>
}

const StyledFooter = styled.footer`
  margin-bottom: 7rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  padding: 0 2rem;

  @media (max-width: 960px) {
    margin-bottom: 2rem;
    flex-direction: column;
    padding: 0rem 1rem;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0em;
  }
`

const StyledFooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  @media (max-width: 960px) {
    padding-left: 0rem;
    margin-bottom: 0rem;
  }
`

const StyledFooterSectionNav = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: 5rem;
  @media (max-width: 960px) {
    padding-left: 0rem;
    margin-bottom: 0rem;
    display: none;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`

const StyledFooterLink = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
  }
  :hover {
    a {
      text-decoration: underline;
    }
  }
`

const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.colors.link};
  :focus {
    outline: none;
  }
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  a {
    height: 24px;
  }
  svg path {
    fill: ${({ theme, fill }) => fill && theme.colors.link};
    stroke: ${({ theme }) => theme.colors.link};
  }
`


const Commit = styled.div``

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          commit
          repository
          menulinks {
            name
            sublinks {
              name
              link
            }
          }
          title
        }
      }
    }
  `)

  // const themeContext = useContext(ThemeManagerContext)

  return (
    <StyledFooter>
      <StyledSection>
        <StyledFooterSection>
          <div>
          <StyledButton fill>
            <a href="https://discord.gg/jdYMZrv">
              <Discord  width={20} height={20} />
            </a>
          </StyledButton>
          
          <StyledButton fill>
            <a href="https://www.reddit.com/r/materiadex">
              <Reddit width={20} height={20}/>
            </a>
          </StyledButton>
          <StyledButton fill>
            <a href="https://twitter.com/dexmateria">
              <Twitter width={20} />
            </a>
          </StyledButton>

          <StyledButton fill>
            <a href="https://github.com/materia-dex">
              <Github width={20} />
            </a>
          </StyledButton> 
          </div>
          <p>Materia is an open source R&amp;D project for the Ethereum Community</p>

        </StyledFooterSection>
      </StyledSection>
      <StyledSection>
        {data.site.siteMetadata.menulinks.map(item => {
          return (
            <StyledFooterSectionNav key={item.name}>
              <h4 style={{ fontWeight: 400, marginBottom: '1rem' }}>{item.name}</h4>
              <Dropdown links={item.sublinks} />
            </StyledFooterSectionNav>
          )
        })}
      </StyledSection>
    </StyledFooter>
  )
}
export default Footer
