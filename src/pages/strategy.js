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
  p { padding-top: 40px; }
`
const StyledQuote = styled.p`  
  /*border-radius: 20px;*/
  border-radius: 5px;
  padding: 1rem;
  /*border: solid;
  color: ${({ theme }) => theme.invertedTextColor};
  border-color: ${({ theme }) => theme.colors.link};
  background-color: ${({ theme }) => theme.colors.link};*/
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#171717",endColorstr="#282b30",GradientType=1);
  background: ${({ theme }) => theme.flyout};
  color:#eaeaea;
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
const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 450px;
  background-color: none;
  margin-top: 0rem;
  margin-bottom: 1rem;
  /*border-radius: 20px;*/
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) { min-width: unset; }
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
      percentage: '28,5%',
      gil: '5.700.000,00',
      usage: 'Liquidity Pool',
      description: 'Available for trading. Token will be listed on uniswap DEX and then on Materia.',
    },
    {
      id: 1,
      percentage: '20%',
      gil: '4.000.000,00',
      usage: 'Governance and funding',
      description: 'Owned by Materia DFO, regulated by $gil owners.',
    },
    {
      id: 2,
      percentage: '40%',
      gil: '8.000.000,00',
      usage: 'Investors governance',
      description: 'Available for investments rounds. First under development team control, this asset will be lost after investment stages.',
    },
    {
      id: 3,
      percentage: '10%',
      gil: '2.000.000,00',
      usage: 'Founders',
      description: 'Stored in the Founders Vault. These funds are locked for at the long run.',
    },
    {
      id: 4,
      percentage: '1,5%',
      gil: '1.500.000,00',
      usage: 'DFOHub',
      description: 'Platform fee, locked during DFO creation.',
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
      data: [3.5, 30, 25, 40, 1.5],
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
          {/* <StyledHeadingLink
            onClick={() => {
              scrollTo('#Distribution')
              window.history.pushState({}, '', '#Distribution')
            }}>
            Distribution
          </StyledHeadingLink> */}
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
        </StyledSidebar>
        <span>
          <StyledSectionFlex id="Strategy">
            <Title style={{ width: '100%' }}>Strategy</Title>
            <StyleSectionFull>
              <ParagraphContent>
                As DeFi grows from a niche cryptocurrency market into a mature financial ecosystem, we expect a need for higher efficiency while scaling up to support billions of users.               </ParagraphContent>
              <ParagraphContent>
                The global economy is changing quickly as new populations have access to a financial system for the first time.  Materia Dex is positioning itself to cater to the needs of all DeFi users.
              </ParagraphContent>

              <ParagraphContent>
                Batch Swap is our most recent initiative.  By allowing users to group multiple swaps in one single transaction we are saving users money and time.  The increased efficiency lowers gas fees substantially for the users.  This allows Ethereum to be more inclusive to users of all sizes.            </ParagraphContent>

              This is the first step in our growing list of features.  All of which will be aimed at giving users an efficient, logical, and intuitive DeFi experience.

              <ParagraphContent>
                Materia Dex is a fully permissionless and open-source exchange that allows for anyone to list any token they like.  Furthermore, we are exploring complex liquidity interactions such as liquidity as collateral, incentivized liquidity, and multi-blockchain support.

                By utilizing WUSD as a bridge token, Materia Dex achieves a superior level of price stability while also lower slippage and increasing the efficiency of swaps.
              </ParagraphContent>
            </StyleSectionFull>
          </StyledSectionFlex>

          <StyledSectionFlex id="Manifesto" style={{ "marginBottom": "2.5rem" }}>
            <Title style={{ width: '100%' }}>Manifesto</Title>
            <StyleSectionLeft>
              <ParagraphContent>
                Materia is a research and development project being built for the Ethereum community as a whole.  Over time the project will be handed off to the Materia community until we reach a 100% decentralized state.
              </ParagraphContent>
              <ParagraphContent>
                Our goal is to give users the best DeFi experience possible.  Swap one or multiple tokens.  Route trades through Materia or any other Dex.  Choose Eth, BSC, or any other chain of your liking.  Swap an ERC-20 token for an NFT in a permissionless manner.
                Materia is in the process of building out these features.  When completed, Materia will be a platform where users can manage their token investments and NFT portfolio, across multiple chains, in one singular location.
              </ParagraphContent>
              <ParagraphContent>
                We believe in openness. Our work will be committed on Github and we encourage people to join the project and contribute to its evolution and success.
              </ParagraphContent>
            </StyleSectionLeft>
          </StyledSectionFlex>

        <StyledSectionFlex id="Security" style={{ "marginBottom": '2.5rem' }}>
          <Title style={{ width: '100%' }}>Security</Title>

          <StyleSectionRight>
            <ParagraphContent>
              Materia smart contracts and DeFi operating models are audited by our security team.  We also utilize DFO capabilities which allow us to use microservices on Ethereum.  This means Materia has the ability to develop each function, test each function, fix it if need be, and deploy the contracts in a step-by-step manner so as not to jeopardize the rest of the dapp.
            </ParagraphContent>
            <ParagraphContent>
              We invite the entire community and professionals to audit our contracts. We will reward any white hat hackers who audit our contracts and find a bug.  Contracts found here:
              https://github.com/materia-dex/ .
            </ParagraphContent>
          </StyleSectionRight>
        </StyledSectionFlex>

        <StyledSectionFlex id="Voting">
          <Title style={{ width: '100%' }}>Voting</Title>
          <StyleSectionRight style={{ "margin": "1rem 0rem 1rem 0rem" }}>
            <ParagraphContent>
              We strongly believe that for supporting and evolving any protocol in this challenging and fast-changing DeFi world, it is required to build a fluid, dynamic organization, free to evolve according to user needs and leveraging everyone's contribution.              </ParagraphContent>
            <StyledQuote style={{ "maxWidth": "450px" }}>
              <i>"The market is becoming more mature, and both voting, and its discussion are an important step towards the decentralization that is constantly brought up"</i><br />
              <b>Alexander Kerya, Chief Product Owner of Everstake Alexandr Kerya</b>
            </StyledQuote>
          </StyleSectionRight>
          <StyleSectionLeft>
            <ParagraphContent>
              We want to build and develop a solid community involved in democratic decisions, that guarantee the highest degree of legitimacy in the outcome of that decision.                <br /><br />
            </ParagraphContent>
            <StyledQuote style={{ "maxWidth": "450px", height: "176px" }}>
              <i>"The fundamental problem of blockchain voting today or blockchain governance today is that 100 percent of it is plutocratic."</i><br />
              <b>Santi Siri founder of Democracy Earth ($sovereign)</b>
            </StyledQuote>
          </StyleSectionLeft>
          <StyleSectionFull>
            <ParagraphContent style={{ "paddingTop": "0px" }}>
              By deciding the outcome of the election, whoever has the largest amount of tokens or the largest economic weight can make the influence of others irrelevant. Any malicious network attacker could buy up large amount of tokens, vote in the worst interests of the application and subsequently sell all their holdings immediately thereafter without penalty.              </ParagraphContent>
            <ParagraphContent>
              For this reason we are keeping a large amount of GIL for the first stages and planning to progressively lose control over time, after securing the release of the project.              </ParagraphContent>
            <ParagraphContent>
              We are also studying several mechanisms to guarantee greater voting power to those token holders who have staked their assets on the network for a long period of time. The aim is to incentivize people to think and participate long-term.              </ParagraphContent>
          </StyleSectionFull>
        </StyledSectionFlex>


        </span>
      </StyledAbout>
    </Layout >
  )
}

export default About
