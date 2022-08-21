import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Technology from "./pages/Technology";
import MyComponent from "./pages/TestPage";

const GlobalStyle = createGlobalStyle`
    body{
      color: white;
      box-sizing: border-box;
      font-family: 'Barlow Condensed', sans-serif;
    }

    h1{
      font-size: 150px;
    }

    h2{
      font-size: 100px;
      font-family: "Bellefair"
    }

    h3{
      font-size: 56px;
    }

    h4{
      font-size: 32px;
    }

    h5{
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 28px;
      letter-spacing: 4.75px;
    }
    span{
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 16px;
      letter-spacing: 2.7px;
    }
    p{
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 0;
      color: #D0D6F9;
    }
    `;

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/destination" element={<Destination />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/MyComponent" element={<MyComponent />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
