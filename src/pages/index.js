import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { useDarkMode } from '../contexts/Application'
import { Button } from '../components/button'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
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
`

const StyledProductImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 600px;
  max-width: 800px;
  background-color: none;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: 300px;
    max-width: 300px;
  } 
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 60px;
  font-weight: 900;
  margin: 2rem 0 2rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
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
  font-family: 'Circular Std';
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
      batchswapImage: file(relativePath: { eq: "batchswap-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      batchswapImageLight: file(relativePath: { eq: "batchswap-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      packageDeal: file(relativePath: { eq: "packageDeal-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      packageDealLight: file(relativePath: { eq: "packageDeal-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
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

const StyledBodySubTextGrey = styled.h3`
  color:#8f8f8f;
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
        Power up Defi possibilities with batch swap technology!
      </h1>
      <StyledBodySubTextGrey>
        Materia’s token <b>GIL</b> is the backbone of the initiative. Token holders have full access to batchswapping as well as control over governance.
      </StyledBodySubTextGrey>
      <StyledBodySubTextGrey>
        Through GIL, the entire community can actively participate in its evolution, propose new features, and vote for their implementation.
        </StyledBodySubTextGrey>
      <div class="divider"></div>
      <div class="homeSloganContainer">
        <StyledNormalImage2 fadeIn={false} fluid={props.data.materiaIconsImage.childImageSharp.fluid} />
      </div>
    </StyledBodySubText>
  )
}

const InfoSection = props => {
  const [darkMode] = useDarkMode()

  return (
    <>
      <StyledSectionTitle>The Materia protocol</StyledSectionTitle>
      <StyledBodySubTextGrey>
        Batchswapping allows users to swap multiple tokens in one single transaction saving the user gas and time.
        It also allows seemless compatability with ERC20, ERC721 and ERC1155 standards enabling their total interoperability. <br />
        Swap between ERC-20, ERC-721, and ERC-1155 quickly and efficiently within the Materia Dex<br />
        Check out the <b><Link to="/docs/materia">documentation</Link></b>.
      </StyledBodySubTextGrey>
      <StyledItemRow>
        <StyledExternalLink href={'https://materia.exchange/#/uni-batch-swap'} target="_blank">
          {darkMode ? <StyledProductImage fadeIn={false} fluid={props.data.batchswapImage.childImageSharp.fluid} /> : <StyledProductImage fadeIn={false} fluid={props.data.batchswapImageLight.childImageSharp.fluid} />}
        </StyledExternalLink>
      </StyledItemRow>
      <StyledBodySubText>
        Materia will soon implement the first decentralized service based on batch swap. Stay tuned for the "Package Deal" release...
      </StyledBodySubText>

      <StyledSectionTitle>What Is a Package Deal?</StyledSectionTitle>
      <StyledBodySubTextGrey>
        A package deal is an order or transaction that contains a number of smaller exchange or transaction items that must be completed simultaneously, or not at all. Package deals allow traders to ensure specific prices or times to maturity for multiple assets.
      </StyledBodySubTextGrey>
      <StyledItemRow>
        <StyledExternalLink href={'https://covenants.eth.link/#/wusd'} target="_blank">
        {darkMode ? <StyledProductImage fadeIn={false} fluid={props.data.packageDeal.childImageSharp.fluid} /> : <StyledProductImage fadeIn={false} fluid={props.data.packageDealLight.childImageSharp.fluid} />}
        </StyledExternalLink>
      </StyledItemRow>

      <StyledSectionTitle>Growing community</StyledSectionTitle>
      <StyledBodySubTextGrey>
        Community is at the center of Materia.  We base our R&D initiatives around simplifying their experience.  The community will be in full control of the project via governance. The team is always
        available on Discord and Telegram.  We encourage you to join and meet the community.</StyledBodySubTextGrey>
    </>
  )
}


