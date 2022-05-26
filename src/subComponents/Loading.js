import styled from "styled-components";
import '../assets/styles/loader.css'
// import {keyframes} from 'styled-components';

// const ldsHourglass = keyframes`
//   0% {
//     transform: rotate(0);
//     animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
//   }
//   50% {
//     transform: rotate(900deg);
//     animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//   }
//   100% {
//     transform: rotate(1800deg);
//   }
// `
//
// const Background = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: rgba(17, 17, 17, 0.74);
// `
// const Item = styled.div`
//   position: fixed;
//   top: 42%;
//   left: 47.5%;
//   width: 80px;
//   height: 80px;
//   z-index: 2;
//   &:after{
//     content: " ";
//     display: block;
//     border-radius: 50%;
//     position: absolute;
//     width: 0;
//     height: 0;
//     margin: 8px;
//     box-sizing: border-box;
//     border: 32px solid #fff;
//     border-color: #fff transparent #fff transparent;
//     animation: ldsHourglass 1.2s infinite;
//   }
// `

const Loading = () => {
  return (
      <div className={'bg'}>
      <div className={'lds-hourglass'}/>
      </div>
  );
};

export default Loading;
