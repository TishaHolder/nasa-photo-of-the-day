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

    @media screen and (max-width: 800px) {
      width: 100%;
        
    }

    @media screen and (max-width: 500px) {
      width: 100%;
        
    }   

`;

const AppLogo = styled.image`
    width: 30%;
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
      
      @media screen and (max-width: 800px) {
        width: 30%;
        
          
      }
  
      @media screen and (max-width: 500px) {
        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        width: 50%;
        height: 50%;
       
          
      }
      

`;

const MainHeading = styled.h1`
  width: 70%;
  display: flex;  
  font-size: 5vw;
  text-transform: uppercase;
  color: dodgerblue;

  @media screen and (max-width: 800px) {
    font-size: 7vw;
    width: 70%;
      
  }

  @media screen and (max-width: 500px) {
    font-size: 7vw;
    width: 50%;   
      
  } 
 

`;



export {Header, AppLogo, MainHeading};