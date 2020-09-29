import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import scrollTo from 'gatsby-plugin-smoothscroll'
import MiniCard from '../components/minicard'
import MUIDataTable from "mui-datatables";
import { Pie } from 'react-chartjs-2';

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
      farmingImage: file(relativePath: { eq: "farming.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      stakingImage: file(relativePath: { eq: "staking.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO title="Incentive Strategy" path={props.location.pathname} />
      <StyledAbout>
        <StyledSidebar>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Management')
              window.history.pushState({}, '', '#Management')
            }}>
            Liquidity Management
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Offering')
              window.history.pushState({}, '', '#Offering')
            }}>
            Incentives Strategy: Liquidity Offering
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Exping')
              window.history.pushState({}, '', '#Exping')
            }}>
            Incentives Strategy: Exping
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Quests')
              window.history.pushState({}, '', '#Quests')
            }}>
            Incentives Strategy: Quests
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#UGil')
              window.history.pushState({}, '', '#UGil')
            }}>
            uGIL
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Staking')
              window.history.pushState({}, '', '#Staking')
            }}>
            Staking and uGIL Mint
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
          <StyledSectionFlex id="Management">
            <Title style={{ width: '100%' }}>Liquidity Management</Title>
            <StyleSectionFull style={{ margin: "0" }}>
              <p>
                Some pair of GIL,  (GIL &lt;-&gt; USDC | GIL &lt;-&gt; ETH etc.) will be created on UniSwap v2, in order to provide the initial liquidity. People interested in joining our project, will be able to swap the GIL. We will also provide a gamification-based farming tool to incentivize liquidity provisioning and accelerate the migration to Materia.exchange dApp.
                We won't be minting further GIL, we will use the amount available from Investors' wallet, accordingly with the community votes. The aim is to attract stable and long-term investors.
              </p>
              <p>
                As an incentive, each investor will receive a Non-Fungible Token, containing its redeemable achievements and also an amazing, fun unique character. 
                Every staker will be able to exchange or sell its own NFT. After a staking period, It will also be possible to buy more NFT on the Marketplace section of our DEX. 
                The NFTs will be persistant and it will be possible to collect them. Collectionists will have the opportunity to exibihit their collections in a monthly contest. GIL owner will be able to vote the best collection and collect further incentives.
              </p>
            </StyleSectionFull>
          </StyledSectionFlex>

          <StyledSectionFlex id="Offering">
            <Title style={{ width: '100%' }}>Incentives Strategy: Initial Liquidity Offering</Title>
            <StyledImage fadeIn={false} fluid={props.data.farmingImage.childImageSharp.fluid} />
            <StyleSectionFull style={{ margin: "1.5rem auto" }}>
              <p>
                Initial Liquidity Offerings are a way for DFO, DAO and Ethereum-based initiatives to secure long-term funding by providing programmable liquidity. As already explained, we will provide &#36;gil, with a fixed and fair inflection, executed on a daily base without dumping on new and long-term olders.
              </p>
              <p>
                During our ILO, we will release the 3.5&#37; of the total amount of &dollar;gil (i.e. 3.5M). To avoid Sniper Bots, we will deposit an initial pair of 500k &#36;gil on UniSwap and then, during the first two weeks, we will invite investors to get &#36;gil, pairing them with ETH and other stable-coins, and to deposit them on high-rate, staking pools where we will release the remaing 3M &#36;gil as reward.
              </p>
              <p>
                After the two weeks ILO, we will open to the market our Exping function. The aim is to attract long term investors, bringing liquidity to Materia. Exping investors will receive &#36;gil, as reward, from the “Investors Governance” wallet. The aim is to attract funds, providing liquidity for the DEX, and to compensate both early and long-term investors by receiving a more significant portion of the liquidity.
              </p>
            </StyleSectionFull>
          </StyledSectionFlex>


          <StyledSectionFlex id="Exping">
            <Title style={{ width: '100%' }}>Incentives Strategy: Exping</Title>
            {/* <StyledImage fadeIn={false} fluid={props.data.farmingImage.childImageSharp.fluid} />
            <StyleSectionFull style={{ margin: "1.5rem auto" }}>
              <p>
                For each investor will be provided redeemable uGIL tokens. GIL rewards will be provided on daily base. Long term uGIL owners will have an accelerated voting power.
              </p>
            </StyleSectionFull> */}
          </StyledSectionFlex>


          <StyledSectionFlex id="Quests">
            <Title style={{ width: '100%' }}>Incentives Strategy: Quests</Title>
            {/* <StyledImage fadeIn={false} fluid={props.data.farmingImage.childImageSharp.fluid} />
            <StyleSectionFull style={{ margin: "1.5rem auto" }}>
              <p>
                For each investor will be provided redeemable uGIL tokens. GIL rewards will be provided on daily base. Long term uGIL owners will have an accelerated voting power.
              </p>
            </StyleSectionFull> */}
          </StyledSectionFlex>

          <StyledSectionFlex id="UGil">
            <Title style={{ width: '100%' }}>uGIL</Title>
            <StyleSectionFull style={{ margin: "0" }}>
              <p>
                uGIL is a representation of LPs token (representing the liquidity added to the pool through the input pairs) and the incremental interest they've earned. They are interest-accumulating tokens that continuously go up in value as you hold them. uGIL is minted during the liquidity staking and will be burned after having redeemed it. The value of uGIL continually increases from the accreditation of interests, paid after every block, for the lasts of the investment. Owners can divest of their position in two ways: burning the token by sending it to the contract or selling them on Materia exchange, to exit the position. They can also be used as collaterals wherever applicable.
              </p>
            </StyleSectionFull>
          </StyledSectionFlex>

          <StyledSectionFlex id="Staking">
            <Title style={{ width: '100%' }}>Pairs Staking and uGIL Mint</Title>
            <StyledImage fadeIn={false} fluid={props.data.stakingImage.childImageSharp.fluid} />
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
