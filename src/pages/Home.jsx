import Navbar from "../components/Navbar";
import styled from 'styled-components'
import backgroundMobile from '../assets/home/background-home-mobile.jpg'
import backgroundTablet from '../assets/home/background-home-tablet.jpg'
import backgroundDesktop from '../assets/home/background-home-desktop.jpg'

const Background = styled.div`
  height: 100vh;
    background: url(${backgroundMobile}) no-repeat center ;
    background-size: cover;
    overflow-y: scroll;
      
  
    @media (min-width: 481px){
      background-image: url(${backgroundTablet});
    }
    @media (min-width: 769px){
      background-image: url(${backgroundDesktop});

    }
`

const ContentContainer = styled.div`
  display: flex;
  height: calc(100vh - 144px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    &:*{
      width: 50vh;
    }
  }
`

const TextContainer = styled.div`
    margin: 0 1.5rem;
    text-align: center;
    padding-top: 2rem;
    @media(min-width: 768px){
    }

`

const PreSpan = styled.span`
    display: block;
    color: #D0D6F9;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.7px;

    @media(min-width: 481px){
      font-size: 20px;
    }
    @media(min-width: 768px){
      text-align: start;
    }

`

const SpaceHeader = styled.h1`
  font-family: "Bellefair";
  color: #FFFFF;
  font-size: 80px;
  text-transform: uppercase;
  height: fit-content;
  padding: 3rem 0;

  @media(min-width: 481px){
    font-size: 150px;
  }
`

const HomeText = styled.p`
  margin: auto;
  max-width: 300px;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0;
  color: #D0D6F9;

  @media(min-width: 481px){
    font-size: 16px;
    line-height: 28px;
    max-width: 450px;
  }
  @media(min-width: 768px){
    text-align: start;
  }
`

const ExploreContainer = styled.a`
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    height: 140px;
    width: 140px;
    border-radius: 150px;
    text-decoration: none;
    cursor: pointer;
    margin: 1rem;


    @media(min-width: 481px){
      min-height: 170px;
      min-width: 170px;
      margin-bottom: 2rem;
    }
    @media(min-width: 768px){
      min-height: 274px;
      min-width: 274px; 
      margin: 0 15px 0 0;
      
    }
`

const Explore = styled.span`
    z-index: 1;
    color: #0B0D17;
    font-family: 'Bellefair';
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 1.25px;
    cursor: pointer;
    opacity: 1;
    pointer-events: none;


`

const ExploreHover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 150px;
    background-color: white;
    opacity: .25;
    transition: all .5s;
    &:hover{
      transform: scale(1.2);
    @media(min-width: 481px){
      &:hover{
        transform: scale(1.2);
    }
    @media(min-width: 769px){
      &:hover{
        transform: scale(1.1);
    }
    @media(min-width: 850px){
      &:hover{
        transform: scale(1.2);
    }

`



function Home() {
  return (
    <Background>
    <Navbar pageName={'home'}/>
    <ContentContainer>
      <TextContainer>
      <PreSpan>So, you want to travel to</PreSpan>
      <SpaceHeader>Space</SpaceHeader>
      <HomeText>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</HomeText>

      </TextContainer>
      <ExploreContainer href='/Destination'>
        <Explore>Explore</Explore>
        <ExploreHover></ExploreHover>
      </ExploreContainer>

    </ContentContainer>
  </Background>
  
  )
}
export default Home