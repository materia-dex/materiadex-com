import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import scrollTo from 'gatsby-plugin-smoothscroll'

import MiniCard from '../components/minicard'
// import Discord from '../images/discord.inline.svg'

import LiquidityFarming from '../images/liquidity_farming.png'

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
      liquidity: file(relativePath: { eq: "liquidity.png" }) {
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
  `

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="Incentives Strategy" path={props.location.pathname} />
      <StyledAbout>
        <StyledSidebar>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#farming')
              window.history.pushState({}, '', '#farming')
            }}
          >
            Liquidity Farming
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#management')
              window.history.pushState({}, '', '#management')
            }}
          >
            Liquidity Management
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#lottery')
              window.history.pushState({}, '', '#lottery')
            }}
          >
            Short Term Lottery
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#exchange')
              window.history.pushState({}, '', '#exchange')
            }}
          >
            Exchange
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#ugil')
              window.history.pushState({}, '', '#ugil')
            }}
          >
            uGIL
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
          <StyledSectionFlex id="farming" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>Liquidity Farming</Title>
            <br />
            <StyledImage src={LiquidityFarming} />
            <br />
            <p>
              For each investor will be provided a redeemable $guni token $gil rewards will be provided on daily base. Long term $guni owners will have an accelerated voting power.
            </p>
          </StyledSectionFlex>
          <StyledSectionFlex id="management" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>Liquidity Management</Title>
            <p>
              Some pair of $gil, ($gil &lt;-&gt; USDC and $gil &lt;-&gt; WETH) will be created on UniSwap v2, in order to provide the initial liquidity.
            </p>
            <p>
              People interested in joining our project, will be able to swap the $gil and deposit them on our dApp.
            </p>
            <p>
              We won&apos;t be minting further $gil, we will use the amount available from Materia DFO wallet, accordingly with the community votes. The aim is to attract stable and long-term investors.
            </p>
            <p>
              As an incentive, each investor will receive a lottery ticket, a Non-Fungible Token, containing also an amazing unique character. Every day, an extraction among all the investors and stakers will take place. The winner will be rewarded with a coffer of extra $gil.
            </p>
            <p>
              Every staker will be able to exchange or sell its own lottery ticket. After seven days of staking, It will also be possible to buy more tickets through the NFT trading section of our DEX.
            </p>
            <p>
              The NFTs will be persistant and it will be possible to collect them. Collectionists will have the opportunity to exibihit their collection in a monthly contest. $gil owner will have the opportunity to vote the best collection and collect further incentives.
            </p>
          </StyledSectionFlex>
          <StyledSectionFlex id="lottery" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>Short Term Lottery</Title>
            <p>
              Coming soon!
            </p>
          </StyledSectionFlex>
          <StyledSectionFlex id="exchange" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>Exchange</Title>
            <p>
              Coming soon!
            </p>
          </StyledSectionFlex>
          <StyledSectionFlex id="ugil" style={{ flexDirection: 'column' }}>
            <Title style={{ width: '100%' }}>uGIL</Title>
            <p>
              uGIL is a representation of LPs token (representing the liquidity added to the pool through the input pairs) and the incremental interest they&apos;ve earned. They are interest-accumulating tokens that continuously go up in value as you hold them.
            </p>
            <p>
              uGIL is minted during the liquidity staking and will be burned after having redeemed it. The value of uGIL continually increases from the accreditation of interests, paid after every block, for the lasts of the investment.
            </p>
            <p>
              Owners can divest of their position in two ways: burning the token by sending it to the contract or selling them on Materia exchange, to exit the position. They can also be used as collaterals wherever applicable.
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
