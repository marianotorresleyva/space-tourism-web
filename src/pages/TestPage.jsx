import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Navbar from "../components/Navbar";

const GlobalStyle = createGlobalStyle`
    *{

        margin:0;
        padding:0;
        color: black;
        box-sizing: border-box;
    }

`;

const centerContent = {
    display: "block",
    width: "100vw",
    height: "100px",
    textAlign: "center",
};

const HelloWorld = styled.h1`
    font-size: 22px;
    text-align: center;
`;
const Link = ({ className, children }) => (
    <a href="/MyComponent" className={className}>
        {children}
    </a>
);

const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;
export default function MyComponent(props) {
    let [count, setCount] = useState(0);

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <HelloWorld>Hello World!</HelloWorld>
            <button
                className={"Mavari"}
                style={centerContent}
                onClick={() => setCount(count + 1)}
            >
                <p>{count}</p>
            </button>
            <Link>Unstyled, boring Link</Link>
            <StyledLink>Styled, exciting Link</StyledLink>
            <Rotate>&lt; 💅🏾 &gt;</Rotate>
        </>
    );
}
