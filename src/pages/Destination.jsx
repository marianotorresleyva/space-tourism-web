import Navbar from "../components/Navbar";
import DestinationPicture from "../components/DestinationPicture";
import styled from 'styled-components'
import backgroundMobile from '../assets/destination/background-destination-mobile.jpg'
import backgroundTablet from '../assets/destination/background-destination-tablet.jpg'
import backgroundDesktop from '../assets/destination/background-destination-desktop.jpg'
import data from '../data/data.json'
import { useEffect, useState } from "react";



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
      @media(min-width: 769px){
        max-width: 1200px;
        margin: 3rem auto 0 auto;
        padding: 0;
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
  }
  @media(min-width: 769px){
    font-size: 28px;
    
    margin-bottom: 1rem;
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

const ContentContainer = styled.div`
  display: flex;
  height: calc(100vh - 144px);
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  

  @media(min-width: 769px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;

    &:*{
      width: 50vh;
    }
  }
`

const TextWrapper = styled.div`
    @media(min-width: 769px){
      max-width: 445px;
      text-align: start;
    }
`


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;  

  @media(min-width: 481px){
    margin: 0 auto 2rem auto;
    width: 350px;
    justify-content: space-evenly;
  }
  @media(min-width: 769px){
    margin: 1rem 0 .5rem 0;
    justify-content: start;
    
}

  
`

const DestinationButtons = styled.button`
    border: none;
    border-bottom: 3px solid transparent;
    background-color: transparent;
    font-family: 'Barlow Condensed';
    font-size: 14px;
    letter-spacing: 2.36px;
    text-transform: uppercase;
    color: #D0D6F9;
    padding-bottom: 12px;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: border-bottom .3s;
    
    
  
    &:nth-of-type(${props => props.currSelected + 1}){
      border-bottom: 3px solid rgba(255,255,255,.5);
      padding-bottom: 12px;
    }

    &:hover{
      border-bottom: 3px solid white;
      padding-bottom: 12px;
    }

    @media(min-width: 769px){
      margin-right: 2rem;
    }
`

const DestinationName = styled.h1`
  font-size: 56px;
  font-family: 'Bellefair';
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  @media(min-width: 769px){
    font-size: 100px;
    text-align: start
}

`

const Description = styled.p`
    text-align: center;
    line-height: 25px;
    margin: 0 auto 1.5rem auto;
    max-width: 360px;
    @media(min-width: 481px){
      max-width: 300px;
    }
    @media(min-width: 769px){
      text-align: start;
      margin: 0 0 1.5rem 0;
      max-width: 350px;
      height: 110px;
    }
`

const CustomHR = styled.hr`
    height: 1px;
    background-color: #383B4B;
    margin: 0;
    border: none;
`

const DataInfoWrapper = styled.div`
    @media(min-width: 481px){
      display: flex; 
      justify-content: space-around;
      width: 400px;
      margin: 0 auto;
    }
    @media(min-width: 769px){
      justify-content: start;
      
      margin: 0
    }
`

const DataInfoSingleWrapper = styled.div`
@media(min-width: 769px){
  margin-right: 3rem;
}

`

const InfoSpan = styled.span`
    display: block;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 14px;
    color: #D0D6F9;

    &:nth-of-type(1){
      margin-top: 2rem;
    }
    @media(min-width: 769px){
      text-align: start;
    }
`

const DataSpan = styled.span`
    display: block;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 28px;
    @media(min-width: 769px){
      text-align: start;
    }
`




function Destination() {

  const [destination, setDestination] = useState(null)
  const [selected, setSelected] = useState(0)
  


  useEffect(() => {
    setDestination(data.destinations[selected])
    
  }, [selected])

  useEffect(() => {

  }, [destination])




  return (
    
    <Background>
        <Navbar pageName={'destination'}/>
        <MainContainer>
        <PageHeader><NumSpan>01</NumSpan> Pick your destination</PageHeader>
          {!destination ? <h1>Loading</h1> : 
        <ContentContainer>
          <DestinationPicture name={destination.name}/>

         <TextWrapper>
          
          <ButtonWrapper>
            <DestinationButtons currSelected={selected} onClick={() => setSelected(0)}>Moon</DestinationButtons>
            <DestinationButtons currSelected={selected} onClick={() => setSelected(1)}>Mars</DestinationButtons>
            <DestinationButtons currSelected={selected} onClick={() => setSelected(2)}>Europa</DestinationButtons>
            <DestinationButtons currSelected={selected} onClick={() => setSelected(3)}>Titan</DestinationButtons>
          </ButtonWrapper>
          

           <DestinationName>{destination.name}</DestinationName>
           <Description>{destination.description}</Description>

           
           <CustomHR/>

           <DataInfoWrapper>
            <DataInfoSingleWrapper>
              <InfoSpan>Avg. Distance</InfoSpan>
              <DataSpan>{destination.distance}</DataSpan>
            </DataInfoSingleWrapper>
            <DataInfoSingleWrapper>
              <InfoSpan>Est. Travel Time</InfoSpan>
              <DataSpan>{destination.travel}</DataSpan>
            </DataInfoSingleWrapper>


           </DataInfoWrapper>          
          </TextWrapper> 
        </ContentContainer>
}
        </MainContainer>
    </Background>
    
  )
}

export default Destination