import styled from "styled-components";

const PhotoWrapper = styled.div`
    @media (min-width: 769px) {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        width: 300px;
        height: 300px;
        align-self: middle;
    }
    @media (min-width: 1050px) {
        align-self: end;

        grid-row-end: 3;
        width: unset;
        height: unset;
    }
`;

const Photo = styled.img`
    max-height: 223px;

    display: block;
    margin: 0 auto;

    @media (min-width: 481px) {
        max-height: 532px;
    }
    @media (min-width: 769px) {
        height: 300px;
        width: 300px;
    }
    @media (min-width: 1050px) {
        width: unset;
        height: unset;
        max-height: none;
    }
`;

function CrewPicture({ name }) {
    return (
        <PhotoWrapper>
            <Photo
                src={
                    name
                        ? require(`../assets/crew/image-${name
                              .replace(" ", "-")
                              .toLowerCase()}.png`)
                        : ""
                }
            />
        </PhotoWrapper>
    );
}
export default CrewPicture;
