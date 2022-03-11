import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import styled from "styled-components";

import UiForm from "./pages/UiForm";
import RhymeSearch from "./pages/AutoComplete";

/***
 * Styled-Component
 */

const NavigationLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: -40px;

  & a {
    background-color: transparent;
    border: 1px solid #266db6;
    box-sizing: border-box;
    color: #00132c;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 16px 23px;
    position: relative;
    text-decoration: none;
    user-select: none;
    touch-action: manipulation;

    &:hover,
    &:active {
      outline: 0;
    }

    &:hover {
      background-color: transparent;
      cursor: pointer;
    }

    &:before {
      background-color: #d5edf6;
      content: "";
      height: calc(100% + 3px);
      position: absolute;
      right: -7px;
      top: -9px;
      transition: background-color 300ms ease-in;
      width: 100%;
      z-index: -1;
    }

    &:hover:before {
      background-color: #6dcff6;
    }

    @media (min-width: 768px) {
      .button-51 {
        padding: 16px 32px;
      }
    }
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <NavigationLinks>
        <Link to="uiform">Previous</Link>
        <Link to="/search">Next</Link>
      </NavigationLinks>
      <Routes>
        <Route path="/" element={<Navigate replace to="/UiForm" />} />
        <Route path="/UiForm" element={<UiForm />} />
        <Route path="/search" element={<RhymeSearch />} />
      </Routes>
    </BrowserRouter>
  );
}
