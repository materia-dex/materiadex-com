import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import scrollTo from 'gatsby-plugin-smoothscroll'
import MiniCard from '../components/minicard'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CodeIcon from '@material-ui/icons/Code';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

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
  padding-top: 2rem;position:relative;
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
  background: linear-gradient(90deg, rgba(23,23,23, 0.5), rgba(40,43,48, 0.8)); 
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#171717",endColorstr="#282b30",GradientType=1);
  box-shadow: 0px 0px 6px 0px #b0deff;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  @media (max-width: 960px) {
    top: 0px;
    position: relative;
    padding: 0rem;
    width: 100%;
    margin-bottom: 1rem;
    display: none;
  }
  :hover { transform: scale(1); box-shadow: 0px 0px 10px 0px #b0deff; color:#b0deff; }
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


const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.link};
`

const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.colors.link};
`


const StyledRoadMapImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 150px;
  max-width: 250px;
  margin: 0 auto;
`


const StyledDivCenter = styled.div`
  width: 100%;
`


const About = props => {
  const data = useStaticQuery(graphql`
    {
      roadmapImage: file(relativePath: { eq: "roadmap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
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
            <Title style={{ width: '100%' }}>Midterm Roadmap</Title>

            <Timeline lineColor={'#ddd'}>
              <TimelineItem
                key="001"
                dateText="Q4 2020"
                dateInnerStyle={{ background: '#f33a33', color: '#fff' }}
                style={{ color: '#f33a33' }}
              >
                <StyledH3>Materia Beta 0.1</StyledH3>
                <StyledP>
                  - Front end Web Site <br />
                  - Manifesto &amp; Strategy <br />
                  - Medium Post + Presentation <br />
                  - Deploy Onchain: DFO + Dapp <br />
                </StyledP>
              </TimelineItem>
              <TimelineItem
                key="002"
                dateText="Q4 2020"
                dateInnerStyle={{ background: '#10a54d', color: '#fff' }}
                style={{ color: '#10a54d' }}
              >
                <StyledH3>Materia Beta 0.2</StyledH3>
                <StyledP>
                  - Liquidity Mining Mechanisms <br />
                  - ILO<br />
                  - Smart Contract for investors <br />
                </StyledP>
              </TimelineItem>
              <TimelineItem
                key="003"
                dateText="Q4 2020"
                dateInnerStyle={{ background: '#3977ed', color: '#fff' }}
                style={{ color: '#3977ed' }}
              >
                <StyledH3>Materia Beta 0.3</StyledH3>
                <StyledP>
                  - DefiPulse Listing <br />
                  - StartUp Tools <br />
                  - Inflation Rules <br />
                </StyledP>
              </TimelineItem>
              <TimelineItem
                key="004"
                dateText="Q4 2020"
                dateInnerStyle={{ background: '#fcb42c', color: '#fff' }}
                style={{ color: '#fcb42c' }}
              >
                <StyledH3>Materia Beta 0.4</StyledH3>
                <StyledP>
                  - Exping &amp; Quests <br />
                  - NFT Incentives <br />
                </StyledP>
              </TimelineItem>
              <TimelineItem
                key="005"
                dateText="Q4 2020"
                dateInnerStyle={{ background: '#b911b3', color: '#fff' }}
                style={{ color: '#b911b3' }}
              >
                <StyledH3>Materia Beta 0.5</StyledH3>
                <StyledP>
                  - Progressive Annual Percentage Yield <br />
                  - Native Migrator <br />
                </StyledP>
              </TimelineItem>
              <TimelineItem
                key="006"
                dateText="Q1 2021"
                dateInnerStyle={{ background: '#f33a33', color: '#fff' }}
                style={{ color: '#f33a33' }}
              >
                <StyledH3>Materia Beta 0.6</StyledH3>
                <StyledP>
                  - DEX-Evolution on DFO <br />
                  - Gamification contests <br />
                </StyledP>
              </TimelineItem>
              <TimelineItem
                key="007"
                dateText="Q2 2021"
                dateInnerStyle={{ background: '#10a54d', color: '#fff' }}
                style={{ color: '#10a54d' }}
              >
                <StyledH3>Materia Beta 0.7</StyledH3>
                <StyledP>
                  - NFT Marketplace <br />
                </StyledP>
              </TimelineItem>
            </Timeline>

            {/* <StyledDivCenter>
              <StyledRoadMapImage fadeIn={false} fluid={data.roadmapImage.childImageSharp.fluid} />
            </StyledDivCenter> */}


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
