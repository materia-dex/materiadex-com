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
  div.social { float:left; }
  p.credits { float: right; }
  div.clear { clear: both; }
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
  :focus { outline: none; }
  align-items: center;
  justify-content: center;
  :hover { cursor: pointer; }
  :hover > svg { transform: scale(1.5); }
  a { height: 24px; }
  svg > path, svg path.cls-1, svg circle { fill: #b0deff; }
  a > svg { transform: scale(1); transition: transform 0.25s ease; }
  a.discordIcon { padding-top: 4px; }  
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
      <div>
          <StyledButton fill>
            <a class="discordIcon" href="https://discord.gg/jdYMZrv" target="_blank" title="Join us on Discord">
              <Discord width={20}/>
            </a>
          </StyledButton>
          <StyledButton fill>
            <a href="https://www.reddit.com/r/materiadex" target="_blank" title="Follow us on Reddit">
              <Reddit width={20} height={20}/>
            </a>
          </StyledButton>
          <StyledButton fill>
            <a href="https://twitter.com/dexmateria" target="_blank" title="Follow us on Twitter">
              <Twitter width={20} />
            </a>
          </StyledButton>
          <StyledButton fill>
            <a href="https://github.com/materia-dex" target="_blank" title="Join us on Github">
              <Github width={20} />
            </a>
          </StyledButton> 
      </div>
      <div>
        <p>Materia is an open source R&amp;D project for the Ethereum Community</p>
      </div>
    </StyledFooter>
  )
}
export default Footer
