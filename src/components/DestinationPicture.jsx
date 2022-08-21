import styled from "styled-components"


const Photo = styled.img`
    width: 170px;
    height: 170px;
    margin-bottom: 1.5rem;

    @media(min-width: 481px){
        margin-right: 1rem;
        margin-bottom: 2.5rem;
        width: 250px;
        height: 250px;
    }
    @media(min-width: 820px){
        
        margin-right: 1rem;
        margin-bottom: 2.5rem;
        width: 300px;
        height: 300px;
    }
    @media(min-width: 972px){
        margin-right: 1rem;
        margin-bottom: 2.5rem;
        width: 445px;
        height: 445px;
    }

`

function DestinationPicture({name}) {
  return (
    <Photo src={name ? require(`../assets/destination/image-${name.toLowerCase()}.png`) : ''} />
  )
}
export default DestinationPicture