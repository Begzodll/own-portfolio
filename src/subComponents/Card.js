import React from "react";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {Github} from "../Components/AllSvg";
import styled from "styled-components";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all .2s ease;

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
    cursor: pointer;
  }

`

const Title = styled.div`
  font-size: calc(1rem + .5vw);
`
const Description = styled.div`
  font-size: calc(.8em + .3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`
const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${props => props.theme.text};
  }
`
const Tag = styled.div`
  margin-right: 1rem;
  font-size: calc(.8em + .3vw);
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Link = styled(NavLink)`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.body};
  text-decoration: none;
  padding: 0.45rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + .5vw);
  color: ${props => props.theme.text};

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`
const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  ${Box}:hover & {
    & > * {
      fill: ${props => props.theme.text};
    }
  }
`
// Framer motion configuration
const Item = {
    hidden:{
        scale:0,
    },
    show:{
        scale: 1,
        transition:{
            type:'spring',
            duration:1
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
                {
                    tags.map((item, index) => {
                        return <Tag key={index}>#{item}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link to={{pathname: `${demo}`}} target="_blank">Visit</Link>
                <Git to={{pathname: `${github}`}} target="_blank">
                    <Github width={30} height={30}/>
                </Git>
            </Footer>
        </Box>
    )
}
export default Card