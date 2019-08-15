import React from "react";
import styled from "styled-components";


/*header styles: header container, logo, header text */

const Header = styled.header`
    display: flex;
    flex-wrap: no-wrap;    
    width: 80%;
    height: 200px;
    font-family: sans-serif;
    margin-top: 50px;    
   

`;

const AppLogo = styled.image`
    animation: App-logo-spin infinite 20s linear;
    height: 20vmin;
    pointer-events: none;

    @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      text-align: center;
      

`;

const MainHeading = styled.h1`
  display: flex;  
  font-size: 5rem;
  text-transform: uppercase;
  color: dodgerblue;

`;



export {Header, AppLogo, MainHeading};