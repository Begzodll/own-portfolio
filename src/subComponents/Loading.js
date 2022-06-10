import styled from "styled-components";
import '../assets/styles/loader.css';
const Loading = () => {
  return (
      <div className={'bg'}>
      <div className={'lds-hourglass'}/>
      </div>
  );
};

export default Loading;
