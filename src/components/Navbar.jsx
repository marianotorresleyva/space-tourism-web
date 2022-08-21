import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/shared/logo.svg";
import { ReactComponent as Hamburger } from "../assets/shared/icon-hamburger.svg";
import styled from "styled-components";

const NavHeader = styled.header`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    margin-bottom: 2rem;

    @media (min-width: 481px) {
        padding-top: 0;
    }
`;

const LogoWrapper = styled.div`
    margin-left: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HamBurgerWrapper = styled.div`
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
    z-index: 5;
    cursor: pointer;
    transition: transform 0.5s;
    transform: rotate(${({ toggle }) => (toggle ? "-90deg" : "0deg")});
    @media (min-width: 481px) {
        display: none;
    }
`;

const NavContainer = styled.nav`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: transparent;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 96px);
    padding-top: 96px;
    transition: transform 0.5s;
    transform: scaleY(${({ toggle }) => (toggle ? "1" : "0")});
    backdrop-filter: blur(50px);
    & a:first-child {
        border-top: 2px solid black;
    }

    @media (min-width: 481px) {
        position: static;
        flex-direction: row;
        width: 65%;
        height: 96px;
        padding-top: 0px;

        border-top: none;
        transition: none;
        background-color: rgba(255, 255, 255, 0.04);

        & a:first-child {
            border-top: none;
        }
    }
    @media (min-width: 769px) {
        backdrop-filter: blur(5px);
        max-width: 1000px;
        width: 65%;
    }
`;

const AContainer = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid black;
    text-decoration: none;
    user-select: none;

    @media (min-width: 481px) {
        flex-direction: row;
        border-bottom: none;
        color: white;
    }
`;

const NavText = styled.span`
    cursor: pointer;
    text-align: center;
    

    @media(min-width: 481px){
        padding-top 40px;
        padding-bottom: ${(prop) => (prop.currPage ? "37px" : "37px")};
        padding-left: 5px;
        padding-right: 5px;
        border-bottom: ${(prop) =>
            prop.currPage
                ? "3px solid rgba(255,255,255)"
                : "3px solid transparent"};
        transition: border-bottom .3s;
        
        &:hover{
            padding-bottom: 37px;
            
            ${(prop) =>
                prop.currPage
                    ? ""
                    : "border-bottom: 3px solid rgba(255,255,255,.5)"};
        }
    }


`;

const BoldSpan = styled.span`
    font-weight: 700;
    letter-spacing: 2.7px;
    z-index: 2;
    @media (min-width: 481px) {
        display: none;
    }
    @media (min-width: 769px) {
        display: initial;
    }
`;

function Navbar({ pageName }) {
    const [toggleNav, setToggleNav] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setWidth(window.innerWidth);
            if (width > 480) {
                setToggleNav(true);
            } else {
                setToggleNav(false);
            }
        };
        updateWindowDimensions();
        console.log();

        window.addEventListener("resize", updateWindowDimensions);

        return () =>
            window.removeEventListener("resize", updateWindowDimensions);
    }, [width]);

    return (
        <NavHeader>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>

            <HamBurgerWrapper
                toggle={toggleNav}
                onClick={() => setToggleNav(!toggleNav)}
            >
                <Hamburger fill={toggleNav ? "#000" : "#D0D6F9"} />
            </HamBurgerWrapper>

            <NavContainer toggle={toggleNav}>
                <AContainer to="/">
                    <NavText currPage={pageName === "home" ? true : false}>
                        <BoldSpan>00</BoldSpan> Home
                    </NavText>
                </AContainer>
                <AContainer to="/destination">
                    <NavText
                        currPage={pageName === "destination" ? true : false}
                    >
                        <BoldSpan>01</BoldSpan> Destination
                    </NavText>
                </AContainer>
                <AContainer to="/crew">
                    <NavText currPage={pageName === "crew" ? true : false}>
                        <BoldSpan>02</BoldSpan> Crew
                    </NavText>
                </AContainer>
                <AContainer to="/technology">
                    <NavText
                        currPage={pageName === "technology" ? true : false}
                    >
                        <BoldSpan>03</BoldSpan> Technology
                    </NavText>
                </AContainer>
                <AContainer to="/MyComponent">
                    <NavText
                        currPage={pageName === "MyComponent" ? true : false}
                    >
                        <BoldSpan>04</BoldSpan> MyComponent
                    </NavText>
                </AContainer>
            </NavContainer>
        </NavHeader>
    );
}
export default Navbar;
