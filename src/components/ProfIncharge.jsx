import React from "react";
//for CSS
import styled from "styled-components";
import "../styles/ProfIncharge.css";

//Design assets
import Side_design_1 from "../images/Design/Pro_incharge_img_1.svg"
import Side_design_2 from "../images/Design/Pro_incharge_img_2.svg"
 
//Image
import DemoImage from "../images/professorIncharge.jpg"

//Icons
import Quotes from "../images/Icon/left-quote.png"
import Star from "../images/Icon/star.png"
export const ProfIncharge = () => {
  return (
    <div style={{"background": "#f0f0f0"}}>
    <ProfessorIncharge>
     
        <h2 style={{"paddingTop": "40px"}}>Professor Incharge</h2>
        <PiBox>
          {/* Div that contain Professor Pic and other design*/ }
          <div className="pic">
            <div className="imgframe">
            <img src={Side_design_1} alt="none" className="side_1" />
            <img src={Side_design_2} alt="none" className="side_2" />
            <img src={DemoImage} alt="Professor img" />
            </div>
            
          </div>

          {/* Div that contain Professor details and other design*/ }
          <div className="detail">
           <img src={Quotes} alt="Quotes" /><br/>

           {/* This star contain all the stars */ }
           <Flexbox className="star">
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           <img src={Star} alt="Star" />
           </Flexbox>
           {/* Professor details*/ }
            <p style={{"fontWeight": "500"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At explicabo dolorem sequi molestiae distinctio molestias earum quas eius quis delectus!</p>
           
           
            {/* Professor name and post */ }
            <Flexbox style={{"justifyContent": "space-between"}}>
              <div style={{"marginTop": "50px","width": "firContent"}}>
              <h4 style={{"fontWeight": "500"}}>Dr. Ashok Kumar Mandal</h4>{/* Professor name*/ }
              <h6 style={{"fontWeight": "300"}}>Professor Incharge</h6>{/* Professor Post*/ }
              </div>
              <div style={{"margin": "50px 50px 0 0","width": "firContent"}}>
              
              <h3 style={{"fontWeight": "500","fontSize": "20px"}}>Ecell</h3>{/* Ecell :-)*/ }
              </div>
            </Flexbox>
            </div>
          
        </PiBox>
     
    </ProfessorIncharge>
    </div>
  );
};

const ProfessorIncharge = styled.div`
margin: 0 5% 0 5% ;
font-family: "Inter", sans-serif;
background-color: #f0f0f0;
.detail{
  margin: auto;
  .star{
    img{
      width: 20px;
      margin: 3px;
    }
  }
  p{
    weight: 500;
    font-family: "Inter", sans-serif;
  }
  img{
    width: 25px;
  }
}
.pic{
  width: 50%;
  margin-left: 10%;
  margin-top: 5%;
  @media (max-width: 768px) {
    width: 90%;
    margin 5%;
  }
  .imgframe{
    position: relative;
    width: 330px;
    height: 350px;
    margin: auto;
    border-radius: 10px;
  }
  img{
    height: 350px;
    position: absolute;
    margin: 14px;
    bottom: 0;
  }
  .side_1{
    position: absolute;
    top: -224px;
    left: -59px;
    width: 50px;
  }
  .side_2{
    position: absolute;
    bottom: -196px;
    right: -15px;
    width: 50px;
  }
}
h2{
  font-weight: 500;
  font-size: 30px;
  color: #0b1b35;
  font-family: "Inter", sans-serif;
  text-align: center;
}
`;

const Flexbox = styled.div`
display: flex;
`;
const PiBox = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
`;
export default ProfIncharge;
