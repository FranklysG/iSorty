import styled from "styled-components";
import background from '../../assets/background.png';
export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: space-evenly;

    background: url(${background}) no-repeat;
    background-position: right;
`;