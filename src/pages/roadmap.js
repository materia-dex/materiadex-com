import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import scrollTo from 'gatsby-plugin-smoothscroll'
import MiniCard from '../components/minicard'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CodeIcon from '@material-ui/icons/Code';

const StyledQuote = styled.p`
  border: solid;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.invertedTextColor};
  border-color: ${({ theme }) => theme.colors.link};
  background-color: ${({ theme }) => theme.colors.link};;
`

const StyledChartContainer = styled.div`
  display: flex;
  canvas {
    height: 100% !important;
  }
`

const StyledTableContainer = styled.div`
  th:first-child, td:first-child {
    padding: 16px;
  }
  div.MuiPaper-root {
    max-width: fit-content;
  }
`

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  border-top: 1px solid ${({ theme }) => theme.colors.grey2};

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
  color: ${({ theme }) => theme.colors.link};
  @media (max-width: 960px) {
    top: 0px;
    position: relative;
    padding: 0rem;
    width: 100%;
    margin-bottom: 1rem;
    display: none;
  }
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
  /* font-size: 3rem; */
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
  cursor: pointer;
  font-size: 1.25rem;

  :hover {
    text-decoration: underline;
  }
`

const StyledImgSectionLeft = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 0rem 0rem;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2.5rem;
    p {
      max-width: 300px;
    }
    h1 {
      max-width: 450px;
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 2.5rem;
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 300px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const StyleSectionRight = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 1rem;
  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
    p, h1, h2 {
      max-width: unset !important;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 500px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const StyledImgSectionRight = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 0rem 0rem;
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2.5rem;
    p {
      max-width: 300px;
    }
    h1 {
      max-width: 450px;
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 2.5rem;
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 300px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const StyleSectionLeft = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 1rem 0rem;
  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
    p, h1, h2 {
      max-width: unset !important;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 500px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
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

const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 450px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
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
      <SEO title="Roadmap" path={props.location.pathname} />
      <StyledAbout>
        <StyledSidebar>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Roadmap')
              window.history.pushState({}, '', '#Roadmap')
            }}>
            Roadmap
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
          <StyledSectionFlex id="Roadmap">
            <Title style={{ width: '100%' }}>Roadmap</Title>
          </StyledSectionFlex>

          <StyledSectionFlex id="Community" style={{ "paddingTop": '2.5rem' }}>
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