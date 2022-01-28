import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../../data'


const Container = styled.div`
   width: 100%;
   height : 100vh;
   display : flex;
   position: relative;
   overflow: hidden;
`
const Arrow = styled.div`

   width : 50px;
   height : 50px;
   background-color : rgb(226, 208, 200);
   border-radius : 50%;
   display : flex;
   align-items : center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props => props.direction === "left" && "10px"};
   right : ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index : 2;
`

  const Warraper = styled.div`
    
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slide * -100} vw);
    
`
;
const Slide = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-self: center;
   background-color : #${props => props.bg};
`;
const ImgContainer = styled.div`
   height: 100%;
  flex: 1;
`;
const Image = styled.img`
    height: 80%;

`;
const Info = styled.div`
   flex: 1;  
   padding: 50px;
`;

const Title = styled.h1`
    font-size: 42px;
    letter-spacing: 3px;
`;

const Para = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

`;


const Slider = () => {

  const [slide,setSlide] = useState(0);

  const handleClick = (direction) =>{
      if (direction === "left"){
        setSlide(slide > 0 ? slide-1 : 2)
      }else{
        setSlide(slide < 2 ? slide+1 : 0)
      }
  }




    return (
        <Container>
            <Arrow direction = "left" onClick= {() => handleClick("left")}>
              <ArrowLeftOutlinedIcon/>
            </Arrow>

            <Warraper slide = {slide}>

              {sliderItems.map((item)=>(

              <Slide bg = {item.bg}>
               <ImgContainer>                     
                   <Image src ={item.img}/>
              </ImgContainer>
               <Info>
                 <Title>{item.title}</Title>
                 <Para>{item.describtion}</Para>
                 <Button>Buy Now</Button>
               </Info>
              </Slide>
              ))}
            </Warraper>
            
            <Arrow direction ="right" onClick={() => handleClick("right")} >
              <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider
