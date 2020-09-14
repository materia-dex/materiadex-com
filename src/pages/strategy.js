import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import scrollTo from 'gatsby-plugin-smoothscroll'

import MiniCard from '../components/minicard'
// import Discord from '../images/discord.inline.svg'

import GilDistribution from '../images/gil_distribution.png'

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
  padding: 0 0 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 960px;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    /* max-width: 450px; */
    /* flex-direction: column; */
  }
  h1,
  h2 {
    /* margin-bottom: 0.5rem; */
    max-width: 650px;
  }
  p {
    /* margin-bottom: 0.5rem; */
    max-width: 650px;
  }
`

const Title = styled.h1`
  /* font-size: 3rem; */
  margin-bottom: 1rem;
  font-size: 72px;

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

  const StyledImage = styled.img`
    margin: 0;
    width: fit-content;
  `

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="Coming Soon" path={props.location.pathname} />
      <StyledAbout>
        <StyledSidebar>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Strategy')
              window.history.pushState({}, '', '#Strategy')
            }}
          >
            Strategy
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Distribution')
              window.history.pushState({}, '', '#Distribution')
            }}
          >
            Distribution
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Manifesto')
              window.history.pushState({}, '', '#Manifesto')
            }}
          >
            Manifesto
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Voting')
              window.history.pushState({}, '', '#Voting')
            }}
          >
            Voting
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#community')
              window.history.pushState({}, '', '#community')
            }}
          >
            Community
          </StyledHeadingLink>
        </StyledSidebar>
        <span>
          <StyledSectionFlex id="Strategy" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>Strategy</Title>
            <p>
              The decentralized finance industry requires decentralized liquidity. We expect the DeFi space to keep growing in leaps and bounds in the future. Fuelling that growth will require more efficiencies, scalability and innovative incentives.
            </p>
            <p>
              Our aim is to explore complex liquidity provision interactions like incentivized liquidity, liquidity as collateral, and other experimental strategies like multi-blockchain support. We are doing it extending the several protocols (UniSwap, YAM, 1inch etc.) that are our starting point for the R&amp;D activities.
            </p>
            <p>
              We will experiment gamification strategies for gathering liquidity and engage people. Furthermore, on a daily base, shares of $gil will be assigned to users and investors of Materia.exchange. The distribution of $gil is a method of both fairly issuing governance tokens and incentivize liquidity.
            </p>
          </StyledSectionFlex>

          <StyledSectionFlex id="Distribution" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>$gil Distribution</Title>
            <p>
              According with our strategy, we will generate 42.640.000 $gil. All the supply will be distributed as follow:
            </p>
            <br />
            <StyledImage src={GilDistribution} />
            <br />
            <table>
              <thead>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;</th>
                  <th>&nbsp;&nbsp;&nbsp;<br />$gil&nbsp;&nbsp;&nbsp;</th>
                  <th>&nbsp;&nbsp;&nbsp;<br />Usage&nbsp;&nbsp;&nbsp;</th>
                  <th>&nbsp;&nbsp;&nbsp;<br />Description&nbsp;&nbsp;&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;<br />715%&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />3.048.760,00&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Liquidity Pool&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Available for trading. Token will&nbsp;&nbsp;&nbsp;be listed&nbsp;&nbsp;&nbsp;on uniswap&nbsp;&nbsp;&nbsp;DEX and then&nbsp;&nbsp;&nbsp;on the Materia&nbsp;&nbsp;&nbsp;DEX&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;<br />26,35%&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />10.660.000,00&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Governance&nbsp;&nbsp;&nbsp;and funding&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Owned by Materia DFO, regulated&nbsp;&nbsp;&nbsp;by $gil&nbsp;&nbsp;&nbsp;owners&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;<br />25%&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />11.235.640,00&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Investors governance&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Available for investments&nbsp;&nbsp;&nbsp;rounds.&nbsp;&nbsp;&nbsp;First under development&nbsp;&nbsp;&nbsp;team control, this&nbsp;&nbsp;&nbsp;asset&nbsp;&nbsp;&nbsp;will&nbsp;&nbsp;&nbsp;be lost&nbsp;&nbsp;&nbsp;after&nbsp;&nbsp;&nbsp;investment&nbsp;&nbsp;&nbsp;stages&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;<br />40%&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />17.056.000,00&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Founders&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Stored in the Founders&nbsp;&nbsp;&nbsp;Vault.&nbsp;&nbsp;&nbsp;These&nbsp;&nbsp;&nbsp;funds are locked&nbsp;&nbsp;&nbsp;for at&nbsp;&nbsp;&nbsp;the long run.&nbsp;&nbsp;&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;<br />1,5%&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />639.600,00&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />DFOHub&nbsp;&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;&nbsp;<br />Platform fee, lost&nbsp;&nbsp;&nbsp;during&nbsp;&nbsp;&nbsp;DFO creation&nbsp;&nbsp;&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </StyledSectionFlex>

          <StyledSectionFlex id="Manifesto" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>Manifesto</Title>
            <p>
              We want to prove the true potential of on-Chain decentralized organization by implementing the first, enterprise-free, DEX, completely managed and developed by the community for the community.
            </p>
            <p>
              By starting from the state of the art of several protocols (UniSwap, 1inch, YAM etc.), we want to contribute to the DEX evolution by exploring the frontiers of liquidity provisioning, implementing strategies, and protocol to involve and engage a wide community of dreamers.
              </p>
            <p>
              We believe in openness. Our work will be committed on github and we encourage people to join the project and contribute to its evolution and success.
            </p>
          </StyledSectionFlex>


          <StyledSectionFlex id="Voting" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>Voting</Title>
            <p>
              We strongly believe that for supporting and evolving any protocol in this challenging and fast-changing DeFi world, it is required to build a fluid, dynamic organization, free to evolve according to user needs and leveraging everyone contribution.
            </p>
            <p>
              “The market is becoming more mature, and both voting, and its discussion are an important step towards the decentralization that is constantly brought up,” [cit.] Alexander Kerya, Chief Product Owner of Everstake Alexandr Kerya
</p>
            <p>
              We want to build and develop a solid community involved in democratic decisions, that guarantee the highest degree of legitimacy in the outcome of that decision.
</p>
            <p>
              “the fundamental problem of blockchain voting today or blockchain governance today is that 100 percent of it is plutocratic.”, [cit.] Santi Siri founder of Democracy Earth ($sovereign)
</p>
            <p>
              By deciding the outcome of the election, whoever has the largest amount of tokens or the largest economic weight can make the influence of others irrelevant. Any malicious network attacker could buy up large amount of tokens, vote in the worst interests of the application and subsequently sell all their holdings immediately thereafter without penalty.
</p>
            <p>
              For this reason we are keeping a large amount of $gil for the first stages and planning to progressively lose control over time, after securing the release of the project.
</p>
            <p>
              We are also studing several mechanisms to guarantee greater voting power to those token holders who have staked their assets on the network for a long period of time. The aim is to incentivizing people to think and participate long-term.
            </p>
          </StyledSectionFlex>

          <StyledSectionFlex id="community" style={{ paddingTop: '2rem' }}>
            <h1 style={{ width: '100%' }}>Community</h1>
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
