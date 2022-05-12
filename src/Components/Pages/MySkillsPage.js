import React from "react";
import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
import PowerButton from "../../subComponents/PowerButton";
import ParticleComponent from "../../subComponents/ParticleComponent";
import {Design, Developer} from "../AllSvg";
import {LightTheme} from '../Themes'
import styled, {ThemeProvider} from "styled-components";
import BigTitle from "../../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover &{
    &>*{
      fill: ${props => props.theme.body};
    }
  }
  &>*:first-child{
    margin-right: 1rem;
  }
`
const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: .5rem 0;
  ${Main}:hover &{
      color:${props => props.theme.body};
  }
  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p{
    margin-left: 2rem;
  }
`
const MySkillsPage = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>
                <LogoComponent/>
                <SocialIcons theme='light'/>
                <PowerButton theme='light'/>
                <ParticleComponent theme='light'/>
                <Main>
                    <Title>
                        <Design width={40} height={40}/> Designer
                    </Title>
                    <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                    <Description>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>Web Design</li>
                            <li>Photo Design</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>Figma</li>
                            <li>Photoshop</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Developer width={40} height={40}/> FrontEnd Developer
                    </Title>
                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Html, Css, Sass, Bootstrap, Js, React, Redux, Saga, etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, WebStorm, Github, Gitlab etc.
                        </p>
                    </Description>
                </Main>
                <BigTitle text={'Skills'} top='80%' right="30%"/>
            </Box>
        </ThemeProvider>
    )
}
export default MySkillsPage