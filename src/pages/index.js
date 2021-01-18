import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import MiniCard from '../components/minicard'
import { Button } from '../components/button'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  &:after {
    content: "";
    width: 100%;
    display: block;
    left: 0;
    position: absolute;
    height: 40px;
    bottom: 24px;
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
    bottom: -50px;
    background: linear-gradient(90deg,rgba(129,205,243,0) 0,#81cdf3 25%,#81cdf3 75%,rgba(129,205,243,0));
    margin-bottom: 4rem;
  }
  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 1rem;
  color: white
`

const StyledHeading = styled.h2`
  font-size: 2em;
  width: 100%;
  max-width: 1100px;
  text-align: center;
  margin: 0 auto;
  line-height: 1;
  display: block;
  position: relative;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 20px 5px;
  text-shadow: -1px -1px 4px #ff004f, -2px -2px 4px #000;
  overflow: hidden;
  z-index: 0;
  font-weight: 300;
  background: linear-gradient(90deg,rgba(8,19,32,0) 0,#081320 25%,#081320 75%,rgba(8,19,32,0));
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 54px;
  margin: 2rem 0 2rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Cera Pro', sans-serif;
  @media (max-width: 1024px) {
    margin: 0 0 0 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 2rem 0 2rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    font-size: 3rem;
    width: 100%;
    margin: 0rem 0 0rem 0;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 450px;
  background-color: none;
  margin-top: 0rem;
  border-radius: 0px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledCardImage = styled(Img)`
  max-width: 250px;
  min-width: 100px;
  background-color: none;
  margin-top: 0rem;
  border-radius: 0px;  
`

const StyledNormalImage = styled(Img)`
  max-width: 60px;
  min-width: 60px;
  border-radius: 0px;
`

const StyledNormalImage2 = styled(Img)`
  max-width: 400px;
  min-width: 250px;
  border-radius: 0px;
  margin: auto;   
`

const StyledCornerImage = styled(Img)`
  position:absolute;
  display:block;
  height:39px;
  width:39px
  @media (max-width: 960px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`

const StyledBox = styled.div`
  padding: 0;
  margin: 0 auto;
  position: relative;
  display: inline-block;
  z-index: 0;
  cursor: pointer;
  border: 2px solid #1e9de3;
`

const StyledTitleAfter = styled.div`
    font-size: 2em;
    width: auto;
    line-height: 1;
    display: inline-block;
    text-transform: none;
    overflow: hidden;
    z-index: 0;
    font-weight: 300;
    text-shadow: 2px 2px 4px #000;
  &:after {
    content: "";
    width: 100%;
    display: block;
    left: 0;
    position: relative;
    height: 40px;
    bottom: 24px;
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
    position: relative;
    height: 2px;
    bottom: -50px;
    background: linear-gradient(90deg,rgba(129,205,243,0) 0,#81cdf3 25%,#81cdf3 75%,rgba(129,205,243,0));
}
@media (max-width: 375px) {
  font-size: 1.5em;
}
`

const StyledBoxFade = styled.div`
font-size: 1em;
background: linear-gradient(90deg, rgba(23,23,23, 0.5), rgba(40,43,48, 0.8));
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#171717",endColorstr="#282b30",GradientType=1);
padding: 20px;
border: 1px solid #1e9de3;
border-radius: 20px;
box-shadow: 0px 0px 10px 0px #b0deff;
transition: transform .33s ease-in-out .66s,opacity .33s ease-in-out .66s,-webkit-transform .33s ease-in-out .66s;
position: relative;
max-width: 700px;
@media (max-width: 375px) {
  max-width: 350px;;
}
`

const StyledSpanTopRight = styled.span`
filter: blur(0);
    top: -22.5px;
    right: -21.5px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    position: absolute;
    display: block!important;
    height: 39px;
    width: 39px;
`

const StyledSpanTopLeft = styled.span`
filter: blur(0);
top: -21.5px;
left: -23.5px;
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
    position: absolute;
    display: block!important;
    height: 39px;
    width: 39px;
`

const StyledSpanBottomLeft = styled.span`
bottom: -20.5px;
left: -23.5px;
-webkit-transform: rotate(270deg);
transform: rotate(270deg);
    position: absolute;
    display: block!important;
    height: 39px;
    width: 39px;
`

const StyledSpanBottomRight = styled.span`
bottom: -20.5px;
    right: -23.5px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    position: absolute;
    display: block!important;
    height: 39px;
    width: 39px;
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }
  @media (max-width: 375px) {
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    max-width: 350px;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      dfoHUbImage: file(relativePath: { eq: "dfo-hub-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 92) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      materiaIconsImage: file(relativePath: { eq: "materia-icons.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      naufImage: file(relativePath: { eq: "nauf-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      usdImage: file(relativePath: { eq: "usd-token.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ethItemImage: file(relativePath: { eq: "ethitem-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cornerImage: file(relativePath: { eq: "trailer_frame_corner.png" }) {
        childImageSharp {
          fluid(maxWidth: 39) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'World first, User-Centric DEX governed by On-Chain, Enterprise-Free Organization'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>World first, User-Centric DEX governed by On-Chain, Enterprise-Free Organization.</StyledBodyTitle>
          <span>
            <Button href="#">Coming Soon</Button>
          </span>
        </StyledTitle>
        <SummarySection data={data} />
        <InfoSection data={data} />
        <ProductsSection data={data} />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 1rem 3rem;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
    p {
      max-width: 450px;
    }
    h1 {
      max-width: 450px;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
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
const MiniNewInfo = styled(Link)`
  transform: rotate(-4deg) scale(0.98);
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  height: 500px;

  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: rotate(-2deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
  }
`
const SummarySection = props => {
  return (
    <StyledSectionFlex>
        <StyledBoxFade>
          <h1>
            <b>Materia</b> is the world-first, User-centric Decentralized EXchange controlled by On-Chain, Enterprise-Free Organization based on <b>DFOHub</b> protocol.
          </h1>
          <p>
            Materia’s token <b>GIL</b> is the backbone of the entire initiative. Token holders have full ownership of the project and its future, without any kind of external control.
          </p>
          <p>
            Through GIL, the entire community can actively partecipate to its evolution, proposing new features and voting for their implementation.
          </p>
          <div class="divider"></div>
          <div class="homeSloganContainer">
              {/* <StyledNormalImage fadeIn={false} fluid={props.data.dfoHUbImage.childImageSharp.fluid} /> */}
              <StyledNormalImage2 fadeIn={false} fluid={props.data.materiaIconsImage.childImageSharp.fluid} />
              <p>
                <span>Materia + DFO Protocol</span>
                <span>REAL DECENTRALIZED EXCHANGE</span>
              </p>
          </div>
        </StyledBoxFade>      
    </StyledSectionFlex>
  )
}

const CornerBox = props => {
  return (
    <>
      <StyledSpanTopRight>
        <StyledCornerImage fadeIn={false} fluid={props.data.cornerImage.childImageSharp.fluid} />
      </StyledSpanTopRight>
      <StyledSpanTopLeft>
        <StyledCornerImage fadeIn={false} fluid={props.data.cornerImage.childImageSharp.fluid} />
      </StyledSpanTopLeft>
      <StyledSpanBottomLeft>
        <StyledCornerImage fadeIn={false} fluid={props.data.cornerImage.childImageSharp.fluid} />
      </StyledSpanBottomLeft>
      <StyledSpanBottomRight>
        <StyledCornerImage fadeIn={false} fluid={props.data.cornerImage.childImageSharp.fluid} />
      </StyledSpanBottomRight>
    </>
  )
}

const InfoSection = props => {
  return (
    <>
      <StyledSectionFlex>
        <StyledImgSection>
          <div class="homeImagesCardContainer">
            <div class="homeImageContainer">
                <StyledCardImage fadeIn={false} fluid={props.data.naufImage.childImageSharp.fluid} />
              </div>
              <p class="homeImageCaption">
                <strong>NAUF</strong><br/>
                Materia is NOT Another Uniswap Fork
              </p>
          </div>
          <div class="homeImagesCardContainer">
            <div class="homeImageContainer">
              <StyledCardImage fadeIn={false} fluid={props.data.usdImage.childImageSharp.fluid} />
            </div>
            <p class="homeImageCaption">
              <strong>Unified Stable Dollar</strong><br/>
              uSD is a Stable Coin based on Uniswap Liquidity Pools
            </p>
          </div>
          <div class="homeImagesCardContainer">
            <div class="homeImageContainer">
            <StyledCardImage fadeIn={false} fluid={props.data.ethItemImage.childImageSharp.fluid} />
            </div>
            <p class="homeImageCaption">
              <strong>EthItem</strong><br/>
              ethItem is a synthesis of the ERC1155 &amp; ERC20 standards, enabling their total interoperability.<br/>
              Each unique NFT ID can now become a source of an ERC20
            </p>
          </div>
        </StyledImgSection>
        <StyledImgSection>
          <StyledBoxFade>
            <StyledTitleAfter>NAUF (Not another Uniswap Fork)</StyledTitleAfter>
            <p>
            By forcing trades to route through privileged liquidity pool pairs, the centralized front-end design of UniSwap is allowing vampiric arbitrage bots to drain the prices of certain tokens.
</p><p>
We started to work on this issue, challenging ourselves in a R&D mission to overcome these limits and to simplify the swap process of the AMM.
</p><p>
We believe that a safe restart should begin from the single ERC20 routing of UniSwap v1 in order to ensure stability and optimized gas consumptions.
</p><p>
We will take advantage of DFOHub microservices architecture and its next evolution to v0.5 to allow the community to self-determine the future and success of their investments in Materia.
            </p>
            <StyledTitleAfter>uSD Routing</StyledTitleAfter>
            <p>
            uSD will be the default choice for routing. We believe that betting on a super-stable coin will allow liquidity providers to experiment a reduced slippage and impermanent loss compared to ETH. 
            </p>
            <StyledTitleAfter>Lego Swap via ETHItems</StyledTitleAfter>
            <p>
            Materia is designed to leverage the power of ETHItem standard, taking advantage of its underneath support for both ERC20 and ERC1155 standards. This choice will allow a native support even for NFT tokens and the possibility to take advantage of **batch transfer** function, efficiently creating complex LEGO Swaps, saving gas costs.
            </p>
          </StyledBoxFade>
        </StyledImgSection>
      </StyledSectionFlex>
    </>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px' }}>
        <StyledGoal style={{ width: '100%', maxWidth: '450px' }}>
          <StyledTitleAfter>Protocol Overview</StyledTitleAfter>
          <p>There are 5 main functions in the protocol.</p>
        </StyledGoal>
      </StyledSectionFlex>
      <StyledSectionFlex wrapSmall={false} style={{ paddingTop: '2rem' }}>
        <MiniCard
          href="#"
          title={'Swap'}
          desc={'Swap between any two supported token through an automatic wrap into the ethitem standard'}
          backgroundColor={'#377e9a'}
          color={'white'}
        />
        <MiniCard
          href="#"
          title={'Pool'}
          desc={'All the liquidity is available through a bridge token (uSD) and an Item. Materia is the very first dollar based DEX'}
          backgroundColor={'#377e9a'}
          color={'white'}
        />
        <MiniCard
          href="#"
          title={'Liquidity Mining'}
          desc={'The incentive to liquidity providers to earn fees and governance tokens by providing liquidity'}
          backgroundColor={'#377e9a'}
          color={'white'}
        />
        <MiniCard
          href="#"
          title={'Exping (coming soon)'}
          desc={'Why farm when you can exp? News will be available very soon…'}
          backgroundColor={'#377e9a'}
          color={'white'}
        />
        <MiniCard
          href="#"
          title={'Microservices'}
          desc={'Take advantage of DFOHub microservices architecture'}
          backgroundColor={'#377e9a'}
          color={'white'}
        />
      </StyledSectionFlex>
    </>
  )
}

const StyledGoal = styled.div`
  color: ${({ theme }) => theme.colors.link};
  border-radius: 0.5rem;
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
  }
  @media (max-width: 960px) {
    margin-top: 2rem;
    p {
      max-width: 450px;
    }
  }
`
