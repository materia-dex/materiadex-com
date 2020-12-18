import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import scrollTo from 'gatsby-plugin-smoothscroll'
import MiniCard from '../components/minicard'

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;
  position:relative;
  &:after {
    content: "";
    width: 100%;
    display: block;
    left: 0;
    position: absolute;
    height: 8px;
    bottom: 0px;
    z-index: -1;
    background: radial-gradient(ellipse at bottom,#0d95ff 0,rgba(13,149,255,0) 60%);
    @media (max-width: 375px) {
      height: 50px;
    }
  }
  &:before {    
    content: "";
    width: 100%;
    display: block;
    left: 0;
    position: absolute;
    height: 2px;
    bottom: 0px;
    background: linear-gradient(90deg,rgba(129,205,243,0) 0,#81cdf3 25%,#81cdf3 75%,rgba(129,205,243,0));
}
  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
  }
`
const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: sticky;
  top: 6rem;
  align-self: flex-start;
  padding-right: 1rem;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  margin-right: 30px;
  padding: 0.5rem 1rem 2rem 1rem;
  @media (max-width: 960px) {
    top: 0px;
    position: relative;
    padding: 0rem;
    width: 100%;
    margin-bottom: 1rem;
    display: none;
  }
  :hover { transform: scale(1); color:#b0deff; }
`
const StyledSectionFlex = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
  }
  h1, h2 { max-width: 650px; }
`
const Title = styled.h1`
  font-size: 2em;
  width: auto;
  line-height: 1;
  display: inline-block;
  text-transform: none;
  overflow: hidden;
  z-index: 0;
  font-weight: 300;
  text-shadow: 2px 2px 4px #000;
  position:relative;
  padding-bottom: 1rem;
  &:after {
    content: "";
    width: 100%;
    display: block;
    left: 0;
    position: absolute;
    height: 4px;
    bottom: 0px;
    z-index: -1;
    background: radial-gradient(ellipse at bottom,#0d95ff 0,rgba(13,149,255,0) 60%);
    @media (max-width: 375px) { height: 50px; }
  }
  &:before {    
      content: "";
      width: 100%;
      display: block;
      left: 0;
      position: absolute;
      height: 2px;
      bottom: 0px;
      background: linear-gradient(90deg,rgba(129,205,243,0) 0,#81cdf3 25%,#81cdf3 75%,rgba(129,205,243,0));
  }
  
  margin-bottom: 1rem;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.link};
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 3rem;
  }
`
const StyledHeadingLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.pink1};  
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  transition: padding-left .3s linear;  
  position: relative;
  text-shadow: 2px 2px 4px #000;
  :hover { cursor: pointer; color: #b0deff; padding-left: 1rem; }
`
const StyleSectionFull = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 2.5rem 0rem;
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: unset;
  }
  h1 {
    line-height: 1.3;
    max-width: unset;
  }
  h2 {
    line-height: 1.3;
    margin-bottom: 1rem;
    max-width: unset;
  }
`
const About = props => {
  const data = useStaticQuery(graphql`
    {
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discord: file(relativePath: { eq: "discord.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reddit: file(relativePath: { eq: "reddit.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
        <StyledSidebar>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#About')
              window.history.pushState({}, '', '#About')
            }}>
            About
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Contact')
              window.history.pushState({}, '', '#Contact')
            }}>
            Contact
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Community')
              window.history.pushState({}, '', '#Community')
            }}>
            Community
          </StyledHeadingLink>
        </StyledSidebar>
        <span>
          <StyledSectionFlex id="About">
            <Title style={{ width: '100%' }}>About</Title>
            <StyleSectionFull style={{ margin: '1rem 0rem 0rem 0rem' }}>
              <p>
                <b>Materia</b> is the world&#39;s first completely decentralized exchange controlled by On-Chain, Enterprise-Free Organization based on <b>DFOHub</b> protocol.<br />
                We are committed to open source software and building on the decentralized web.<br />
              </p>
              <p>
                You can read about Enterprise-Free Organization and DFOHub here: <a href="https://www.dfohub.com/">dfohub.com</a>
              </p>
            </StyleSectionFull>
          </StyledSectionFlex>

          <StyledSectionFlex id="Contact">
            <Title style={{ width: '100%', 'maxWidth': 'unset' }}>Contact</Title>
            <StyleSectionFull style={{ margin: '1rem 0rem 0rem 0rem' }}>
              <p>
                To get in touch, please email <a href="mailto:contact@materiadex.com">materiadex@gmail.com</a>
              </p>
            </StyleSectionFull>
          </StyledSectionFlex>

          <StyledSectionFlex id="Community">
            <Title style={{ width: '100%' }}>Community</Title>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <MiniCard
                href="https://discord.gg/jdYMZrv"
                title={'Discord'}
                small
                image={data.discord.childImageSharp.fluid}
                color={'white'}
                backgroundColor={'#7289da'}
              />
              <MiniCard
                href="https://twitter.com/dexmateria"
                title={'Twitter'}
                small
                image={data.twitter.childImageSharp.fluid}
                backgroundColor={'#B0D8F0'}
                color={'black'}
              />
              <MiniCard
                href="https://www.reddit.com/r/materiadex"
                title={'Reddit'}
                small
                image={data.reddit.childImageSharp.fluid}
                backgroundColor={'white'}
                color={'black'}
              />
            </div>
          </StyledSectionFlex>
        </span>
      </StyledAbout>
    </Layout>
  )
}

export default About
