import React from "react";
import styled from "styled-components";

import Me from '../assets/Images/profile-img.png';

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color:${props => props.theme.body} ;
  padding: 2rem;
  cursor: pointer;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  &>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`
const Into = () => {
    return(
        <Box>
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Developer</h3>
                    <h6>I desing and Code Simple yet beatiful website</h6>
                </Text>
            </SubBox>
            <SubBox>
               <div>
                   <img className='pic' src={Me} alt="Profile"/>
               </div>
            </SubBox>
        </Box>
    )
}
export default Into