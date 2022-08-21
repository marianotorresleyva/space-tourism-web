import styled from "styled-components"

const Photo = styled.img`
  margin: 0 auto 1.5rem auto;
  width: 100%;
  @media(min-width: 769px){
    width: 350px;
  }
  @media(min-width: 1200px){
    width: unset;

  }
`

function TechPicture({name, orientation}) {


  return (
    <Photo src={name ? require(`../assets/technology/image-${name.replace(' ', '-').toLowerCase()}-${orientation}.jpg`) : ''}/>
  )
}
export default TechPicture