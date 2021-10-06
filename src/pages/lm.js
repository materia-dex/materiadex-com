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
  h1,
  h2 {
    max-width: 650px;
  }
  p {
    max-width: 650px;
  }
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
  position:relative;
  padding-bottom: 1rem;
  
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
  color: ${({ theme }) => theme.colors.pink1} !important;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  transition: padding-left .3s linear;  
  position: relative;
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
const ParagraphContent = styled.p`
  font-size: 1rem;
  font-family: 'Circular Std';
  > a { color: #81cdf3; }
  > a:hover { text-decordation: underline !important; }
`
const ParagraphContentEvidence = styled.strong`
  color:#ffffff;
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
      <SEO title="Liquidity Mining" path={props.location.pathname} />
      <StyledAbout>
        <StyledSidebar>
          <StyledHeadingLink onClick={() => {
              scrollTo('#LiquidityMining')
              window.history.pushState({}, '', '#LiquidityMining')
            }}>
            Liquidity Mining
          </StyledHeadingLink>
        </StyledSidebar>
        <span>
          <StyledSectionFlex id="Soon">
            <Title>Liquidity Mining</Title>
            <StyleSectionFull style={{margin: '1rem 0rem 0rem 0rem' }}>
              <ParagraphContent>
              Our liquidity mining program has come to an end. <br />
              After two seaons of incentivized liquidity we have succesfully seeded Materia Dex with critical liquidity.<br />
              As a result of LM Season 1 + 2 we now have nearly 4 million Gil/iGil in liquidity with an additional 250,000$ WUSD <br />
              This will provide Materia with a solid footing as we go into the Batch Swap era.  We expect users to route many Batch Swaps through Uniswap and Sushiswap to start.  Over time, as users come to Maeria to utilize Batch Swap, we expect liquidity to grow organically on Materia.<br />
              Anyone can provide liquidity on Materia and we encourage you to do so!  Please check out our Exping page for more information on future liquidity incentivization.  
              </ParagraphContent>
            </StyleSectionFull>
          </StyledSectionFlex>
        </span>
      </StyledAbout>
    </Layout>
  )
}

export default About
