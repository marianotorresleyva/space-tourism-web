import Navbar from "../components/Navbar";
import styled from 'styled-components'
import backgroundMobile from '../assets/crew/background-crew-mobile.jpg'
import backgroundTablet from '../assets/crew/background-crew-tablet.jpg'
import backgroundDesktop from '../assets/crew/background-crew-desktop.jpg'
import {useEffect, useState} from 'react'
import data from '../data/data.json'
import CrewPicture from "../components/CrewPicture";

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

const PageHeader = styled.h1`
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  text-align: center;
  
  margin-bottom: 2rem;

  @media(min-width: 481px){
    text-align: start;
    margin-left: 0rem;
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

const MainContainer = styled.div`
    margin: 0 1rem;
    @media(min-width: 769px){
        max-width: 744px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    @media(min-width: 1050px){
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 2rem;
    }
 
`

const ContentContainer = styled.div`
    @media(min-width: 481px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
    @media(min-width: 769px){
        display: grid;
        height: calc(100vh - 188px);
        gap: 0;
        justify-content: space-between;
        max-width: 1600px;
        margin: 0 auto;
    }
`

const TextWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        text-align: center;
        max-width: 350px;
        @media(min-width: 481px){
            max-width: 600px;
        }
        @media(min-width: 769px){
            grid-column-start: 1;
            grid-column-end: 1;
            grid-row-start: 1;
            grid-row-end: 2;
            align-self: center;
            width: 440px;
            text-align: start;
        }
`

const JobTitle = styled.h2`
    font-size: 16px;
    text-transform: uppercase;
    opacity: 50%;
    margin-bottom: .5rem;
    @media(min-width: 481px){
        font-size: 24px;
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

const Bio = styled.p`
    max-width: 300px;
    margin: 0 auto;
    line-height: 25px;
    @media(min-width: 481px){
        max-width: 400px;
        margin-bottom: 2rem;
    }
    @media(min-width: 769px){
        margin: 0 0 1.5rem 0;
        height: 100px;
    }
`

const CustomHR = styled.hr`
    height: 1px;
    background-color: #383B4B;
    margin: 0 0 1.5rem 0;
    border: none;
    @media(min-width: 481px){
        display: none;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;  
    width: 150px;
    margin: 0 auto;

    @media(min-width: 481px){
        margin-bottom: 2rem;
    }
    @media(min-width: 481px){
        margin-bottom: 2rem;
    }
    @media(min-width: 769px){
        align-self: start;
        grid-column-start: 1;
        grid-row-start: 2;
        margin: 0;
    }


  
`

const DestinationButtons = styled.button`
    max-width: 12px;
    height: 12px;
    border: none;
    background-color: rgba(255,255,255,.17);
    border-radius: 500px;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: background-color .3s;
    
    
  
    &:nth-of-type(${props => props.currSelected + 1}){
        background-color: rgba(255,255,255,1);
    }

    &:hover{
      background-color: rgba(255,255,255,.5);
    }
`




function Crew() {

    const [crew, setCrew] = useState([])
    const [selected, setSelected] = useState(0)
    
    useEffect(() => {
        setCrew(data.crew[selected])
    }, [selected])
  


  return (
    <Background>
        <Navbar pageName={'crew'}/>
        <MainContainer>
        <PageHeader><NumSpan>02</NumSpan>Meet your crew</PageHeader>
        {!crew ? <h1>Loading</h1> : 
            <ContentContainer>


                <CrewPicture name={crew !== undefined ? crew.name : ''}/>
                <CustomHR/>

                <ButtonWrapper>
                <DestinationButtons currSelected={selected} onClick={() => setSelected(0)}></DestinationButtons>
                <DestinationButtons currSelected={selected} onClick={() => setSelected(1)}></DestinationButtons>
                <DestinationButtons currSelected={selected} onClick={() => setSelected(2)}></DestinationButtons>
                <DestinationButtons currSelected={selected} onClick={() => setSelected(3)}></DestinationButtons>
            </ButtonWrapper>

                <TextWrapper>
                <JobTitle>{crew.role}</JobTitle>
                <Name>{crew.name}</Name>
                <Bio>{crew.bio}</Bio>
                </TextWrapper>
            </ContentContainer>
}
        </MainContainer>


    </Background>
  )

}
export default Crew