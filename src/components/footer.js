import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
// import { ThemeManagerContext } from '../styles/themeManager'
import Discord from '../images/discord.inline.svg'
import Github from '../images/githubicon2.inline.svg'
import Reddit from '../images/reddit.inline.svg'
import Twitter from '../images/Twitter_Social_Icon_Circle_Color.inline.svg'
import DefiPulse from '../images/__defipulse.svg'

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
  a { height: 24px; }
  svg > path, svg path.cls-1, svg circle { fill: #b0deff; }
  a > svg { transform: scale(0.98); transition: transform 0.25s ease; }
  a.discordIcon { padding-top: 4px; } 
  :hover { cursor: pointer; transform: scale(1); }
  a:hover > svg { transform: scale(1.2); }

  &.defipulse { position: relative; } 
  &.defipulse > a { position: absolute; top: -17px; }
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
          <StyledButton fill className="defipulse">
            <a href="https://defipulse.com/" target="_blank" title="DeFi Pulse">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="20px" height="20px" viewBox="0 0 240 240" enable-background="new 0 0 240 240">
            <path id="svg_26" fill="#2E1A4E" d="M191.494,63.037c20.539,20.539,29.988,43.542,29.988,73.119
              c0,57.509-41.764,97.492-101.601,97.492H61.277l-34.095-34.095V5.116h59.701c32.041,0,59.016,11.502,77.363,30.809L191.494,63.037
              L191.494,63.037z M59.497,35.788h-0.411v6.846l29.166,28.892v-6.983L59.497,35.788z M93.181,63.584L65.385,35.788h-3.971
              L89.21,63.584H93.181z M102.903,63.584L75.107,35.788h-7.805l27.796,27.796H102.903z M87.293,35.788H77.024l27.796,27.796h10.27
              L87.293,35.788L87.293,35.788z M125.085,63.721L97.837,36.473c-2.875-0.411-5.614-0.548-8.626-0.685l27.796,27.796h2.875
              C121.662,63.584,123.441,63.584,125.085,63.721L125.085,63.721z M133.849,64.68l-26.564-26.563c-2.328-0.548-4.792-0.959-7.257-1.37
              l27.111,27.111C129.467,63.995,131.795,64.406,133.849,64.68L133.849,64.68z M141.79,66.597l-25.879-25.879
              c-1.917-0.685-3.971-1.369-6.025-1.917l26.426,26.427C138.23,65.638,140.01,66.049,141.79,66.597L141.79,66.597z M144.803,67.555
              c1.779,0.822,3.697,1.643,5.34,2.464l-25.194-25.194c-1.78-0.958-3.697-1.917-5.614-2.739L144.803,67.555L144.803,67.555z
              M59.086,96.721l4.929,4.929l-1.095,1.095l-3.834-3.834v71.75h29.166V73.443L59.086,44.825v6.709l27.659,27.522l-1.095,0.959
              L59.086,53.589v6.846L82.09,83.576l-0.959,1.095L59.086,62.489v6.983l18.485,18.623l-0.958,1.095L59.086,71.526v6.983l13.966,14.103
              l-0.958,1.096L59.086,80.563v7.12l9.448,9.448l-1.095,1.096l-8.353-8.489V96.721L59.086,96.721z M147.952,65.912
              c-4.655-7.257-10.817-13.419-18.212-18.211L147.952,65.912z M188.756,65.775L177.665,54.41c7.394,13.83,12.187,30.945,12.187,48.746
              c0,1.917,0,3.834-0.137,5.614l27.933,28.07v-0.685C217.647,107.538,208.337,85.903,188.756,65.775z M92.085,170.524
              c39.846-2.191,65.588-28.345,65.588-67.368c0-10.133-1.78-19.444-5.066-27.659c-8.353-5.751-17.938-8.079-32.726-8.079H92.085
              V170.524z M183.964,138.346l29.028,29.029c2.738-8.9,4.381-18.485,4.655-28.618l-28.069-28.07
              C188.893,120.546,186.977,129.72,183.964,138.346z M212.444,168.744l-29.028-29.029c-2.602,6.848-5.889,13.283-9.859,19.033
              l29.576,29.576C206.967,182.3,210.117,175.728,212.444,168.744L212.444,168.744z M191.084,203.113
              c4.244-4.108,7.941-8.764,11.229-13.693l-29.439-29.439c-3.424,4.793-7.258,9.312-11.639,13.282L191.084,203.113L191.084,203.113z
              M148.226,183.532l29.987,29.987c4.244-2.876,8.215-6.025,11.912-9.448l-29.85-29.851
              C156.578,177.645,152.607,180.793,148.226,183.532L148.226,183.532z M135.08,190.789l29.988,29.987
              c4.107-1.917,8.078-4.108,11.912-6.436l-29.987-29.987C143.297,186.818,139.326,188.872,135.08,190.789L135.08,190.789z
              M122.209,195.582l29.851,29.85c3.971-1.096,7.942-2.602,11.64-4.107l-29.988-29.987
              C130.015,192.98,126.181,194.486,122.209,195.582L122.209,195.582z M109.749,198.594l29.714,29.713
              c3.834-0.684,7.53-1.506,11.091-2.464l-29.714-29.714C117.28,197.088,113.583,197.91,109.749,198.594z M107.969,198.868
              c-3.286,0.685-6.709,1.095-10.133,1.369l29.439,29.302c3.561-0.137,6.984-0.547,10.406-0.958L107.969,198.868L107.969,198.868z
              M115.911,229.813h3.971c1.917,0,3.696,0,5.478-0.137l-29.303-29.303c-3.013,0.138-6.025,0.274-9.174,0.274h-0.137L115.911,229.813z
              M33.755,200.648l29.166,29.165h1.917l-29.029-29.165H33.755z M37.726,200.648l29.166,29.165h2.465L40.19,200.648H37.726z
              M42.107,200.648l29.166,29.165h3.149l-29.166-29.165H42.107z M47.174,200.648l29.165,29.165h3.971l-29.166-29.165H47.174z
              M53.062,200.648l29.166,29.165h4.792l-29.166-29.165H53.062z M59.771,200.648l29.166,29.165h5.751l-29.166-29.165H59.771z
              M67.576,200.648l29.166,29.165h6.983l-29.165-29.165H67.576z M76.476,200.648l29.166,29.165h8.353l-29.303-29.165H76.476z"/>
            </svg>
            </a>
          </StyledButton>
      </div>
        {/* {data.site.siteMetadata.menulinks.map(item => {
          return (
            <StyledFooterSectionNav key={item.name}>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>{item.name}</h4>
              <Dropdown links={item.sublinks} />
            </StyledFooterSectionNav>
          )
        })} */}
      <div>
        <p>Materia is an open source R&amp;D project for the Ethereum Community</p>
      </div>
    </StyledFooter>
  )
}
export default Footer
