import React, {useState, useRef} from "react";
import {NavLink} from 'react-router-dom';
import {motion} from "framer-motion";
import {GetSizeScreen} from "../helper/GetSizeScreen";
import {DarkTheme} from "../Components/Themes";
import {Facebook, Github, Twitter, YouTube} from "../Components/AllSvg";

import styled from 'styled-components';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  &>*:not(:last-child){
    margin: 0%.5rem 0;
  }
`

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color === 'dark'  ? DarkTheme.text : DarkTheme.body};
  @media(max-width: 992px){
    background-color: ${props => props.color === 'dark'  ? DarkTheme.body : DarkTheme.body};
  }
`

const SocialIcons = (props) => {
    const [width, height] = GetSizeScreen()



    return(
        <Icons>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/begzodll"}}>
                    <Github width={25} height={25}  fill={ width < 992 ? DarkTheme.body : props.theme === 'dark'  ? DarkTheme.text : DarkTheme.body}/>
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://twitter.com/begzodll"}}>
                    <Twitter width={25} height={25} fill={ width < 992 ? DarkTheme.body : props.theme === 'dark'  ? DarkTheme.text : DarkTheme.body}/>
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://facebook.com/begzodll"}}>
                    <Facebook width={25} height={25} fill={ width < 992 ? DarkTheme.body : props.theme === 'dark'  ? DarkTheme.text : DarkTheme.body}/>
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.8}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://youtube.com/begzodll"}}>
                    <YouTube width={25} height={25} fill={ width < 992 ? DarkTheme.body : props.theme === 'dark'  ? DarkTheme.text : DarkTheme.body}/>
                </NavLink>
            </motion.div>
            <Line color={props.theme}
                initial={{
                    height:0
                }}
                  animate={{
                      height:'8rem'
                  }}
                  transition={{
                      type:'spring', duration:1, delay:0.8
                  }}
            />
        </Icons>
    )
}
export default SocialIcons