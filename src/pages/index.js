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
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 1rem;
  /*color: white*/
  color: #95e1ff;
`

const StyledProductImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 220px;
  max-width: 220px;
  background-color: none;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  /* @media (max-width: 960px) {
    min-width: 120px;
    max-width: 120px;
  } */
`

const StyledBodyTitle = styled.h1`
  /*color: ${({ theme }) => theme.colors.link};*/
  color: #95e1ff;
  font-size: 60px;
  font-weight: 400;
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

export const StyledExternalLink = styled.a`
  font-family: 'GT Haptik Regular';
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  font-size: 24px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardBG};
  border-radius: 12px;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  :hover {
    transform: translate3d(2px, 2px, 10px);
  }
  @media (max-width: 960px) {
    font-size: 20px;
  }
`

const StyledNormalImage2 = styled(Img)`
  max-width: 400px;
  min-width: 250px;
  border-radius: 0px;
  margin: auto;   
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
    color:#95e1ff;
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
padding: 20px;
border-radius: 5px;
transition: transform .33s ease-in-out .66s,opacity .33s ease-in-out .66s,-webkit-transform .33s ease-in-out .66s;
position: relative;
max-width: 700px;
@media (max-width: 375px) {
  max-width: 350px;;
}
`

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
        description={'Multi-standard Decentralized Exchange'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Multi-standard Decentralized Exchange</StyledBodyTitle>

          <StyledItemRow>
            <Button outlined href="https://materia.exchange/">Launch Dapp</Button>
            <Button
              to="/docs/materia"
              as={Link}
            >
              Learn More
            </Button>
          </StyledItemRow>
        </StyledTitle>
        <SummarySection data={data} />
        <InfoSection data={data} />
        <ProductsSection data={data} />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage


const StyledSectionTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  margin-top: 10rem;
  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
    text-align: left;
  }
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
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  text-align: center;
  line-height: 160%;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem;
  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const SummarySection = props => {
  return (
    <StyledBodySubText>
      <h1>
      By implementing the new EthItem protocol, <b>Materia</b> can reduce some of the problems that plague DEXs by break into the world of gamification and NFT exchange.
          </h1>
      <p>
        Materia’s token <b>GIL</b> is the backbone of the entire initiative. Token holders have full ownership of the project and its future, without any external control.
          </p>
      <p>
        Through GIL, the entire community can actively participate in its evolution, propose new features and vote for their implementation.
          </p>
      <div class="divider"></div>
      <div class="homeSloganContainer">
        <StyledNormalImage2 fadeIn={false} fluid={props.data.materiaIconsImage.childImageSharp.fluid} />
        <p>
          <span>Materia</span>
          <span>REAL DECENTRALIZED EXCHANGE</span>
        </p>
      </div>
    </StyledBodySubText>
  )
}

const InfoSection = props => {
  return (
    <>
      <StyledSectionTitle>The Materia protocol</StyledSectionTitle>
      <StyledBodySubText>
        Materia is a DEX based on a multi protocol called ETHItem. Its most important feature is the tokens "harmonizing" with ERC20, ERC721 and ERC1155 standards enabling their total interoperability.<br />
              Each unique NFT ID can now become a source of an ERC20.
        Check out the <b><Link to="/docs/materia">documentation</Link></b>.
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://ethitem.com/'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.ethItemImage.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow>

      <StyledSectionTitle>US Dollar based DEX</StyledSectionTitle>
      <StyledBodySubText>
      Materia uses WUSD as collateral. By decentralizing the distribution of its collateral and being able to balance its stability, WUSD will not suffer any single point of failure; it will only fail if the entire stablecoin industry collapses.      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://covenants.eth.link/#/wusd'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.usdImage.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow>

      <StyledSectionTitle>Growing community</StyledSectionTitle>
      <StyledBodySubText>
      Materia itself sets ambitious challenges to make user needs at the center of the R&D process, simplify their experience, and make them the protagonist of governance.      </StyledBodySubText>
    </>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionTitle>Services</StyledSectionTitle>
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
          desc={'All the liquidity is available through a bridge token (WUSD) and an Item. Materia is the very first dollar based DEX'}
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

