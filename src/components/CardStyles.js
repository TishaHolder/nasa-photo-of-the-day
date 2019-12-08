import React from "react";
import styled from "styled-components";


/*card styles: card container, picture, title text, and date */

//photo of the day container
const CardContainer = styled.div`
    display: flex;    
    flex-direction: column; 
    justify-content: center;
    align-items: center;       
    width: 80%;      
    height: auto;
    font-family: sans-serif;  
        

    @media screen and (max-width: 800px) {
        width: 100%;
          
      }
  
      @media screen and (max-width: 500px) {
        width: 100%;
          
      }   
   
`;

//has the date picker
const PhotoAndCalendar = styled.div`      
    display: flex;
    width: 70%;    
    height:auto;
    flex-direction: column;

    @media screen and (max-width: 800px) {
      width: 100%;
      
        
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      
        
    }
    
      
`;

//has picture title and photo
const PhotoOfTheDay = styled.div`
    height: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;      
    
         
`;

const CalendarPhotoTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;

const PictureTitle = styled.h2`
  display: flex;  
  font-size: 2vw;
  text-transform: uppercase;
  color: red;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
   font-size: 4vw;
      
  }

  @media screen and (max-width: 500px) {
    font-size: 4vw;
      
  }

`;

const Image = styled.img`

    width: 100%; 

    @media screen and (max-width: 800px) {
        width: 100%;
        border-radius: 25%;
          
      }
  
      @media screen and (max-width: 500px) {
        width: 100%;
        border-radius: 0;
          
      }
         
`;

//has description text
const ParagraphDiv = styled.div`
    display:flex;
    width: 100%;    
    height: auto;   

    @media screen and (max-width: 800px) {
      width: 100%;      
        
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      height: auto;
        
    }

`;

//has paragraph description
const ParagraphDescription = styled.p`
    text-align: justify;    

`;

//has title, picture, and text
/*height: 700px;*/
const InnerContainer = styled.div`    
    display: flex;
    width: 70%;    
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    @media screen and (max-width: 800px) {
      width: 100%;
      
        
    }

    @media screen and (max-width: 500px) {
      width: 100%;
     
        
    }

`;


export {CardContainer,  PhotoAndCalendar, InnerContainer, ParagraphDiv, CalendarPhotoTitle, PhotoOfTheDay, Image, PictureTitle, ParagraphDescription};