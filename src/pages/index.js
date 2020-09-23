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
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
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
  margin: 3rem 0 4rem 0;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 54px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'TitilliumWeb', sans-serif;
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 2rem 0 2rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
    padding: 2rem;
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 400;
  }
`

const StyledUnicornImage = styled(Img)`
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

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* max-width: 650px; */
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

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      unicornImage: file(relativePath: { eq: "img-home.png" }) {
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
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'World First completely decentralized exchange governed by On-Chain, Enterprise-Free Organization based on a fully decentralized protocol for automated liquidity provision on Ethereum'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>World First completely decentralized exchange governed by On-Chain, Enterprise-Free Organization.</StyledBodyTitle>
          <span>
            <Button href="https://app.materiadex.com/">Launch Dapp</Button>
            <Button to="/strategy" as={Link} outlined>
              Discover
            </Button>
          </span>
        </StyledTitle>
        <SummarySection data={data} />
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

      <StyledImgSection>
        <h1>
          <b>Materia</b> is the world's first completely decentralized exchange controlled by On-Chain, Enterprise-Free Organization based on <b>DFOHub</b> protocol.
        </h1>
        <p>
          Materia’s token <b>GIL</b> is the backbone of the entire initiative.<br />
          Token holders have <b>full ownership of the project</b> and its future, without any kind of external control.
        </p>
        <p>
          Materia Dapp is the first DEX completely governed through its token GIL. Community can evolve it as needed, proposing new features and <b>voting</b> for their implementation.
        </p>
        <Button as={Link} outlined to="/incentives">
          Incentives
        </Button>
      </StyledImgSection>

      <StyledImgSection>
        {/* <MiniNewInfo to="/about"> */}
        <StyledUnicornImage fadeIn={false} fluid={props.data.unicornImage.childImageSharp.fluid} />
        {/* </MiniNewInfo> */}
      </StyledImgSection>
    </StyledSectionFlex>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px' }}>
        <StyledGoal style={{ width: '100%', maxWidth: '450px' }}>
          <h1>Services</h1>
          <p>Our aim is to create a full ecosystem around the voting token GIL, check out our services!</p>
        </StyledGoal>
      </StyledSectionFlex>
      <StyledSectionFlex wrapSmall={false} style={{ paddingTop: '2rem' }}>
        <MiniCard
          href="/soon"
          title={'Swap'}
          desc={'Swap between any two supported tokens by paying a 0.3% swap fee'}
          backgroundColor={'#f33a33'}
          color={'white'}
        />
        <MiniCard
          href="/soon"
          title={'Pool'}
          desc={'Reserve two ERC-20 tokens and receive swap fee paid by users who swap through liquidity pools'}
          backgroundColor={'#10a54d'}
          color={'white'}
        />
        <MiniCard
          href="/soon"
          title={'Derivative & NFT DEX'}
          desc={'Use our experimental derivative and NFT marketplace'}
          backgroundColor={'#3977ed'}
          color={'white'}
        />
        <MiniCard
          href="/soon"
          title={'Farming'}
          desc={'Stake and farm GIL or LPs receiving uGIL as derivative collateral'}
          backgroundColor={'#fcb42c'}
          color={'white'}
        />
        <MiniCard
          href="/soon"
          title={'Analytics'}
          desc={'Discover all the best insights'}
          backgroundColor={'#b911b3'}
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
