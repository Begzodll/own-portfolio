import React, {useEffect, useRef} from "react";
import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import PowerButton from "../../subComponents/PowerButton";
import BigTitle from "../../subComponents/BigTitle";
import Card from "../../subComponents/Card";
import {motion} from "framer-motion";
import {Work} from "../../data/WorkData";

import {DarkTheme} from '../Themes';
import {YinYang} from "../AllSvg";
import styled, {ThemeProvider} from "styled-components";

const Box = styled.div`
  background-color: ${props => props.theme.body};
  height: 400vh;
  position: relative;
  //overflow: hidden;
  display: flex;
  align-items: center;
`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: #fff;
`
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`

const container = {
    hidden:{opacity:0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6,
            duration: 0.6
        }
    }
}

const WorkPage = () => {
    const ref = useRef(null);
    const yinYang = useRef(null)

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
            yinYang.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)'
        }

        window.addEventListener('scroll', rotate)

        return () => window.removeEventListener('scroll', rotate)
    }, [])

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton theme='dark'/>

                <Main ref={ref} variants={container} initial='hidden' animate='show'>
                    {
                        Work.map(d => <Card key={d.id} data={d}/>)
                    }
                </Main>
                <Rotate ref={yinYang}>
                    <YinYang width={80} height={80} fill={DarkTheme.text}/>
                </Rotate>

                <BigTitle text={'Work'} top='10%' right="20%"/>

            </Box>
        </ThemeProvider>
    )
}
export default WorkPage