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
      gladiatorsImage: file(relativePath: { eq: "gladiators.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      manifestoImage: file(relativePath: { eq: "manifesto.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      securityImage: file(relativePath: { eq: "security.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const tableColumns = [
    {
      label: 'Percentage',
      name: 'percentage'
    },
    {
      label: 'GIL',
      name: 'gil'
    },
    {
      label: 'Usage',
      name: 'usage'
    },
    {
      label: 'Description',
      name: 'description'
    },
  ];

  const tableData = [
    {
      id: 0,
      percentage: '7,15%',
      gil: '3.048.760,00',
      usage: 'Liquidity Pool',
      description: 'Available for trading. Token will be listed on uniswap DEX and then on the Materia.',
    },
    {
      id: 1,
      percentage: '26,35%',
      gil: '10.660.000,00',
      usage: 'Governance and funding',
      description: 'Owned by Materia DFO, regulated by GIL owners.',
    },
    {
      id: 2,
      percentage: '25%',
      gil: '11.235.640,00',
      usage: 'Investors governance',
      description: 'Available for investments rounds. First under development team control, this asset will be lost after investment stages.',
    },
    {
      id: 3,
      percentage: '40%',
      gil: '17.056.000,00',
      usage: 'Founders',
      description: 'Stored in the Founders Vault. These funds are locked for at the long run.',
    },
    {
      id: 4,
      percentage: '1,5%',
      gil: '639.600,00',
      usage: 'DFOHub',
      description: 'Platform fee, lost during DFO creation.',
    }
  ];

  const tableOptions = {
    filter: false,
    search: false,
    print: false,
    download: false,
    viewColumns: false,
    selectableRows: 'none',
    responsive: 'simple',
    elevation: 0,
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => { }
  };

  const chartData = {
    labels: [
      'Liquidity Pool',
      'Governance and funding',
      'Investors governance',
      'Founders',
      'DFOHub',
    ],
    datasets: [{
      data: [7.15, 26.35, 25, 40, 1.5],
      backgroundColor: [
        '#f33a33',
        '#10a54d',
        '#3977ed',
        '#fcb42c',
        '#b911b3'
      ],
    }]
  };

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO title="Strategy &amp; Manifesto" path={props.location.pathname} />
      <StyledAbout>
        <StyledSidebar>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Strategy')
              window.history.pushState({}, '', '#Strategy')
            }}>
            Strategy
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Manifesto')
              window.history.pushState({}, '', '#Manifesto')
            }}>
            Manifesto
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Distribution')
              window.history.pushState({}, '', '#Distribution')
            }}>
            Distribution
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Security')
              window.history.pushState({}, '', '#Security')
            }} >
            Security
          </StyledHeadingLink>
          <StyledHeadingLink
            onClick={() => {
              scrollTo('#Voting')
              window.history.pushState({}, '', '#Voting')
            }} >
            Voting
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
          <StyledSectionFlex id="Strategy">
            <Title style={{ width: '100%' }}>Strategy</Title>
            <StyledImgSectionLeft>
              <StyledImage fadeIn={false} fluid={props.data.gladiatorsImage.childImageSharp.fluid} />
            </StyledImgSectionLeft>
            <StyleSectionRight>
              <p>
                The decentralized finance industry requires decentralized liquidity. We expect the DeFi space to keep growing in leaps and bounds in the future. Fuelling that growth will require more efficiencies, scalability and innovative incentives.
              </p>
              <p>
                Our aim is to explore complex liquidity provision interactions like incentivized liquidity, liquidity as collateral, and other experimental strategies like multi-blockchain support. We are doing it extending the several protocols (UniSwap, Crypto Swap, 1inch etc.) that are our starting point for the R&amp;D activities.
              </p>
            </StyleSectionRight>
            <StyleSectionFull>
              <p>
                We will experiment gamification strategies for gathering liquidity and engage people. Furthermore, on a daily base, shares of GIL will be assigned to users and investors of Materia.exchange. The distribution of GIL is a method of both fairly issuing governance tokens and incentivize liquidity. Materia follows a constant product formula, where the product of the quantities of two tokens remain the same before and after a swap is performed. The price slippage depends on the ratio and quantity of tokens in the pool.
              </p>
            </StyleSectionFull>
          </StyledSectionFlex>

          <StyledSectionFlex id="Manifesto" style={{ "marginBottom": "2.5rem" }}>
            <Title style={{ width: '100%' }}>Manifesto</Title>
            <StyleSectionLeft>
              <p>
                We want to prove the true potential of on-Chain decentralized organization by implementing the first, enterprise-free, DEX, completely managed and developed by the community for the community.
              </p>
              <p>
                By starting from the state of the art of several protocols (UniSwap, Crypto Swap, 1inch etc.), we want to contribute to the DEX evolution by exploring the frontiers of liquidity provisioning, implementing strategies, and protocol to involve and engage a wide community of dreamers.
              </p>
              <p>
                We believe in openness. Our work will be committed on github and we encourage people to join the project and contribute to its evolution and success.
              </p>
            </StyleSectionLeft>
            <StyledImgSectionRight>
              <StyledImage fadeIn={false} fluid={props.data.manifestoImage.childImageSharp.fluid} />
            </StyledImgSectionRight>
          </StyledSectionFlex>

          <StyledSectionFlex id="Distribution">
            <Title style={{ width: '100%' }}>GIL Distribution</Title>
            <StyleSectionLeft>
              <p>
                According with our strategy, we will generate 42.640.000 GIL. All the supply will be distributed as follow:
              </p>
              <StyledTableContainer>
                <MUIDataTable
                  data={tableData}
                  columns={tableColumns}
                  options={tableOptions}
                />
              </StyledTableContainer>
            </StyleSectionLeft>
            <StyledImgSectionRight style={{ "display": "flex", "margin": "0 auto", "justifyContent": "center" }}>
              <StyledChartContainer>
                <Pie
                  data={chartData}
                  options={{ maintainAspectRatio: false }}
                />
              </StyledChartContainer>
            </StyledImgSectionRight>
          </StyledSectionFlex>

          <StyledSectionFlex id="Security" style={{ "marginBottom": '2.5rem' }}>
            <Title style={{ width: '100%' }}>Security</Title>
            <StyleSectionFull style={{ margin: "0" }}>
              <p style={{ "marginBottom": "1rem" }}>
                Materia is a fork of Uniswap V2, Crypto.com DeFi Swap and other DeFi projects with innovative yeld incentive for liquidity providers, powered by GIL.
              </p>
            </StyleSectionFull>
            <StyledImgSectionLeft>
              <StyledImage fadeIn={false} fluid={props.data.securityImage.childImageSharp.fluid} />
            </StyledImgSectionLeft>
            <StyleSectionRight>
              <p>
                Materia smart contracts and DeFi operating model were audited by our security team. <br />
                We also implemented several more features, leveraging DFO CAPABILITIES in order to use microservices on Ethereum. With a DFO as a base layer, we can develop every function step by step, then test and fix, without compromising the entire Dapp.
              </p>
            </StyleSectionRight>
          </StyledSectionFlex>

          <StyledSectionFlex id="Voting">
            <Title style={{ width: '100%' }}>Voting</Title>
            <StyleSectionRight style={{ "margin": "1rem 0rem 1rem 0rem" }}>
              <p style={{ "maxWidth": "450px" }}>
                We strongly believe that for supporting and evolving any protocol in this challenging and fast-changing DeFi world, it is required to build a fluid, dynamic organization, free to evolve according to user needs and leveraging everyone's contribution.
              </p>
              <StyledQuote style={{ "maxWidth": "450px" }}>
                <i>“The market is becoming more mature, and both voting, and its discussion are an important step towards the decentralization that is constantly brought up”</i><br />
                <b>[cit.] Alexander Kerya, Chief Product Owner of Everstake Alexandr Kerya</b>
              </StyledQuote>
              <p style={{ "maxWidth": "450px" }}>
                We want to build and develop a solid community involved in democratic decisions, that guarantee the highest degree of legitimacy in the outcome of that decision.
              </p>
              <StyledQuote style={{ "maxWidth": "450px" }}  >
                <i>“The fundamental problem of blockchain voting today or blockchain governance today is that 100 percent of it is plutocratic.”</i><br />
                <b>[cit.] Santi Siri founder of Democracy Earth ($sovereign)</b>
              </StyledQuote>
            </StyleSectionRight>
            <StyleSectionLeft>
              <p>
                By deciding the outcome of the election, whoever has the largest amount of tokens or the largest economic weight can make the influence of others irrelevant. Any malicious network attacker could buy up large amount of tokens, vote in the worst interests of the application and subsequently sell all their holdings immediately thereafter without penalty.
              </p>
              <p>
                For this reason we are keeping a large amount of GIL for the first stages and planning to progressively lose control over time, after securing the release of the project.
              </p>
              <p>
                We are also studing several mechanisms to guarantee greater voting power to those token holders who have staked their assets on the network for a long period of time. The aim is to incentivizing people to think and participate long-term.
              </p>
            </StyleSectionLeft>
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
