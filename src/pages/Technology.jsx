import Navbar from "../components/Navbar";
import styled from 'styled-components'
import backgroundMobile from '../assets/technology/background-technology-mobile.jpg'
import backgroundTablet from '../assets/technology/background-technology-tablet.jpg'
import backgroundDesktop from '../assets/technology/background-technology-desktop.jpg'
import {useEffect, useState} from 'react'
import data from '../data/data.json'
import TechPicture from "../components/TechPicture";

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
`

const MainContainer = styled.div`
    margin: 0;
`

const ContentContainer = styled.div`
    margin: 0;
    @media(min-width: 769px){
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin: auto;
        max-width: 1400px;


    }
   
`

const DesktopContainer = styled.div`
        @media(min-width: 769px){
            display: flex;
            margin: auto;

        }
`

const PageHeader = styled.h1`
    font-size: 16px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    text-align: center;
    
    margin-bottom: 2rem;

    @media(min-width: 481px){
        text-align: start;
        margin-left: 2rem;
        font-size: 20px;
    }
    @media(min-width: 769px){
        font-size: 28px;
    }
`

const NumSpan = styled.span`
    font-weight: bold;
    opacity: .25;
    margin-right: .8rem;
    @media(min-width: 769px){
        font-size: 28px;
    }
    
`

const TextWrapper = styled.div`
    text-align: center;
    @media(min-width: 769px){
        margin: 0 1rem;
    }
`

const Terminology = styled.span`
    font-size: 14px;
    letter-spacing: 2.36px;
    color: #D0D6F9;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 1rem;
    @media(min-width: 481px){
        font-size: 16px;
        letter-spacing: 2.7px;
    }

`

const Name = styled.h1`
    font-size: 24px;
    font-family: 'Bellefair';
    text-transform: uppercase;
    margin-bottom: 1rem;
    @media(min-width: 481px){
        font-size: 40px;
    }
`

const Description = styled.p`
    max-width: 320px;
    margin: 0 auto;
    @media(min-width: 481px){
        max-width: 400px;
        font-size: 16px;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;  
    width: 180px;
    margin: 0 auto;
    @media(min-width: 769px){
        flex-direction: column;
        align-items: center;
    }


`

const DestinationButtons = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: rgba(255,255,255,0);
    border-radius: 500px;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: background-color .3s, border-color .3s;
    color: white;
    font-family: 'Bellefair';
    font-size: 16px;
    border: 1px solid rgba(255,255,255,.25);
    @media(min-width: 769px){
        height: 80px;
        width: 80px;

    }
    
    
  
    &:nth-of-type(${props => props.currSelected + 1}){
        background-color: rgba(255,255,255,1);
        color: black;
    }

    &:hover{
      border-color: rgba(255,255,255,1);
    }
`

function Technology() {

    const [tech, setTech] = useState({})
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTech(data.technology[selected])
        
    }, [selected, tech])

    const [width, setWidth] = useState(0);
    const [orientation, setOrientation] = useState('')

    useEffect(() => {
      const updateWindowDimensions = () => {
        setWidth(window.innerWidth)
        if(width > 769){
            setOrientation('portrait')
        } else {
            setOrientation('landscape')
        }
      };
      updateWindowDimensions()
  
      window.addEventListener("resize", updateWindowDimensions);
  
      return () => window.removeEventListener("resize", updateWindowDimensions) 

    }, [width]);

  
  return (
    <Background>
    <Navbar pageName={'technology'}/>
    <MainContainer>
            <PageHeader><NumSpan>03</NumSpan>Space launch 101</PageHeader>
            {!tech ? <h1>Loading</h1> : 
        <ContentContainer>

        <TechPicture name={tech.name ? tech.name : ''} orientation={orientation} />

        <DesktopContainer>
        <ButtonWrapper>
                <DestinationButtons currSelected={selected} onClick={() => setSelected(0)}>1</DestinationButtons>
                <DestinationButtons currSelected={selected} onClick={() => setSelected(1)}>2</DestinationButtons>
                <DestinationButtons currSelected={selected} onClick={() => setSelected(2)}>3</DestinationButtons>

            </ButtonWrapper>
           
           
            <TextWrapper>
                <Terminology>The Terminology ...</Terminology>
                <Name>{tech.name}</Name>
                <Description>{tech.description}</Description>
            </TextWrapper>


        </DesktopContainer>

        </ContentContainer>
}
    </MainContainer>
    </Background>
  )
}

export default Technology