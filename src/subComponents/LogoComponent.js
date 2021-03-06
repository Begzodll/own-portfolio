import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import { DarkTheme, mediaQueries } from "../components/Theme";
const Logo = styled(NavLink)`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  text-decoration: none;
  font-size: 2rem;
  z-index: 3;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}
               to="../assets/CV/begzodSrojidinov.pdf" target="_blank" download
  >CV</Logo>;
};

export default LogoComponent;
